package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	_ "github.com/lib/pq"
)

//informacoes de conexao com a base
const (
	DB_USER     = "postgres"
	DB_PASSWORD = "a66pkqbjvr"
	DB_NAME     = "db"
	DB_PORT     = "7145"
)

// connecta e disponibiliza o banco de dados
func setupDB() *sql.DB {
	dbinfo := fmt.Sprintf("port=%s user=%s password=%s dbname=%s sslmode=disable", DB_PORT, DB_USER, DB_PASSWORD, DB_NAME)
	db, err := sql.Open("postgres", dbinfo)

	checkErr(err)

	return db
}

func main() {

	router := mux.NewRouter()

	// Rota para inserir o texto
	router.HandleFunc("/tb01", CreateTexto).Methods("POST", "OPTIONS")

	// inicia servidor
	fmt.Println("Server at 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}

// Funcao responsevel por identificar se aconteceu um erro e se sim para a execucao do programa
func checkErr(err error) {
	if err != nil {
		panic(err)
	}
}

type JsonRequest struct {
	Texto string `json:"texto"`
}

type JsonResponse struct {
	Type    string `json:"type"`
	Message string `json:"message"`
}

// Funcao que recebe a request transforma em json e insere no banco de dados
func CreateTexto(w http.ResponseWriter, r *http.Request) {

	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers",
		"Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	// Stop here for a Preflighted OPTIONS request.
	if r.Method == "OPTIONS" {
		return
	}

	var j JsonRequest
	err := json.NewDecoder(r.Body).Decode(&j)
	checkErr(err)
	var response = JsonResponse{}

	if j.Texto == "" {
		response = JsonResponse{Type: "error", Message: "Nenhum texto foi enviado"}
	} else {
		db := setupDB()

		fmt.Println("Inserindo texto: " + j.Texto)

		var lastInsertID int
		err := db.QueryRow("INSERT INTO tb01(col_texto, col_dt) VALUES($1, current_timestamp) returning id;", j.Texto).Scan(&lastInsertID)

		// verifica se aconteceu erro
		checkErr(err)

		response = JsonResponse{Type: "success", Message: "Texto salvo com sucesso!"}
	}

	// define o tipo da resposta como json
	w.Header().Set("Content-Type", "application/json")

	//Define HTTP status code para 201(CREATED)
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(response)
}
