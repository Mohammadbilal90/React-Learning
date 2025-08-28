import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-main">
            {/* Company Info */}
            <div className="footer-brand">
              <Link to="/" className="logo-link">
                <span className="logo-text">Centric</span>
                <span className="logo-dot">.</span>
                <span className="logo-suffix">DXB</span>
              </Link>
              <p className="footer-description">
                Transforming businesses through innovative technology solutions. 
                We specialize in custom software development, cloud solutions, 
                and digital transformation services.
              </p>
            </div>

            {/* Contact Information */}
            <div className="footer-contact">
              <div className="contact-locations">
                <div className="location-item">
                  <div className="contact-icon"></div>
                  <div className="contact-details">
                    <p className="contact-text">Dubai Internet City, Dubai, UAE</p>
                    <span className="contact-label">UAE Address</span>
                  </div>
                </div>
                
                <div className="location-item">
                  <div className="contact-icon"></div>
                  <div className="contact-details">
                    <p className="contact-text">+971 4 123 4567</p>
                    <span className="contact-label">Phone</span>
                  </div>
                </div>
                
                <div className="location-item">
                  <div className="contact-icon"></div>
                  <div className="contact-details">
                    <p className="contact-text">info@centric.dxb</p>
                    <span className="contact-label">Email</span>
                  </div>
                </div>
                
                <div className="location-item">
                  <div className="contact-icon"></div>
                  <div className="contact-details">
                    <p className="contact-text">Sunday - Thursday, 9:00 AM - 6:00 PM</p>
                    <span className="contact-label">Working Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 Centric.DXB. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 