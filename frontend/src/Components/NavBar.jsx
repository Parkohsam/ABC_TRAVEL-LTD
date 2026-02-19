import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import LOGO from "../assets/ABC LOGO2.png";
import "./styles/NavBar.css";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <>
      <nav
        className="navbar container-fluid"
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem 5rem",
          backgroundColor: "#f8f9fa",
        }}
      >
        {/* Logo on the left */}
        <div className="navbar-logo">
          <img src={LOGO} alt="Logo" style={{ height: "50px" }} />
        </div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger-menu ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation items in the middle */}
        <ul
          className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}
          style={{
            gap: "2rem",
            margin: "0",
            padding: "0",
            listStyle: "none",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <li>
            <Link
              className="nav-link fw-bold"
              to="/"
              style={{ textDecoration: "none", color: "black" }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nav-link fw-bold"
              to="/dashboard"
              style={{ textDecoration: "none", color: "black" }}
            >
              Packages
            </Link>
          </li>
          <li>
            <a
              className="nav-link fw-bold"
              href="#"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </a>
          </li>
        </ul>

        {/* Dropdown on the right */}
        <div
          className={`navbar-dropdown ${isMobileMenuOpen ? "active" : ""}`}
          style={{ marginLeft: "auto" }}
        >
          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle fw-bold"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ textDecoration: "none", color: "black" }}
            >
              Get Started
            </a>
            <ul className="dropdown-menu">
              <li>
                <button
                  className="dropdown-item fw-bold"
                  onClick={() => navigate("/login")}
                >
                  <span className="dropdown-icon">→</span>
                  Login
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item fw-bold"
                  onClick={() => navigate("/signup")}
                >
                  <span className="dropdown-icon">+</span>
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
