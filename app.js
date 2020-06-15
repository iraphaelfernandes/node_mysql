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



// connection.query("UPDATE users SET name = 'Kelly 2' WHERE id = 2",
// function(err, result){
//   if(!err) {
//     console.log('Usuario cadastrado com sucesso!');
//   }
//   else {
//     console.log('Erro ao cadastrar o usuario!')
//   }
// } );

connection.query("DELETE FROM users WHERE id = 2", 
(err, result) => {
  if(!err) {
    console.log('Usuario deletado com sucesso!')
  }
  else {
    console.log('Erro ao deletar usuario!')
  }
});