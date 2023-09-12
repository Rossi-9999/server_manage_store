"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   models["Store"].belongsTo(models["StoreOwner"], {
      //     foreignKey: {
      //       type: DataTypes.UUID,
      //       allowNull: false,
      //       name: "storeOwnerId",
      //     },
      //   });
    }
  }
  Store.init(
    {
      name: DataTypes.STRING,
      logo: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: DataTypes.STRING,
      storeOwnerId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Store",
      timestamps: true,
    }
  );
  return Store;
};
