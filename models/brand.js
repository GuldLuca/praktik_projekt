const Sequelize = require('sequelize');

const sequelize = require('./database');

const Brand = sequelize.define('brand', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  imageURL: Sequelize.STRING
});

module.exports = Brand;