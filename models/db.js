const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_learner', 'raphael', 'raphaelDB13$', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}