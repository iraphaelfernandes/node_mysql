const express = require('express');
const app = express();

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