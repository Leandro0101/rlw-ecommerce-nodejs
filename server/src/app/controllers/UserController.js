import User from "../models/User";
import UserSchema from "../validations/user";
import SessionController from "./SessionController";

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
    },

    async update(req, res) {
        const user = await User.findByPk(req.user.id);

        if (!user)
            res.status(404).json({ error: "Resource not found" });

        if (!await UserSchema.isValid(req.body))
            return res.status(405).json({ error: 'Validation fails' });

        await user.update(req.body);

        const { email, name } = req.body;

        return res.status(200).json({ email, name });
    },

    async destroy(req, res) {

        const user = await User.findByPk(req.user.id);

        if (!user)
            res.status(404).json({ error: "Resource not found" });

        await User.destroy({ where: { id: req.user.id } });

        SessionController.destroy(req.user.token);

        return res.status(200).json();

    },

    async show(req, res) {

        const user = await User.findByPk(req.user.id);

        if (!user)
            res.status(404).json({ error: "Resource not found" });

        const { name, email } = await User.findByPk(req.user.id);

        return res.status(200).json({ name, email });

    }

}