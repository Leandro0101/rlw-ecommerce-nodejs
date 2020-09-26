const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING(50),
      email: DataTypes.STRING(50),
      admin: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
    }, { sequelize })
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });
  }
}

module.exports = User;