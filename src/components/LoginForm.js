import React, { useState } from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import "../App.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InfoIcon from "@mui/icons-material/Info";

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
        <div className="input-container">
          <input
            type="email"
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={errors.email && touched.email ? "input-error" : ""}
            placeholder="Email"
          />
        </div>
        {errors.email && touched.email && (
          <div className="error-container">
            <InfoIcon className="error-icon" />
            <p className="error">{errors.email}</p>
          </div>
        )}
        <label htmlFor="password">Create a password</label>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            onBlur={handleBlur}
            className={errors.password && touched.password ? "input-error" : ""}
            onChange={handleChange}
            value={values.password}
            placeholder="Password"
          />
          {!showPassword ? (
            <VisibilityOffIcon
              onMouseDown={togglePasswordVisibility}
              className="input-icon"
            />
          ) : (
            <VisibilityIcon
              onMouseDown={togglePasswordVisibility}
              className="input-icon"
            />
          )}
        </div>
        {errors.password && touched.password && (
          <div className="error-container">
            <InfoIcon className="error-icon" />
            <p className="error">{errors.password}</p>
          </div>
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
