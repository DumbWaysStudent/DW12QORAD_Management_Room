'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rooms', [
      {
        name: 'A1'
      },
      {
        name: 'A2'
      },
      {
        name: 'A3'
      },
      {
        name: 'A4'
      },
      {
        name: 'A5'
      },
      {
        name: 'A6'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rooms', null, {});
  }
};
