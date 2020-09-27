const Promotion = require("../models/Promotion");
const promotionValidation = require("../validations/promotion");

module.exports = {
    async store(req, res) {
        console.log(req.body)
        if (!(await promotionValidation.isValid(req.body))) {
            return res.status(405).json({ error: 'Validation fails' });
        }

        const promotion = await Promotion.create(req.body);

        return res.status(200).json(promotion);

    }
}