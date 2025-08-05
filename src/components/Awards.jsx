import React from 'react';

const Awards = () => {
  return (
    <div className="page-container">
      <div className="container">
        <h1>Awards & Recognition</h1>
        <div className="awards-grid">
          <div className="award-card">
            <div className="award-icon">🏆</div>
            <h3>Best Tech Company 2023</h3>
            <p>Awarded by Dubai Technology Awards for outstanding innovation and excellence in software development.</p>
            <span className="award-date">December 2023</span>
          </div>

          <div className="award-card">
            <div className="award-icon">⭐</div>
            <h3>Excellence in Customer Service</h3>
            <p>Recognized for exceptional client satisfaction and support services in the MENA region.</p>
            <span className="award-date">October 2023</span>
          </div>

          <div className="award-card">
            <div className="award-icon">🚀</div>
            <h3>Innovation Leader</h3>
            <p>Named as one of the top 10 most innovative companies in the UAE technology sector.</p>
            <span className="award-date">August 2023</span>
          </div>

          <div className="award-card">
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