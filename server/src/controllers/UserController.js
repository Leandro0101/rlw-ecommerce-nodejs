const User = require("../models/User");
const bcrypt = require("bcryptjs");
module.exports = {
    async store(req, res) {
        const { name, email, admin } = req.body;
        const salt = bcrypt.genSaltSync(10);

        let { password } = req.body;

        password = bcrypt.hashSync(password, salt);
        const user = await User.create({ name, email, admin, password });

        user.password = undefined;

        return res.status(201).json(user);
    }
}