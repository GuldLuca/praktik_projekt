'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("sizes", [
      {
        title:"XXXS",
        createdAt:"04-04-19",
        updatedAt:"05-05-19"
      },
      {
        title: "XXS",
        createdAt: "02-02-19",
        updatedAt: "03-03-19"
      },
      {
        title:"XS",
        createdAt:"04-04-19",
        updatedAt:"05-05-19"
      },
      {
        title:"S",
        createdAt:"04-04-19",
        updatedAt:"05-05-19"
      },
      {
        title:"M",
        createdAt:"04-04-19",
        updatedAt:"05-05-19"
      },
      {
        title:"L",
        createdAt:"04-04-19",
        updatedAt:"05-05-19"
      },
      {
        title:"XL",
        createdAt:"04-04-19",
        updatedAt:"05-05-19"
      },
      {
        title:"XXL",
        createdAt:"04-04-19",
        updatedAt:"05-05-19"
      },
      {
        title:"XXXL",
        createdAt:"04-04-19",
        updatedAt:"05-05-19"
      },
      {
        title:"XXXXL",
        createdAt:"04-04-19",
        updatedAt:"05-05-19"
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("sizes", null, {});
  }
};
