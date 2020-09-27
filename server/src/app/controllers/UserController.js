const User = require("../models/User");
const UserSchema = require("../validations/UserSchema");

module.exports = {
    async store(req, res) {

        if (!await UserSchema.isValid(req.body)) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { name, email, admin, password } = req.body;
        const { id } = await User.create({ name, email, admin, password });

        const userExist = await User.findOne({ where: { email } });

        if(userExist)
            return res.status(200).json("User already exists!");

        return res.status(201).json({ id, name, email, admin });

    }
}