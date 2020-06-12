const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Gerenciador Financeiro');
});

app.get('/contato', (req, res) => {
  res.send('Pagina de contato')
});

app.listen(8080);