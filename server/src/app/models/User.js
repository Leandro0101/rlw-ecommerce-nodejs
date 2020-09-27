const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");


class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING(50),
      email: DataTypes.STRING(50),
      admin: DataTypes.BOOLEAN,
      password: DataTypes.STRING,
    }, { sequelize })

    // Antes de salvar o user, é verificado a existência da senha e gerado um hash dela.

    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password = await bcrypt.hash(user.password, 10);
      }
    });

  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: "user_id", as: "addresses" });
  }
}

module.exports = User;