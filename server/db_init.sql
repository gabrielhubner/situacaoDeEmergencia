CREATE DATABASE reclamacoes;

CREATE TABLE reclamacoes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  tipo varchar(256),
  local varchar(1024),
  detalhe varchar(5030),
);
