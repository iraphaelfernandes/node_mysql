const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const moment = require('moment');
const Pagamento = require('./models/Pagamento');

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  helpers:{
    formatDate: (date) => {
      return moment(date).format('DD/MM/YYYY')
    }
  }
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/pagamento', (req, res) => {
  Pagamento.findAll().then( (pagamentos)=>{
  res.render('pagamento', {pagamentos:pagamentos});
  })
  res.render('pagamento')
});

app.get('/cad-pagamento', (req, res) => {
  res.render('cad-pagamento')
});

app.post('/add-pagamento', (req, res) => {
  Pagamento.create({
      nome: req.body.nome,
      valor: req.body.valor
    }).then(()=>{
      res.redirect('/pagamento')
      //res.send('Pagamento cadastrado com sucesso!')
    }).catch((erro)=>{
      res.send("Erro: pagamento não foi cadastrado com sucesso! " + erro)
    })
    //res.send("Nome: " + req.body.nome + "<br>Valor: " + req.body.valor + "<br>");
  });
  

app.listen(8080);