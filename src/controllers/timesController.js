var timeModel = require("../models/timeModel");

function buscarPorPremios(req, res) {
  var nomeTime = req.body.nomeTime;

  timeModel.buscarPorPremios(premios).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function listar(req, res) {
  timeModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorIdTimes(req, res) {
  var idTimes = req.params.idTimes;

  timeModel.buscarPorIdTimes(idTimes).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var premios = req.body.premios;
  var nomeTime = req.body.nomeTime;

  timeModel.buscarPorPremios(premios).then((resultado) => {
    if (resultado.length > 0) {
      res
        .status(401)
        .json({ mensagem: `a empresa com o nome do time ${nomeTime} já existe` });
    } else {
      timeModel.cadastrar(nomeTime, premios).then((resultado) => {
        res.status(201).json(resultado);
      });
    }
  });
}

module.exports = {
  buscarPorPremios,
  buscarPorIdTimes,
  cadastrar,
  listar,
};
