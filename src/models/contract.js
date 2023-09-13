"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    static associate(models) {}
  }
  Contract.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.STRING,
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      storeOwnerId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      workerId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      storeId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Contract",
      timestamps: true,
    }
  );
  return Contract;
};
