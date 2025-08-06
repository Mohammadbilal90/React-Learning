import React, { useState } from 'react';
import { insertRecord, signUp } from '../lib/database';
import { sendEmail } from '../lib/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    password: '' // Add password field for user registration
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Create user account in Supabase Auth
      console.log('Creating user account...');
      const authResult = await signUp(formData.email, formData.password);
      console.log('✅ User account created:', authResult);

      // 2. Store contact form data in Supabase database
      const contactRecord = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        created_at: new Date().toISOString()
      };

      const result = await insertRecord('contacts', contactRecord);
      console.log('✅ Contact form data processed:', result);

      // 3. Send confirmation email
      const emailSent = await sendEmail(formData);

      if (emailSent) {
        alert('✅ Account created successfully! Check your email for confirmation.');
      } else {
        alert('✅ Account created successfully! Please check your email to confirm your account.');
      }

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '', password: '' });
    } catch (error) {
      console.error('❌ Form submission error:', error);
      
      // Check if it's an auth error
      if (error.message?.includes('already registered')) {
        alert('This email is already registered. Please sign in instead.');
      } else {
        alert('There was an error. Please try again or contact support.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>Dubai Internet City<br />Dubai, UAE</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@centric.dxb</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+971 4 123 4567</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Sunday - Thursday<br />9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Message & Create Account</h2>
            <p style={{color: '#666', marginBottom: '20px'}}>
              Fill out this form to send us a message and create your account.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength="6"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn" 
                disabled={loading}
              >
                {loading ? 'Creating Account & Sending...' : 'Send Message & Create Account'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 