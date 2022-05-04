/*
Arquivo: database.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 03/05/2022
 * Author: Welington de Sousa Sá
 * Conteúdo para Teste de Avaliação -  DEV Digital
*/

// ==> Conexão com a Base de Dados:

const { Pool } = require("pg");
const dotenv = require("dotenv");

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.on("connect", () => {
  console.log("Base de Dados conectado com sucesso!");
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
