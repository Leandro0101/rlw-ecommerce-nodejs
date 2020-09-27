const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../app/models/User");
const Category = require("../app/models/Category");
const Address = require("../app/models/Address");
const connection = new Sequelize(dbConfig);

Category.init(connection);
User.init(connection);
Address.init(connection);

Address.associate(connection.models);
User.associate(connection.models);

module.exports = connection;