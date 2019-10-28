'use strict';
module.exports = (sequelize, DataTypes) => {
  const rooms = sequelize.define('rooms', {
    name: DataTypes.STRING
  }, {});
  rooms.associate = function (models) {
    rooms.belongsToMany(models.customer, {
      through: models.order,
      as: "customers",
      foreignKey: "room_id"
    });
  };
  return rooms;
};