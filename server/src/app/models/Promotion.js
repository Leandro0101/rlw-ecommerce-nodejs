const { Model, DataTypes } = require("sequelize");

class Promotion extends Model {
    static init(sequelize) {
        super.init({
            code: DataTypes.STRING,
            rate: DataTypes.INTEGER,
            expire_in: DataTypes.DATE,
            limite: DataTypes.INTEGER,
        }, {sequelize})   
    }
        static associate(models){
            this.belongsTo(models.Promotion,  { foreignKey: "id_promotion",   as: "promotion" });
       }
}
module.exports = Promotion;
