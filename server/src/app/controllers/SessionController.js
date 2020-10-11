import jwt from "jsonwebtoken";
import authConfig from '../../config/auth.json';
import User from "../models/User";

function generateToken(params) {
    return jwt.sign({ params }, authConfig.secret, { expiresIn: "48h"  });
}

export default {
    async store(req, res) {
        const user = await User.findOne({ where: { email: req.body.email } });
        
        if (!user)
            return res.status(404).json({ error: "email or password incorrects" });
            
        const { password } = req.body;
        
        const verify = await user.checkPassword(password);

        if (!verify)
            return res.status(404).json({ error: "email or password incorrects" });;

        const { id, name, email, admin } = user;

        return res.status(200).json({
            user: { id, name, email, token: generateToken({ id, admin }) },
        });

    },
}

