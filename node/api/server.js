/*
Arquivo: server.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 03/05/2022
 * Author: Welington de Sousa Sá
 * Conteúdo para Teste de Avaliação -  DEV Digital
*/

const app = require("./src/app");

const port = process.env.PORT || 8000;

app.listen(port);
console.log("Aplicação executando na porta", port);
