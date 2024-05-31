var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/registrar", function (req, res) {
    usuarioController.registrar(req, res);
});

router.post("/quizSelect", function (req, res) {
    usuarioController.quizSelect(req, res);
});

router.get("/buscaApreencao", function (req, res) {
    usuarioController.buscaApreencao(req, res);
});

// router.get("/buscarUltimoQuiz", function (req, res) {
//     usuarioController.buscarUltimoQuiz(req, res);
// });
module.exports = router;