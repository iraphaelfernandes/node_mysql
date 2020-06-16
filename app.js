const Sequelize = require('sequelize');

const sequelize = new Sequelize('db_learner', 'raphael', 'raphaelDB13$', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(() =>{
  console.log('Conexao realizada com sucesso')
}).catch((err) =>{
  console.log('Erro ao realizar a conexao como o DB: ' + err)
});

const Pagamento = sequelize.define('pagamentos', {
  // Model attributes are defined here
  nome: {
    type: Sequelize.STRING
  },
  valor: {
    type: Sequelize.DOUBLE
    // allowNull defaults to true
  }
  // Other model options go here
});


// Criar tabela
// User.sync({force: true});

Pagamento.create({
  nome: 'Energia',
  valor: 220
});