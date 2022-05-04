/*
Arquivo: controller.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 03/05/2022
 * Author: Welington de Sousa Sá
 * Conteúdo para Teste de Avaliação -  DEV Digital
*/

// ==> Método responsável por selecionar os 10 ultimos cadastros ordenados pelas ultimas inserções

const db = require("../config/database");

exports.listAllText = async (req, res) => {
  console.log("executando lista alltext");
  const response = await db.query(
    "SELECT * FROM tb01 ORDER BY col_dt DESC LIMIT 10"
  );
  res.status(200).send(response.rows);
};
