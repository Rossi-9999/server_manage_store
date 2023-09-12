"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contract.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      statusId: DataTypes.UUID,
      storeOwnerId: DataTypes.UUID,
      workerId: DataTypes.UUID,
      storeId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Contract",
      timestamps: true,
    }
  );
  return Contract;
};
