"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Worker extends Model {
    static associate(models) {
      Worker.hasOne(models["Contract"], {
        foreignKey: "workerId",
      });
      Worker.hasMany(models["JobConnect"], {
        foreignKey: "workerId",
      });
      Worker.hasOne(models["Address"], {
        foreignKey: "workerId",
      });
    }
  }
  Worker.init(
    {
      fullName: {
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthday: DataTypes.DATE,
      image: DataTypes.STRING,
      gender: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Worker",
      timestamps: true,
    }
  );
  return Worker;
};
