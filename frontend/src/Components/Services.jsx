import React from "react";
import "./styles/Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate()
  const services = [
    {
      id: 1,
      icon: "✈️",
      title: "January Elite Umrah",
      description:
        "Experience the journey of a lifetime with our premium January package designed for discerning travelers.",
      price: "$4,999",
      duration: "14 days",
      features: [
        "Round-trip flight",
        "7-star hotel",
        "Daily breakfast",
        "Guided tours",
        "24/7 support",
      ],
    },
    {
      id: 2,
      icon: "🕌",
      title: "December Elite Umrah",
      description:
        "A balanced journey combining spiritual fulfillment with comfortable accommodations and experiences.",
      price: "$3,499",
      duration: "12 days",
      features: [
        "Round-trip flight",
        "5-star hotel",
        "Breakfast & dinner",
        "Experienced guides",
        "Group activities",
      ],
    },
    {
      id: 3,
      icon: "🌙",
      title: "Ramadan Elite Umrah",
      description:
        "An affordable yet meaningful experience for those seeking spiritual growth without compromise on quality.",
      price: "$2,299",
      duration: "10 days",
      features: [
        "Round-trip flight",
        "3-star hotel",
        "Breakfast included",
        "Group tours",
        "Community support",
      ],
    },
    ];

  return (
    <section className="services-container">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">
            Our <span className="highlight">Premium</span> Packages
          </h2>
          <p className="services-subtitle">
            Discover carefully curated pilgrimage experiences tailored to your
            preferences and spiritual journey
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-price">
                {service.price}
                <small>/ per person</small>
              </div>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#999",
                  marginBottom: "1.5rem",
                }}
              >
                <i className="far fa-calendar"></i> Duration: {service.duration}
              </p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button className="service-btn" onClick={()=>navigate('/SignUp')}>Book Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
