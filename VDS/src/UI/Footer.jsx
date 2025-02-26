import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const handleRedirect = () => {
    window.location.href = "/";
  };

  const handleRedirec2 = () => {
    window.location.href = "/aboutus";
  };

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <h3>Do you have questions or want more information? Contact us now</h3>
        <div className="contact-info">
          <div className="contact-item" onClick={handleRedirect}>
            <FaPhoneAlt className="contact-icon" />
            <span>+91 9000225946</span>
          </div>
          <div className="contact-item" onClick={handleRedirect}>
            <FaEnvelope className="contact-icon" />
            <span>info@vdseduglobalsolutions.com</span>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li onClick={handleRedirec2}>About Us</li>
            <li onClick={handleRedirect}>Blog</li>
            <li onClick={handleRedirect}>Testimonials</li>
            <li onClick={handleRedirect}>Terms & Conditions</li>
            <li onClick={handleRedirect}>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li onClick={handleRedirect}>Visa Assistance</li>
            <li onClick={handleRedirect}>Study Abroad</li>
            <li onClick={handleRedirect}>Immigration Consulting</li>
            <li onClick={handleRedirect}>Career Counseling</li>
            <li onClick={handleRedirect}>Legal Support</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Our Branches</h4>
          <ul>
            <li onClick={handleRedirect}>Karimnagar</li>
            <li onClick={handleRedirect}>Hyderabad</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p >Copyright © 2025 VDS Global Edusolutions. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
