const Sequelize = require('sequelize');

const sequelize = require('./database');

const Size = sequelize.define('size', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING
});

module.exports = Size;