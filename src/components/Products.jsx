import React from 'react';

const Products = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Our Products</h1>
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
        </div>
      </div>
    </div>
  );
};

export default Products; 