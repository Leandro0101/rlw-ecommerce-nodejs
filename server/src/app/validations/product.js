const Yup = require("yup");

const product = Yup.object().shape({
    name: Yup.string().max(50).required().matches(/(\w)/, { excludeEmptyString: true }),
    description: Yup.string().required().matches(/(\w)/, { excludeEmptyString: true }),
    slug: Yup.string().max(50),
    price: Yup.number().required(),
    quantity: Yup.number().required()
});
module.exports = product;