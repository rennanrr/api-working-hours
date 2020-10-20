'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Rennan Ribas',
      email: 'rennanrr@hotmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 2,
      name: 'Chiara Zangaro',
      email: 'chiaraserrano@hotmail.com',
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

    return queryInterface.bulkDelete('users', null, {});
  }
};
