import React from "react";
import "./styles/preCheckout.css";

const PreCheckout = () => {
  // Mock data - Replace with actual data from state/props
  const orderData = {
    selectedPlan: {
      name: "Premium Plan",
      image: "https://via.placeholder.com/300x200?text=Premium+Plan",
      price: 2499,
      features: [
        "Unlimited Access to Content",
        "Ultra High Definition (4K)",
        "Cancel Anytime, No Questions",
      ],
    },
    billingCycle: {
      amount: 525,
      startDate: "Jan 15, 2026",
      endDate: "Jan 31, 2026",
    },
    pricing: {
      subtotal: 524.99,
      tax: 60.0,
      totalDue: 584.99,
    },
  };

  return (
    <div className="precheckout-container">
      {/* Header */}
      <div className="precheckout-header">
        <button className="back-btn">
          <i className="fas fa-arrow-left"></i>
        </button>
        <h1 className="precheckout-title">Review Order</h1>
        <div></div>
      </div>

      <div className="precheckout-content">
        {/* Selected Plan Section */}
        <div className="precheckout-card">
          <div className="section-label">SELECTED PLAN</div>

          {/* Plan Image */}
          <div className="plan-image-container">
            <img
              src={orderData.selectedPlan.image}
              alt={orderData.selectedPlan.name}
              className="plan-image"
            />
          </div>

          {/* Plan Info */}
          <div className="plan-info">
            <div className="plan-name-header">
              <h2 className="plan-name">{orderData.selectedPlan.name}</h2>
              <a href="#" className="change-link">
                Change <i className="fas fa-chevron-right"></i>
              </a>
            </div>

            {/* Plan Features */}
            <div className="plan-features">
              {orderData.selectedPlan.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-check">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Billing Cycle Section */}
        <div className="precheckout-card">
          <div className="section-label">BILLING CYCLE</div>

          <div className="billing-info">
            <div className="billing-amount">
              <span className="amount-value">
                ${orderData.billingCycle.amount}
              </span>
            </div>

            <div className="billing-dates">
              <span className="date-text">
                {orderData.billingCycle.startDate} -{" "}
                {orderData.billingCycle.endDate}
              </span>
            </div>

            <div className="billing-edit">
              <button className="edit-btn">
                <i className="fas fa-edit"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Price Summary Section */}
        <div className="precheckout-card">
          <div className="price-summary">
            <div className="price-row">
              <span className="price-label">Subtotal</span>
              <span className="price-value">
                ${orderData.pricing.subtotal.toFixed(2)}
              </span>
            </div>

            <div className="price-row">
              <span className="price-label">Tax</span>
              <span className="price-value">
                ${orderData.pricing.tax.toFixed(2)}
              </span>
            </div>

            <div className="price-divider"></div>

            <div className="price-row total">
              <span className="price-label">Total Due</span>
              <span className="price-value">
                ${orderData.pricing.totalDue.toFixed(2)}
              </span>
            </div>

            <div className="tax-info">
              By confirming, you agree to our <a href="#">Terms & Conditions</a>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="precheckout-actions">
          <button className="btn-proceed">
            Proceed to Payment <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreCheckout;
