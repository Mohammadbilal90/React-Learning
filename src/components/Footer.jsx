import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section">
              <div className="footer-logo">
                <Link to="/" className="logo-link">
                  <span className="logo-text">Centric</span>
                  <span className="logo-dot">.</span>
                  <span className="logo-suffix">DXB</span>
                </Link>
              </div>
              <p className="footer-description">
                Transforming businesses through innovative technology solutions. 
                We specialize in custom software development, cloud solutions, 
                and digital transformation services.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">💼</a>
                <a href="#" className="social-link">📷</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/awards">Awards</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/contact">Contact us</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h3>Our Services</h3>
              <ul className="footer-links">
                <li>Custom Software Development</li>
                <li>Cloud Solutions</li>
                <li>Data Analytics</li>
                <li>Cybersecurity</li>
                <li>Digital Transformation</li>
                <li>IT Consulting</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h3>Contact Information</h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <p>Dubai Internet City</p>
                    <p>Dubai, UAE</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <p>info@centric.dxb</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <p>+971 4 123 4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕒</span>
                  <div>
                    <p>Sunday - Thursday</p>
                    <p>9:00 AM - 6:00 PM</p>
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