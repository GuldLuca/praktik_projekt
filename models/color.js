const Sequelize = require('sequelize');

const sequelize = require('./database');

const Color = sequelize.define('color', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING
});

module.exports = Color;