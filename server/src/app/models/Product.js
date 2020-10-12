import { Model, DataTypes } from "sequelize";

export default class Product extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING(50),
            slug: DataTypes.STRING,
            description: DataTypes.TEXT,
            quantity: DataTypes.INTEGER,
            price: DataTypes.DOUBLE,

        }, { sequelize })
    }

    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: "id_category", as: "category" });
        this.hasMany(models.Promotion, { foreignKey: "id_promotion", as: "promotion" });
        this.belongsToMany(models.User, { foreignKey: "product_id", through: "favorites_products_users", as: "users" });
        this.belongsTo(models.Image, { foreignKey: "id", as: "product" });
    }

}