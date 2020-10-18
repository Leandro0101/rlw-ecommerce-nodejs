import { Model, DataTypes } from 'sequelize'

export default class Notification extends Model {
  static init (sequelize) {
    super.init({
      title: DataTypes.STRING,
      description: DataTypes.STRING
    }, { sequelize })
  }

  static asssociate (models) {
    this.belongsToMany(models.User, { foreignKey: 'notification_id', through: 'notifications_users', as: 'notifications_users' })
  }
}
