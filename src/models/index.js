const { Sequelize, DataTypes } = require("sequelize");
const path = require("path");

// Perbaiki path ke config.json
const configPath = path.resolve(__dirname, "../../config/config.json");
const config = require(configPath)[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

const Request = require("./request")(sequelize, DataTypes);
const Admin = require("./admin")(sequelize, DataTypes);

const db = {
  sequelize,
  Sequelize,
  Request, 
  Admin,
};

module.exports = db;
