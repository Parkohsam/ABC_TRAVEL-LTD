import React from "react";
import "./styles/Footer.css";
import logo from "../assets/ABC LOGO2.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How it Works", href: "#how-it-works" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
    support: [
      { label: "Help Center", href: "/help" },
      { label: "Safety Tips", href: "/safety" },
      { label: "Contact Us", href: "/contact" },
    ],
  };

  const socialMedia = [
    {
      icon: "fab fa-facebook-f",
      url: "https://facebook.com/abctravels",
      label: "Facebook",
    },
    {
      icon: "fab fa-instagram",
      url: "https://instagram.com/abctravels",
      label: "Instagram",
    },
    {
      icon: "fab fa-tiktok",
      url: "https://tiktok.com/@abctravels",
      label: "TikTok",
    },
  ];

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3>
              <img
                src={logo}
                alt="ABC TRAVELS Logo"
                className="footer-brand-logo"
              />
              <span className="brand-name-gradient">ABC TRAVELS</span>
            </h3>
            <p className="footer-description">
              Leading provider of travel, logistics, and forwarding services.
              Your trusted partner for seamless journeys and efficient cargo
              solutions worldwide.
            </p>
            <>
              {socialMedia.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  title={social.label}
                  aria-label={social.label}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </>
          </div>

          {/* Platform Links */}
          <div className="footer-column">
            <h4>Platform</h4>
            <ul className="footer-links">
              {footerLinks.platform.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-column">
            <h4>Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="footer-column">
            <h4>Support</h4>
            <ul className="footer-links">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} ABC TRAVELS. LOGISTICS AND FORWARDING NIG LTD. All
            rights reserved.
          </p>
          <ul className="footer-bottom-links">
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
