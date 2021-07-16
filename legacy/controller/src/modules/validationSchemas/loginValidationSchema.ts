import * as yup from 'yup';

const emailNotLong = "email must be at least 8 characters";
const passwordNotLong = "email must be at least 8 characters";
const invalidEmail = "email must be a valid email"

export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .min(8, emailNotLong)
    .max(255)
    .email(invalidEmail)
    .required(),
  password: yup
    .string()
    .min(8, passwordNotLong)
    .max(255)
    .required(),
});