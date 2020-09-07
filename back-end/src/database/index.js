const Sequelize = require("sequelize");

const Connection = new Sequelize("rlw_ecommerce", "root","root", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = Connection;