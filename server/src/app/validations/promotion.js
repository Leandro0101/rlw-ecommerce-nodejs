const Yup = require("yup");

const promotion = Yup.object().shape({
    code: Yup.string().required(),
    rate: Yup.number().required(),
    expire_in: Yup.date().required(),
    limite: Yup.number(),
});

module.exports = promotion;
