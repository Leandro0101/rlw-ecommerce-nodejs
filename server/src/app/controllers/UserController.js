import User from "../models/User";
import UserSchema from "../validations/UserSchema";

export default {
    async store(req, res) {

        if (!await UserSchema.isValid(req.body)) {
            return res.status(405).json({ error: 'Validation fails' });
        }

        const { email } = req.body;

        const userExist = await User.findOne({ where: { email } });

        if (userExist)
            return res.status(200).json("User already exists!");

        const { id, name, admin } = await User.create(req.body);

        return res.status(201).json({ id, name, email, admin });

    }
}