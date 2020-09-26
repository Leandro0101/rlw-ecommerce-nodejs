const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
    async store(req, res) {
        const { user_id } = req.params;
        const { zipcode, uf, city, district, street, number } = req.body;
        const user = await User.findByPk(user_id);

        if (!user)
            return res.status(404).json({ err: "User not found" });

        const address = await Address.create({ zipcode, uf, city, district, street, number, user_id });
        return res.status(201).json(address);
    }
}