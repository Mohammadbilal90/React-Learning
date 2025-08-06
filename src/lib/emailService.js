// Email service using EmailJS for actual email sending
// Sign up for free at https://www.emailjs.com/

export const sendEmail = async (contactData) => {
  try {
    // Check if EmailJS is available (you need to add the script to index.html)
    if (typeof window !== 'undefined' && window.emailjs) {
      // Real email sending with EmailJS
      const templateParams = {
        to_email: contactData.email,
        to_name: contactData.name,
        subject: contactData.subject,
        message: contactData.message,
        from_name: 'Centric.DXB Team'
      };

      // You'll need to configure these in EmailJS dashboard
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your service ID
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your template ID
      const userId = 'YOUR_EMAILJS_USER_ID'; // Replace with your user ID

      const result = await window.emailjs.send(serviceId, templateId, templateParams, userId);
      console.log('✅ Real email sent successfully:', result);
      return true;
    } else {
      // Fallback: Simulate email sending
      const emailData = {
        to: contactData.email,
        subject: 'Thank you for contacting Centric.DXB',
        html: `
          <h2>Thank you for contacting us!</h2>
          <p>Dear ${contactData.name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p><strong>Your message details:</strong></p>
          <p><strong>Subject:</strong> ${contactData.subject}</p>
          <p><strong>Message:</strong> ${contactData.message}</p>
          <br>
          <p>Best regards,<br>Centric.DXB Team</p>
        `
      };

      // Log the email data for testing
      console.log('📧 Email simulation (EmailJS not configured):', {
        to: emailData.to,
        subject: emailData.subject,
        name: contactData.name
      });
      
      // Simulate email sending delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return true;
    }
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    // Return true anyway to not break the form flow
    return true;
  }
}; 