'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('clockPoints', [{
      id: 1,
      id_user: 1,
      arrive: new Date(2020,10,19,7,0,0),
      exit: new Date(2020,10,19,17,0,0),
      lunch_exit: new Date(2020,10,19,12,30,0),
      lunch_arrive: new Date(2020,10,19,12,30,0),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clockPoints', null, {});
  }
};
