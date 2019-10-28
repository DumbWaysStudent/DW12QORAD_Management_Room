'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: DataTypes.STRING,
    identity_number: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  customer.associate = function (models) {
    customer.belongsToMany(models.rooms, {
      through: models.order,
      as: "rooms",
      foreignKey: "customer_id"
    });
  };
  return customer;
};