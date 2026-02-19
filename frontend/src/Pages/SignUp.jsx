import "./styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUpService } from "../service/service";

const SignUp = () => {
  const navigate = useNavigate();
  let lower = new RegExp(`(?=.*[a-z])`);
  let upper = new RegExp(`(?=.*[A-Z])`);
  let number = new RegExp(`(?=.*[0-9])`);
  let length = new RegExp(`(?=.{8,})`);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .trim()
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      lastName: Yup.string()
        .trim()
        .min(5, "Must be 5 characters or more")
        .required("Required"),
      email: Yup.string()
        .trim()
        .required("Required")
        .email("Invalid email address"),
      password: Yup.string()
        .required("Required")
        .matches(lower, "Must include lowercase letter")
        .matches(upper, "Must include uppercase letter")
        .matches(number, "Must include a number")
        .matches(length, "Must not be less than 8 characters"),
    }),

    onSubmit: (values) => {
      let userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };

      signUpService(userData)
        .then((result) => {
          console.log(result);
          toast.success("Account created successfully!");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message || "Error creating account");
        });
    },
  });

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        {/* Header */}
        <div className="signup-header">
          <h1 className="signup-title">Create your account</h1>
          <p className="signup-subtitle">
            Join the ABC TRAVELS community and start your journey with us
          </p>
        </div>

        {/* Google Sign In */}
        <button className="google-signin">
          <i className="fab fa-google"></i>
          SIGN UP WITH GOOGLE
        </button>

        {/* Divider */}
        <div className="divider-text">
          <span>OR CONTINUE WITH EMAIL</span>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} method="POST">
          {/* First Name */}
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="fistName"
              id="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <small style={{ color: "red" }}>{formik.errors.firstName}</small>
            ) : null}
          </div>

          {/* Row: Last Name & Email */}
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="lastName"
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <small style={{ color: "red" }}>{formik.errors.lastName}</small>
              ) : null}
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="e.g. john@email.com"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <small style={{ color: "red" }}>{formik.errors.email}</small>
              ) : null}
            </div>
          </div>

          {/* Password */}
          <div className="form-group password-field">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="********"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <small style={{ color: "red" }}>{formik.errors.password}</small>
            ) : null}
          </div>

          {/* Terms & Conditions */}
          <div className="checkbox-group">
            <input
              type="checkbox"
              className="checkbox-input"
              id="terms"
              required
            />
            <label htmlFor="terms" className="checkbox-text">
              I agree to the <Link to="/terms">Terms of Use</Link>
            </label>
          </div>

          {/* Submit Button */}
          <button type="submit" className="signup-button">
            Create Your Account
          </button>
        </form>

        {/* Login Link */}
        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
