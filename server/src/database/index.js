import Sequelize from "sequelize";
import dbConfig from "../config/database";
import User from "../app/models/User";
import Category from "../app/models/Category";
import Address from "../app/models/Address";
import Promotion from "../app/models/Promotion";
const connection = new Sequelize(dbConfig);

const models = [ User, Category, Address, Promotion];

models.map(model => model.init(connection));
models.map(model => model.associate && model.associate(connection.models));

export default connection;