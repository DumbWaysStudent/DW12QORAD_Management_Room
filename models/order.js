'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    customer_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    is_done: DataTypes.BOOLEAN,
    is_booked: DataTypes.BOOLEAN,
    order_end_time: DataTypes.DATE,
    duration: DataTypes.INTEGER
  }, {});
  order.associate = function (models) {
    // associations can be defined here
  };
  return order;
};