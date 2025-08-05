import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      {/* Simple About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h1>About Us</h1>
            <p>We are a technology company based in Dubai, specializing in software solutions and digital services.</p>
            
            <div className="about-grid">
              <div className="about-text">
                <h2>Our Company</h2>
                <p>Founded in 2018, we have been providing technology solutions to businesses across the UAE. Our team of experts delivers custom software, web applications, and digital transformation services.</p>
                <p>We focus on creating efficient, scalable solutions that help our clients achieve their business goals.</p>
              </div>
              <div className="about-image">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=350&fit=crop" alt="Team working" />
              </div>
            </div>

            <div className="company-stats">
              <div className="stat-item">
                <h3>6+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>100+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>25+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>What We Do</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Software Development</h3>
              <p>Custom software solutions tailored to your business needs.</p>
            </div>
            <div className="service-item">
              <h3>Web Applications</h3>
              <p>Modern web applications built with the latest technologies.</p>
            </div>
            <div className="service-item">
              <h3>Digital Services</h3>
              <p>Comprehensive digital transformation and consulting services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <h2>Get in Touch</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <h4>Address</h4>
                <p>Dubai Internet City<br />Dubai, UAE</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div>
                <h4>Email</h4>
                <p>info@centric.dxb</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <h4>Phone</h4>
                <p>+971 4 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2>Our Location</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785664476147!2d55.1373!3d25.0921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDA1JzMxLjYiTiA1NcKwMDgnMTQuMyJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%" 
              height="400" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Centric.DXB Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;