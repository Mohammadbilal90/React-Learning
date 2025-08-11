import React, { useEffect } from 'react';

const Resources = () => {
  useEffect(() => {
    console.log('Resources component mounted');
    console.log('AOS available:', !!window.AOS);
    
    if (window.AOS) {
      console.log('Initializing AOS...');
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        offset: 100,
        delay: 0
      });
      window.AOS.refresh();
      console.log('AOS initialized successfully');
    } else {
      console.error('AOS is not available!');
    }
  }, []);

  return (
    <div className="page-container">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-duration="1000">Resources</h1>
        <div className="resources-grid">
          <div className="resource-card" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <div className="resource-icon">📚</div>
            <h3>Documentation</h3>
            <p>Comprehensive guides and documentation for all our products and services.</p>
            <button className="resource-btn">View Docs</button>
          </div>

          <div className="resource-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="resource-icon">🎥</div>
            <h3>Video Tutorials</h3>
            <p>Step-by-step video tutorials to help you get the most out of our solutions.</p>
            <button className="resource-btn">Watch Videos</button>
          </div>

          <div className="resource-card" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <div className="resource-icon">📖</div>
            <h3>Blog</h3>
            <p>Latest insights, tips, and industry news from our team of experts.</p>
            <button className="resource-btn">Read Blog</button>
          </div>

          <div className="resource-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <div className="resource-icon">💬</div>
            <h3>Community Forum</h3>
            <p>Connect with other users and get answers to your questions.</p>
            <button className="resource-btn">Join Forum</button>
          </div>

          <div className="resource-card" data-aos="fade-up" data-aos-delay="500" data-aos-duration="800">
            <div className="resource-icon">🎓</div>
            <h3>Training Courses</h3>
            <p>Comprehensive training programs to master our platforms and tools.</p>
            <button className="resource-btn">Start Learning</button>
          </div>

          <div className="resource-card" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
            <div className="resource-icon">🔧</div>
            <h3>API Reference</h3>
            <p>Detailed API documentation for developers integrating with our services.</p>
            <button className="resource-btn">View API</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources; 
