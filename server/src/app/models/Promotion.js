const { Model, DataTypes } = require("sequelize");

class Promotions extends Model {
    static init(sequelize) {
        super.init({
            code: DataTypes.STRING,
            rate: DataTypes.INTEGER,
            expire_in: DataTypes.DATE,
            limite: DataTypes.INTEGER,
        }, {
            sequelize,
        });
    };
}

module.exports = Promotions;
