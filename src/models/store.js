"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      Store.hasOne(models["Address"], {
        foreignKey: "storeId",
      });
      Store.belongsTo(models["StoreOwner"], {
        foreignKey: "storeOwnerId",
      });
    }
  }
  Store.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
      },
      storeOwnerId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Store",
      timestamps: true,
    }
  );
  return Store;
};
