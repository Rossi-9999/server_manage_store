"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class StoreOwner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      StoreOwner.hasMany(models["Store"], {
        foreignKey: "storeOwnerId",
      });
      StoreOwner.hasMany(models["Contract"], {
        foreignKey: "storeOwnerId",
      });
      StoreOwner.hasMany(models["JobConnect"], {
        foreignKey: "storeOwnerId",
      });
    }
  }
  StoreOwner.init(
    {
      fullName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
      },
      password: DataTypes.STRING,
      birthday: DataTypes.DATE,
      image: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
      identifyId: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
    },
    {
      sequelize,
      modelName: "StoreOwner",
      timestamps: true,
    }
  );
  return StoreOwner;
};
