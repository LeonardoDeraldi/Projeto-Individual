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
('Los Angeles Lakers', 6),
('Miami Heat', 10),
('Chicago Bulls', 9);

CREATE TABLE quiz(
	idQuiz INT AUTO_INCREMENT,
	certas INT,
	erradas INT,
	fkUsuario INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    primary key (idQuiz, fkUsuario)
);

select * from usuario;

select * from times;

select * from quiz;

SELECT certas, erradas FROM usuario JOIN quiz ON idUsuario = fkUsuario;

 SELECT usuario.nome, quiz.certas, quiz.erradas FROM usuario JOIN quiz ON idUsuario = fkUsuario;