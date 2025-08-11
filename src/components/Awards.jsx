import React, { useEffect } from 'react';

const Awards = () => {
  useEffect(() => {
    // Initialize AOS for awards page animations
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: false,
        offset: 100,
        delay: 0
      });
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="page-container">
      <div className="container">
        <h1 data-aos="fade-up" data-aos-duration="1000">Awards & Recognition</h1>
        <div className="awards-grid">
          <div className="award-card" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <div className="award-icon">🏆</div>
            <h3>Best Tech Company 2023</h3>
            <p>Awarded by Dubai Technology Awards for outstanding innovation and excellence in software development.</p>
            <span className="award-date">December 2023</span>
          </div>

          <div className="award-card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="award-icon">⭐</div>
            <h3>Excellence in Customer Service</h3>
            <p>Recognized for exceptional client satisfaction and support services in the MENA region.</p>
            <span className="award-date">October 2023</span>
          </div>

          <div className="award-card" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <div className="award-icon">🚀</div>
            <h3>Innovation Leader</h3>
            <p>Named as one of the top 10 most innovative companies in the UAE technology sector.</p>
            <span className="award-date">August 2023</span>
          </div>

          <div className="award-card" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
            <div className="award-icon">💎</div>
            <h3>Quality Excellence</h3>
            <p>ISO 9001:2015 certified for maintaining the highest standards in quality management.</p>
            <span className="award-date">June 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards; 