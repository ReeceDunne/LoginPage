import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
//  min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email!")
    .required("Field is Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please enter a strong password!" })
    .required("Field is Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must match!")
    .required("Field is Required"),
});
