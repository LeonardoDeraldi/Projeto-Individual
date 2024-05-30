CREATE DATABASE ProjetoIndividual;
USE ProjetoIndividual;

CREATE TABLE times (
	idTimes INT PRIMARY KEY AUTO_INCREMENT,
	nomeTime VARCHAR(50),
	premios DECIMAL(5)
);

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fkTimes INT,
	FOREIGN KEY (fkTimes) REFERENCES times(idTimes)
);

insert into times(nomeTime, premios) values
('Los Angeles Lakers', 6);

CREATE TABLE quiz(
	idQuiz INT PRIMARY KEY AUTO_INCREMENT,
	certas INT,
	erradas INT,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

select * from usuario;

select * from times;