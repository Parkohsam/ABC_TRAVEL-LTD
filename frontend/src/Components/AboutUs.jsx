import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import landImage from "../assets/land image.jpg";
import logo from "../assets/ABC LOGO2.png";
import "./styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container-fluid">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6 col-md-12 order-lg-1 order-1">
              <div className="about-content">
                <h1 className="about-title text-center">
                  About <span className="highlight">ABC Travels</span>
                </h1>
                <p className="about-subtitle">
                  Your Trusted Partner in Spiritual Journeys
                </p>
                <p className="about-description">
                  ABC Travels and Logistics Nig Ltd is dedicated to providing
                  exceptional Umrah packages and seamless travel experiences.
                  With years of expertise, we guide thousands of pilgrims
                  annually to fulfill their spiritual aspirations in Mecca and
                  Medina.
                </p>

                <div className="about-features">
                  <div className="feature-item">
                    <div className="feature-icon">✈️</div>
                    <div className="feature-text">
                      <h5>Premium Services</h5>
                      <p>Best-in-class travel accommodations and services</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">🤝</div>
                    <div className="feature-text">
                      <h5>Expert Guides</h5>
                      <p>Knowledgeable and professional travel guidance</p>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">⭐</div>
                    <div className="feature-text">
                      <h5>Trusted Brand</h5>
                      <p>No. 1 choice for Umrah in Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 order-lg-2 order-2">
              <div className="about-image-container">
                <img src={landImage} alt="About Us" className="about-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">Why Choose ABC Travels?</h2>
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="why-card">
                <div className="why-icon">🏆</div>
                <h4>Competitive Pricing</h4>
                <p>
                  Affordable packages without compromising on quality or
                  comfort.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="why-card">
                <div className="why-icon">🛡️</div>
                <h4>Safety & Security</h4>
                <p>
                  Full travel insurance and 24/7 support throughout your
                  journey.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="why-card">
                <div className="why-icon">💼</div>
                <h4>Professional Team</h4>
                <p>
                  Experienced consultants dedicated to personalized service.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="why-card">
                <div className="why-icon">✅</div>
                <h4>Hassle-Free Process</h4>
                <p>Simple visa processing and documentation assistance.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="why-card">
                <div className="why-icon">🌍</div>
                <h4>Global Network</h4>
                <p>Partnerships with premium hotels and transport providers.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="why-card">
                <div className="why-icon">⭐</div>
                <h4>Customer Reviews</h4>
                <p>Thousands of satisfied pilgrims worldwide trust us.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
