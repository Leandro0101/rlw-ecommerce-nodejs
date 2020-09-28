import { Model, DataTypes } from "sequelize";

export default class Address extends Model {
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            uf: DataTypes.STRING,
            city: DataTypes.STRING,
            district: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
        }, { sequelize })
    }
    static associate(models){
        this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    }
}