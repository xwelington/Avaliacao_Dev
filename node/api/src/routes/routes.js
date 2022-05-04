/*
Arquivo: routes.js
 * Descrição: arquivo responsável por toda a configuração da aplicação (Back-End)
 * Data: 03/05/2022
 * Author: Welington de Sousa Sá
 * Conteúdo para Teste de Avaliação -  DEV Digital
*/

// ==> Rota responsável por pegar a lista no banco de dados

const router = require("express-promise-router")();
const textController = require("../controllers/controller");

router.get("/tb01", textController.listAllText);

module.exports = router;
