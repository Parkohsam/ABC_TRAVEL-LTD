import React from "react";
import "./styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/ABC LOGO2.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginService } from "../service/service";

const Login = () => {
  const navigate = useNavigate();
  let lower = new RegExp(`(?=.*[a-z])`);
  let upper = new RegExp(`(?=.*[A-Z])`);
  let number = new RegExp(`(?=.*[0-9])`);
  let length = new RegExp(`(?=.{8,})`);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .matches(lower, "Must include lowercase letter")
        .matches(upper, "Must include uppercase letter")
        .matches(number, "Must include a number")
        .matches(length, "Must not be less than 8 characters")
        .required("Required"),
    }),

    onSubmit: (values) => {
      const credentials = {
        email: values.email,
        password: values.password,
      };

      loginService(credentials)
        .then((result) => {
          console.log(result);
          // Store the token
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.data));
          toast.success("Login successful!");
          setTimeout(() => {
            if (result.data.role === "admin"){
              navigate("/admin/AdminDashboard");
            }
            else {
              navigate("/Dashboard");
            }
           
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.message || "Invalid email or password");
        });
    },
  });

  return (
    <div className="login-container">
      <div className="login-wrapper">
        {/* Header with Logo */}
        <div className="login-header">
          <img src={logo} alt="ABC Travels Logo" className="login-logo" />
          <h1 className="login-title">Welcome Back</h1>
          <p className="login-subtitle">Sign in to your ABC TRAVELS account</p>
        </div>

        {/* Google Sign In */}
        <button className="google-signin">
          <i className="fab fa-google"></i>
          SIGN IN WITH GOOGLE
        </button>

        {/* Divider */}
        <div className="divider-text">
          <span>OR CONTINUE WITH EMAIL</span>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="e.g. john@email.com"
              id="email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <small style={{ color: "red" }}>{formik.errors.email}</small>
            ) : null}
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
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <small style={{ color: "red" }}>{formik.errors.password}</small>
            ) : null}
          </div>

          {/* Remember & Forgot Password */}
          <div className="login-options">
            <div className="checkbox-group">
              <input type="checkbox" className="checkbox-input" id="remember" />
              <label htmlFor="remember" className="checkbox-text">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="forgot-password">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        {/* Toast */}
        <ToastContainer position="top-right" autoClose={1500} />

        {/* Sign Up Link */}
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
