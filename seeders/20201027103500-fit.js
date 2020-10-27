'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("fits", [{
      title: "Short and Skinny",
      description: "body type description",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },
    {
      title:"Short and fat",
      description: "body type description",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    },
    {
      title:"Short and mid",
      description: "body type description",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    },
    {
      title:"Mid and Skinny",
      description: "body type description",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    },
    {
      title:"Mid and fat",
      description: "body type description",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    },
    {
      title:"Mid and mid",
      description: "body type description",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    },
    {
      title:"Tall and Skinny",
      description: "body type description",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    },
    {
      title:"Tall and fat",
      description: "body type description",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    },
    {
      title:"Tall and mid",
      description: "body type description",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("fits", null, {});
  }
};
