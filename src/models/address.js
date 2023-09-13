"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      // define association here
    }
  }
  Address.init(
    {
      apartmentNumber: DataTypes.STRING,
      road: DataTypes.STRING,
      ward: DataTypes.STRING,
      district: DataTypes.STRING,
      city: DataTypes.STRING,
      storeId: DataTypes.UUID,
      wokerId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Address",
      timestamps: true,
    }
  );
  return Address;
};
