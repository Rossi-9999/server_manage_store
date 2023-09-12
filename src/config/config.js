require("dotenv").config();
module.exports = {
  development: {
    username: "postgres",
    password: "123456",
    database: "testkn",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
    define: {
      freezeTableName: false,
    },
    timezone: "+07:00",
  },
};
