import * as Yup from "yup";

const UserSchema = Yup.object().shape({
    name: Yup.string().max(50).required().matches(/(\w)/, { excludeEmptyString: true }),
    email: Yup.string().max(50).email().required().matches(/(\w)/, { excludeEmptyString: true }),
    password: Yup.string().min(8).required().matches(/(\w)/, { excludeEmptyString: true }),
});

export default UserSchema;