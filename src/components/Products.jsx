import React from 'react';

const Products = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Our Products</h1>
        <p>Discover our innovative software solutions designed to transform your business operations. From lead generation to internal collaboration, we provide cutting-
          edge platforms that drive efficiency and growth. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla dolore ex veniam obcaecati magnam sequi. Minus q
          uod veniam assumenda incidunt ipsam quidem vel ducimus alias architecto, nihil delectus est reprehenderit! Lorem ipsum dolor sit amet consectetur, adipisicing elit
          . Minus est temporibus voluptatibus vel ipsa sequi porro, laudantium blanditiis numquam magni. </p>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop" alt="Software Solution" />
            </div>
            <div className="product-content">
              <h3>Software Solutions</h3>
              <p>Custom software development tailored to your business needs. We create scalable, efficient solutions that drive growth and innovation.</p>
              <button className="product-btn">Learn More</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop" alt="Analytics Platform" />
            </div>
            <div className="product-content">
              <h3>Analytics Platform</h3>
              <p>Advanced data analytics and business intelligence solutions. Transform your data into actionable insights for better decision-making.</p>
              <button className="product-btn">Learn More</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop" alt="Cloud Services" />
            </div>
            <div className="product-content">
              <h3>Cloud Services</h3>
              <p>Comprehensive cloud infrastructure and migration services. Secure, scalable, and cost-effective cloud solutions for modern businesses.</p>
              <button className="product-btn">Learn More</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop" alt="Liprospect" />
            </div>
            <div className="product-content">
              <h3>Liprospect</h3>
              <p>Advanced lead generation and prospect management platform. Automate your sales pipeline with intelligent lead scoring, CRM integration, and real-time analytics to boost conversion rates and revenue growth.</p>
              <button className="product-btn">Learn More</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop" alt="Centric Intranet" />
            </div>
            <div className="product-content">
              <h3>Centric Intranet</h3>
              <p>Comprehensive internal communication and collaboration platform. Streamline workplace operations with document management, team collaboration tools, and secure internal messaging systems for enhanced productivity.</p>
              <button className="product-btn">Learn More</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Applicant Tracking Platform" />
            </div>
            <div className="product-content">
              <h3>Applicant Tracking Platform</h3>
              <p>End-to-end recruitment management system for HR professionals. Simplify hiring processes with automated job posting, candidate screening, interview scheduling, and performance tracking to find the best talent efficiently.</p>
              <button className="product-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 