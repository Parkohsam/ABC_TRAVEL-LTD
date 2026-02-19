import React from "react";
import "./styles/Hero.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero.jpg";

const Hero = () => {
    const navigate = useNavigate()
  return (
    <section className="hero-section">
      <div className="container-fluid">
        <div className="row align-items-center min-vh-100">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 hero-content">
            {/* Badge */}
            <div className="badge-container">
              <span className="badge-icon">🌍</span>
              <span className="badge-text">No. 1 in Nigeria</span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-heading">
              Make it easy for your
              <span className="highlight"> Umrah worship</span> with
              <span className="highlight">
                {" "}
                ABC TRAVELS AND LOGISTICS NIG LTD
              </span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              With our year around us, we already have hundreds of thousands of
              customers, you can go for Umrah to Mecca and Medina.
            </p>

            {/* CTA Button */}
            <button className="btn-contact" onClick={()=>navigate("./Packages")}>Book Now</button>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-12 hero-image-container">
            <div className="image-wrapper">
              <div className="image-frame">
                <div className="image-content">
                  <img
                    src={heroImage}
                    alt="Umrah Travel"
                    className="hero-image"
                  />
                </div>
                {/* Decorative floating cards */}
                <div className="floating-card card-1">
                  <div className="card-icon">👤</div>
                  <div className="card-text">
                    <p className="fw-bold">Abdul Raheem </p>
                    <p className="text-muted small">Travel in 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
