const express = require('express');
const app = express();

//Conexão com DB MySQL
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'raphael',
  password: 'raphaelDB13$',
  database: 'db_learner'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});
//-------------------
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
});
app.get('/sobre-empresa', (req, res) => {
  res.sendFile(__dirname + '/src/sobre-empresa.html')
});
app.get('/blog', (req, res) => {
  res.send('Gerenciador de Estoque')
});

app.get('/contato', (req, res) => {
  res.send('Pagina de contato')
});



app.listen(8080);