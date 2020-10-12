import { Model, DataTypes } from 'sequelize'

export default class Image extends Model {
  static init (sequelize) {
    super.init({
      name: DataTypes.STRING,
      key: DataTypes.STRING,
      size: DataTypes.INTEGER
    }, { sequelize })
  }

  static associate (models) {
    // this.hasMany(models.Product, { foreignKey: "id_product",   as: "product" });
  }
}
