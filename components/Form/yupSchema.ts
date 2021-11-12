import * as yup from "yup";

export const formSchema = yup.object().shape({
  username: yup.string().required("Username is required!"),
  lastname: yup.string().required("Lastname is required!"),
  email: yup
    .string()
    .email("Please enter correct email address")
    .required("Email is required!"),
  phone: yup.string().required("Phone Number is required!"),
  message: yup.string().required("Message is required!"),
});
