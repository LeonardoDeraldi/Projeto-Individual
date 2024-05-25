var database = require("../database/config");

function buscarPorIdTimes(idTimes) {
  var instrucaoSql = `SELECT * FROM times WHERE idTimes = '${idTimes}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT * FROM times`;

  return database.executar(instrucaoSql);
}

function buscarPorNomeTime(nomeTime) {
  var instrucaoSql = `SELECT * FROM times WHERE nomeTime = '${nomeTime}'`;

  return database.executar(instrucaoSql);
}

function cadastrar(nomeTime, premios) {
  var instrucaoSql = `INSERT INTO times (nomeTime, premios) VALUES ('${nomeTime}', '${premios}')`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarPorNomeTime, buscarPorIdTimes, cadastrar, listar };
