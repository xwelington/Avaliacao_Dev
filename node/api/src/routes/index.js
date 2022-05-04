/*
Arquivo: index.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 03/05/2022
 * Author: Welington de Sousa Sá
 * Conteúdo para Teste de Avaliação -  DEV Digital
*/

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({});
});

module.exports = router;
