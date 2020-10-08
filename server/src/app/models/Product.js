import { Model, DataTypes } from "sequelize";

export default class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING(50),
            slug: DataTypes.STRING,
            description: DataTypes.TEXT,
            quantity: DataTypes.INTEGER,
            price:  DataTypes.DOUBLE,
            
        }, { sequelize })
    }
    static associate(models){
        this.hasMany(models.Category, { foreignKey: "id_category",   as: "category" });
   }
    static associate(models){
         this.hasMany(models.Promotion, { foreignKey: "id_promotion", as: "promotion" });
    }
}