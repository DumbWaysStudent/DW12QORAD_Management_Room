'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('customers', [
      {
        name: 'Nur Muhamad',
        identity_number: '123456',
        phone_number: '08123456789',
        image: "http://fakeimage.com/fake.png",
      },
      {
        name: 'Muhamad Nur',
        identity_number: '654321',
        phone_number: '0812876543',
        image: "http://fakeimage.com/fake.png",
      },
      {
        name: 'Muhamad Rum',
        identity_number: '109887',
        phone_number: '081262626262',
        image: "http://fakeimage.com/fake.png",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('customers', null, {});
  }
};
