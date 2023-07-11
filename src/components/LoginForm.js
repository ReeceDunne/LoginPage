import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import "../App.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <h1 className="title">Sign up for free Today</h1>
      <hr />
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="email">What's your email address?</label>
        <input
          type="email"
          id="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className={errors.email && touched.email ? "input-error" : ""}
          placeholder="Email"
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
        <label htmlFor="password">Create a password</label>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={errors.password && touched.password ? "input-error" : ""}
            placeholder="Password"
          />
          <div onClick={togglePasswordVisibility}>
            {showPassword ? (
              <VisibilityOffIcon className="input-icon" />
            ) : (
              <VisibilityIcon className="input-icon" />
            )}
          </div>
        </div>
        {errors.password && touched.password && (
          <p className="error">{errors.password}</p>
        )}
        {!errors.password && touched.password && (
          <>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </>
        )}
        <div>
          <button type="submit" disabled={isSubmitting} onSubmit={handleSubmit}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
