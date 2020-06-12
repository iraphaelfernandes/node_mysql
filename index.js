var http  = require('http');

http.createServer((req, res) => {
  res.end('Gerenciador');
}).listen(8080);