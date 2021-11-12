import React, { FC } from "react";
import classes from "../../styles/Footer.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { formSchema } from "./yupSchema";
import { IFormInputs } from "../../utils/types";

const Form: FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitHandler: SubmitHandler<IFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
      <input
        {...register("firstname")}
        name="fistname"
        placeholder="First Name *"
      />
      {errors.username && (
        <p className={classes.errorMessage}>{errors.username.message}</p>
      )}
      <input
        {...register("lastname")}
        name="lastname"
        placeholder="Last Name *"
      />
      {errors.lastname && (
        <p className={classes.errorMessage}>{errors.lastname.message}</p>
      )}
      <input
        {...register("email")}
        name="email"
        placeholder="Email address *"
      />
      {errors.email && (
        <p className={classes.errorMessage}>{errors.email.message}</p>
      )}
      <input {...register("phone")} name="phone" placeholder="Phone Number *" />
      {errors.phone && (
        <p className={classes.errorMessage}>{errors.phone.message}</p>
      )}
      <textarea
        {...register("message")}
        name="Message"
        placeholder="Message *"
        rows={4}
      />
      {errors.message && (
        <p className={classes.errorMessage}>{errors.message.message}</p>
      )}
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
