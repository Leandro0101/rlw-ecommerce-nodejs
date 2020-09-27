const { Model, DataTypes } = require("sequelize");

class Category extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            slugy: DataTypes.STRING,
            description: DataTypes.TEXT,
        }, { sequelize })
        this.addHook("beforeSave", async (category) => {
            if (category.slug) {
              category.slug = slugify(category.slug);
            }
          });
    }
    
    
}

module.exports = Category;