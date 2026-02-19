import React from "react";
import "./styles/Dashboard.css";
import logo from "../assets/ABC LOGO2.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content">
          <h1 className="header-greeting">
            Assalamu Alaikum, {user.firstName} {user.lastName}
          </h1>
          <p className="header-subtitle">Welcome back to your Umrah journey</p>
        </div>
        <div className="profile-icon">
          <i className="fas fa-user-circle"></i>
        </div>
      </div>

      {/* Step Tracker */}
      <div className="step-tracker">
        <div className="step-item completed">
          <div className="step-circle">
            <i className="fas fa-check"></i>
          </div>
          <p className="step-label">Profile</p>
        </div>

        <div className="step-divider"></div>

        <div className="step-item completed">
          <div className="step-circle">
            <i className="fas fa-check"></i>
          </div>
          <p className="step-label">Documents</p>
        </div>

        <div className="step-divider"></div>

        <div className="step-item active">
          <div className="step-circle">3</div>
          <p className="step-label">Package</p>
        </div>

        <div className="step-divider"></div>

        <div className="step-item">
          <div className="step-circle">4</div>
          <p className="step-label">Visa</p>
        </div>

        <div className="step-divider"></div>

        <div className="step-item">
          <div className="step-circle">5</div>
          <p className="step-label">Flight</p>
        </div>
      </div>

      {/* Package Selection */}
      <div className="package-section">
        <h2 className="section-title">Choose Your Package</h2>

        <div className="package-grid">
          {/* Economy Card */}
          <div className="package-card">
            <div className="package-image">
              <i className="fas fa-image"></i>
            </div>
            <div className="package-badge">$1,499</div>
            <div className="package-content">
              <h3 className="package-name">Economy</h3>
              <div className="package-rating">
                <span className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </span>
                <span className="rating-value">4.5</span>
              </div>
              <div className="package-distance">
                <i className="fas fa-location-dot"></i>
                <span>500m from Kaaba</span>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          </div>

          {/* Standard Card */}
          <div className="package-card">
            <div className="package-image featured">
              <i className="fas fa-image"></i>
              <span className="popular-badge">Most Popular</span>
            </div>
            <div className="package-badge">$2,499</div>
            <div className="package-content">
              <h3 className="package-name">Standard</h3>
              <div className="package-rating">
                <span className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
                <span className="rating-value">5.0</span>
              </div>
              <div className="package-distance">
                <i className="fas fa-location-dot"></i>
                <span>300m from Kaaba</span>
              </div>
              <button className="book-button primary">Book Now</button>
            </div>
          </div>

          {/* Premium Card */}
          <div className="package-card">
            <div className="package-image">
              <i className="fas fa-image"></i>
            </div>
            <div className="package-badge">$3,999</div>
            <div className="package-content">
              <h3 className="package-name">Premium</h3>
              <div className="package-rating">
                <span className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </span>
                <span className="rating-value">5.0</span>
              </div>
              <div className="package-distance">
                <i className="fas fa-location-dot"></i>
                <span>100m from Kaaba</span>
              </div>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Prayer Times Widget */}
      <div className="prayer-times">
        <h3 className="prayer-title">Prayer Times Today</h3>
        <div className="prayer-times-grid">
          <div className="prayer-time-item">
            <span className="prayer-name">Fajr</span>
            <span className="prayer-time">05:30 AM</span>
          </div>
          <div className="prayer-time-item">
            <span className="prayer-name">Dhuhr</span>
            <span className="prayer-time">12:45 PM</span>
          </div>
          <div className="prayer-time-item">
            <span className="prayer-name">Asr</span>
            <span className="prayer-time">04:15 PM</span>
          </div>
          <div className="prayer-time-item">
            <span className="prayer-name">Maghrib</span>
            <span className="prayer-time">07:30 PM</span>
          </div>
          <div className="prayer-time-item">
            <span className="prayer-name">Isha</span>
            <span className="prayer-time">08:45 PM</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <div className="nav-item active">
          <i className="fas fa-home"></i>
          <span className="nav-label">Dashboard</span>
        </div>
        <Link to="/documents" className="nav-item">
          <i className="fas fa-file-alt"></i>
          <span className="nav-label">Documents</span>
        </Link>
        <Link to="/bookings" className="nav-item">
          <i className="fas fa-ticket"></i>
          <span className="nav-label">Bookings</span>
        </Link>
        <Link to="/Profile" className="nav-item">
          <i className="fas fa-user"></i>
          <span className="nav-label">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
