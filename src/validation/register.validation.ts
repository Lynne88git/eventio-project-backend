import * as Yup from "yup";

export const RegisterValidationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup .string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    repeatPassword: Yup.string().required(),
});