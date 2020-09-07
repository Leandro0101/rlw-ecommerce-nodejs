const Sequelize = require("sequelize");
const Connection = require("../database");

const Category = Connection.define("categories", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Category.sync({ force: false });

module.exports = Category;