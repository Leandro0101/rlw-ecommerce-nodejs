const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const User = require("../app/models/User");
const Category = require("../app/models/Category");
const Address = require("../app/models/Address");
const Promotion = require("../app/models/Promotion");

const connection = new Sequelize(dbConfig);

const models = [ User, Category, Address];

models.map(model => model.init(connection));
models.map(model => model.associate && model.associate(connection.models));

module.exports = connection;