'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'nurmuhamadrum@gmail.com',
        password: '1234'
      },
      {
        email: 'nurmuhamadrum16@gmail.com',
        password: '1234'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
