'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('clockPoints', [{
      id: 1,
      id_user: 1,
      arrive: '2020-11-19T7:00:00.000Z',
      exit: '2020-11-19T17:30:00.000Z',
      lunch_exit: '2020-11-19T12:30:00.000Z',
      lunch_arrive: '2020-11-19T13:30:00.000Z',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clockPoints', null, {});
  }
};
