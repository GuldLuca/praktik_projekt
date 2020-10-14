const Sequelize = require('sequelize');

const sequelize = require('./database');

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  imageUrl: Sequelize.STRING
});

module.exports = Category; 