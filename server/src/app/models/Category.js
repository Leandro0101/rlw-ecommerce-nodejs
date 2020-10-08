import { Model, DataTypes } from "sequelize";

export default class Category extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING(50),
            slug: DataTypes.STRING(50),
            description: DataTypes.TEXT,
        }, { sequelize })
    }
    static associate(models){
        this.belongsTo(models.Category, { foreignKey: "id_category",   as: "category" });
   }
    
}

