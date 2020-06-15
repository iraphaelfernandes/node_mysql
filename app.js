const express = require('express');
const app = express();

//Conexão com DB MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'raphael',
  password : 'raphaelDB13$',
  database : 'db_learner'
});

connection.connect( (err) => {
  if (err) console.err('Erro ao realizar conexão com o DB: ' + err.stack); return;
});
//---------------------------------------------------------------


//Cadastrar ítem
connection.query("INSERT INTO users(name, email) VALUES('Kelly','kelly@kelly.com')",
function(err, result){
  if(!err) {
    console.log('Usuario cadastrado com sucesso!');
  }
  else {
    console.log('Erro ao cadastrar o usuario!')
  }
} );