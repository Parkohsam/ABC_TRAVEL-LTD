import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createBooking } from "../service/service";
import "./styles/Booking.css";

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pkg = location.state?.package;

  const [bookingForm, setBookingForm] = useState({
    phoneNumber: "",
    passportNumber: "",
    nin: "",
    passportPhoto: null,
  });

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBookingForm({ ...bookingForm, [e.target.id]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setBookingForm({ ...bookingForm, passportPhoto: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (
      !bookingForm.phoneNumber ||
      !bookingForm.passportNumber ||
      !bookingForm.nin ||
      !bookingForm.passportPhoto
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setLoading(true);

    try {
      const data = await createBooking({
        ...bookingForm,
        packageId: pkg._id,
      });

      if (data.status) {
        navigate("/payment", { state: { booking: data.data, package: pkg } });
      } else {
        alert(data.message || "Error creating booking");
      }
    } catch (err) {
      console.error("Error creating booking:", err);
      alert(err.message || "Error creating booking");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      {/* Header */}
      <div className="booking-header">
        <button className="back-btn" onClick={() => navigate("/Dashboard")}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <h1 className="booking-title">Book Package</h1>
      </div>

      {/* Package Summary */}
      <div className="package-summary">
        <div className="summary-info">
          <h2>{pkg?.name}</h2>
          <p>{pkg?.description}</p>
          <span className="summary-price">${pkg?.price}</span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="booking-form">
        <h3 className="form-title">Personal Details</h3>

        <div className="form-group">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            className="form-input"
            placeholder="Enter your phone number"
            value={bookingForm.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Passport Number</label>
          <input
            type="text"
            id="passportNumber"
            className="form-input"
            placeholder="Enter your passport number"
            value={bookingForm.passportNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">NIN</label>
          <input
            type="text"
            id="nin"
            className="form-input"
            placeholder="Enter your NIN"
            value={bookingForm.nin}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label">Passport Photo</label>
          <input
            type="file"
            accept="image/*"
            className="form-input"
            onChange={handlePhotoChange}
          />
          {preview && (
            <img
              src={preview}
              alt="Passport Preview"
              className="passport-preview"
            />
          )}
        </div>
      </div>

      {/* Price Summary */}
      <div className="price-summary">
        <div className="price-row">
          <span>Package Price</span>
          <span>${pkg?.price}</span>
        </div>
        <div className="price-row total">
          <span>Total</span>
          <span>${pkg?.price}</span>
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="proceed-btn"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? "Processing..." : "Proceed to Payment"}
      </button>
    </div>
  );
};

export default Booking;