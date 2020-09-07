const Sequelize = require("sequelize");

const Connection = new Sequelize("rlw-ecommerce", "root","root", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = Connection;