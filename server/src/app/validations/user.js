import * as Yup from "yup";

const UserSchema = Yup.object().shape({
    name: Yup.string().max(50).required(),
    email: Yup.string().max(50).email().required(),
    password: Yup.string().min(8).required(),
});

export default UserSchema;