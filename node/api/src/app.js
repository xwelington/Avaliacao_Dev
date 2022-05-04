/*
Arquivo: app.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 03/05/2022
 * Author: Welington de Sousa Sá
 * Conteúdo para Teste de Avaliação -  DEV Digital
*/

const express = require("express");
const cors = require("cors");

const app = express();

// ==> Rotas da API:
const index = require("./routes/index");
const textRoute = require("./routes/routes");

// ==> Rotas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(
  cors({
    origin: "*",
  })
);

app.use(index);
app.use("/", textRoute);

module.exports = app;
