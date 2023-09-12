"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
