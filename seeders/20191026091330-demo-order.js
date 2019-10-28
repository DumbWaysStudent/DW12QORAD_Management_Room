'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        customer_id: 1,
        room_id: 1,
        is_done: false,
        is_booked: true,
        order_end_time: new Date,
        duration: 5,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', null, {});
  }
};
