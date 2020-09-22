const Sequelize = require('sequelize');

const sequelize = new Sequelize('firestarters-webshop', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;