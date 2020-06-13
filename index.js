const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Gerenciador Financeiro');
});

app.get('/contato', (req, res) => {
  res.send('Pagina de contato')
});

app.get('/estoque', (req, res) => {
  res.send('Gerenciador de Estoque')
});

app.listen(8080);