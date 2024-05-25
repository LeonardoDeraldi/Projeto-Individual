var express = require("express");
var router = express.Router();

var timesController = require("../controllers/timesController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    timesController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    timesController.buscarPorNomeTime(req, res);
});

router.get("/buscar/:idTimes", function (req, res) {
  timesController.buscarPorIdTimes(req, res);
});

router.get("/listar", function (req, res) {
  timesController.listar(req, res);
});

module.exports = router;