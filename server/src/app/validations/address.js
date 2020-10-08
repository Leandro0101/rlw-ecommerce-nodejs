import * as Yup from "yup";

const SchemaAddress = Yup.object().shape({
	zipcode: Yup.string().max(8).min(1).required().matches(/(\w)/, { excludeEmptyString: true }),
	uf: Yup.string().max(2).min(1).required().matches(/(\w)/, { excludeEmptyString: true }),
	city: Yup.string().max(30).min(1).required().matches(/(\w)/, { excludeEmptyString: true }),
	district: Yup.string().max(30).min(1).required().matches(/(\w)/, { excludeEmptyString: true }),
	street: Yup.string().max(40).required().matches(/(\w)/, { excludeEmptyString: true }),
	number: Yup.number().required(),
});

export default SchemaAddress;
