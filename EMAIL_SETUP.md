# Email Setup Guide for Contact Form

## Current Implementation

The contact form now includes:
- ✅ **Form validation** and data storage in Supabase
- ✅ **Loading states** during form submission
- ✅ **Success/error messages** for user feedback
- ✅ **Email simulation** (currently logs to console)

## Email Service Options

### Option 1: EmailJS (Recommended - Free)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Get your service ID and template ID
4. Add EmailJS script to `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
  (function() {
    emailjs.init("YOUR_USER_ID");
  })();
</script>
```

5. Update `src/lib/emailService.js`:

```javascript
import emailjs from '@emailjs/browser';

export const sendEmail = async (contactData) => {
  try {
    const templateParams = {
      to_email: contactData.email,
      to_name: contactData.name,
      subject: contactData.subject,
      message: contactData.message
    };

    const response = await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams
    );

    return true;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};
```

### Option 2: Supabase Edge Functions
1. Create an Edge Function in your Supabase dashboard
2. Use a service like SendGrid or Resend
3. Deploy the function and update the contact form

### Option 3: External Email Service
- **SendGrid**: 100 emails/day free
- **Resend**: 100 emails/day free
- **Mailgun**: 5,000 emails/month free

## Database Setup

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Run the SQL script from `supabase_contacts_table.sql`

## Testing

1. Fill out the contact form
2. Check the browser console for email logs
3. Check your Supabase dashboard for stored data
4. Verify the form resets after submission

## Production Deployment

For production, you should:
1. Set up a real email service (EmailJS recommended)
2. Add proper error handling
3. Implement rate limiting
4. Add CAPTCHA protection
5. Set up email templates

## Current Features

- ✅ **Form validation**
- ✅ **Data storage in Supabase**
- ✅ **Loading states**
- ✅ **Success/error feedback**
- ✅ **Email simulation**
- ✅ **Form reset after submission** 