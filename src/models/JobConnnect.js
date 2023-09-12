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
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      type: DataTypes.STRING,
      statusId: DataTypes.UUID,
      storeOwnerId: DataTypes.UUID,
      workerId: DataTypes.UUID,
      storeId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "JobConnect",
    }
  );
  return JobConnect;
};
