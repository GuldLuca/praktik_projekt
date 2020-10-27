'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tags", [
      {
      title: "Winter",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },
    {
      title:"Summer",
      createdAt:"04-04-19",
      updatedAt:"05-05-19"
    },
    {
      title: "Autumn",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },{
      title: "Spring",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },{
      title: "Formal",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },{
      title: "Casual",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },{
      title: "FCK NZS",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },{
      title: "FCK CPS",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },{
      title: "Kommunism",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },{
      title: "Veganism",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },{
      title: "Anti-capitalist",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },{
      title: "Anti-fascist",
      createdAt: "02-02-19",
      updatedAt: "03-03-19"
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tags", null, {});
  }
};
