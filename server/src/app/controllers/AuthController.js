const jwt = require("jsonwebtoken");
const authConfig = require('../../config/auth.json');
const User = require("../models/User");

function generateToken(params) {
    return jwt.sign({ params }, authConfig.secret, { expiresIn: "48h" });
}

module.exports = {
    async authentication(req, res) {

        const user = await User.findOne({ where: { email: req.body.email } }); 

        if(!user)
            return res.status(404).json({ error: "user not found" });
        
        const { password } = req.body;
        
        return res.status(200).json(await user.checkPassword(password));

    }
}