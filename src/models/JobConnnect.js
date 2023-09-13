"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JobConnect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobConnect.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      statusId: {
        type: DataTypes.UUID,
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
      modelName: "JobConnect",
    }
  );
  return JobConnect;
};
