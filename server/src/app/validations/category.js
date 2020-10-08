const Yup = require("yup");

const category = Yup.object().shape({
    name: Yup.string().max(50).required().matches(/(\w)/, { excludeEmptyString: true }),
    description: Yup.string().required().matches(/(\w)/, { excludeEmptyString: true }),
    slug: Yup.string().max(50)
    
});
module.exports = category;
