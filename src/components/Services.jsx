import React from 'react';

const Services = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h1>Our Services</h1>
            <p>We are a technology company based in Dubai, specializing in software solutions and digital services.</p>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="main-services">
        <div className="container">
          <h2>Core Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Search Engine Optimization (SEO)</h3>
              <p>Boost your website's visibility and drive organic traffic with our comprehensive SEO services.</p>
              <ul className="service-features">
                <li>Keyword Research & Analysis</li>
                <li>On-Page SEO Optimization</li>
                <li>Technical SEO Audits</li>
                <li>Local SEO Services</li>
                <li>Performance Tracking</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with modern technologies for optimal performance.</p>
              <ul className="service-features">
                <li>Custom Website Development</li>
                <li>E-commerce Solutions</li>
                <li>Responsive Web Design</li>
                <li>Web Application Development</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Graphic Design</h3>
              <p>Creative visual solutions that capture your brand's essence and help you stand out.</p>
              <ul className="service-features">
                <li>Logo Design & Branding</li>
                <li>Marketing Materials</li>
                <li>Social Media Graphics</li>
                <li>UI/UX Design</li>
                <li>Print Design Services</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon">✍️</div>
              <h3>Content Writing</h3>
              <p>Engaging, SEO-optimized content that resonates with your audience and drives conversions.</p>
              <ul className="service-features">
                <li>Website Content Creation</li>
                <li>Blog Writing & Management</li>
                <li>SEO Content Strategy</li>
                <li>Marketing Copywriting</li>
                <li>Technical Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional IT Services */}
      <section className="additional-services">
        <div className="container">
          <h2>Additional IT Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p>Native and cross-platform mobile applications for iOS and Android. We build intuitive, high-performance apps that enhance user engagement and drive business growth.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3>Cloud Solutions</h3>
              <p>Scalable cloud infrastructure and migration services. We help businesses leverage cloud technologies for improved efficiency, security, and cost-effectiveness.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Cybersecurity</h3>
              <p>Comprehensive security solutions to protect your digital assets. From vulnerability assessments to security audits, we ensure your business stays protected.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Data Analytics</h3>
              <p>Transform your data into actionable insights. Our analytics services help you make informed decisions and optimize your business performance.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI & Machine Learning</h3>
              <p>Cutting-edge AI solutions to automate processes and gain competitive advantages. We implement intelligent systems that drive innovation.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🔄</div>
              <h3>Digital Transformation</h3>
              <p>End-to-end digital transformation services to modernize your business processes and enhance customer experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Discovery & Planning</h3>
              <p>We start by understanding your business goals, target audience, and project requirements to create a comprehensive strategy.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Design & Development</h3>
              <p>Our team creates innovative solutions using the latest technologies and best practices to deliver exceptional results.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Testing & Quality Assurance</h3>
              <p>Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all platforms.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Deployment & Support</h3>
              <p>We launch your project and provide ongoing support, maintenance, and optimization services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Expert Team</h3>
              <p>Experienced professionals with deep expertise in their respective fields.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times without compromising on quality or attention to detail.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Transparent pricing with no hidden costs and flexible payment options.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Ongoing Support</h3>
              <p>Continuous support and maintenance to ensure your solutions remain optimal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how we can help transform your business with our comprehensive IT services.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Get Free Consultation</button>
              <button className="cta-btn secondary">View Our Portfolio</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;