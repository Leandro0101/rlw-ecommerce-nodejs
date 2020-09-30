const Yup = require("yup");

const category = Yup.object().shape({
    name: Yup.string().max(50).required(),
    description: Yup.string().required(),
    slug: Yup.string().max(50).required(),
    
});
module.exports = category;
