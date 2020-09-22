const Sequelize = require('sequelize');

const sequelize = require('./database');

const Tag = sequelize.define('tag', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING
});

module.exports = Tag;