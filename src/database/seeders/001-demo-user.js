'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Rennan Ribas',
      email: 'rennanrr@hotmail.com',
      password: '1234',
      dailyMinutes: '480',
      monthlyMinutes: '9600',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      id: 2,
      name: 'Edney Cruz',
      email: 'edney.cruz@oowlish.com',
      password: '1234',
      dailyMinutes: '480',
      monthlyMinutes: '9600',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
