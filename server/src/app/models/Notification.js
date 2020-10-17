import { Model, DataTypes } from 'sequelize'

export default class Notification extends Model {
  static init (sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING
    }, { sequelize })
  }
}
