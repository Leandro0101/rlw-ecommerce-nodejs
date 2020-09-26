const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../models/User");
const Address = require("../models/Address");
const connection = new Sequelize(dbConfig);

User.init(connection);
Address.init(connection);

Address.associate(connection.models);
User.associate(connection.models);

module.exports = connection;