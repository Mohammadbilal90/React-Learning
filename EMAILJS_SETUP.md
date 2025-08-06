# EmailJS Setup Guide

## 🚀 Enable Real Email Sending

Currently, your contact form simulates email sending. To enable **real email sending**, follow these steps:

### **Step 1: Sign Up for EmailJS**
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### **Step 2: Add EmailJS Script to Your Project**

Add this script to your `index.html` file (in the `<head>` section):

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script type="text/javascript">
  (function() {
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your actual User ID
  })();
</script>
```

### **Step 3: Configure EmailJS Dashboard**

1. **Create Email Service:**
   - Go to EmailJS Dashboard → Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Connect your email account

2. **Create Email Template:**
   - Go to EmailJS Dashboard → Email Templates
   - Click "Create New Template"
   - Use this template:

```html
<h2>Thank you for contacting Centric.DXB!</h2>

<p>Dear {{to_name}},</p>

<p>We have received your message and will get back to you as soon as possible.</p>

<h3>Your Message Details:</h3>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong> {{message}}</p>

<br>
<p>Best regards,<br>{{from_name}}</p>
```

3. **Get Your IDs:**
   - **Service ID**: Found in Email Services section
   - **Template ID**: Found in Email Templates section  
   - **User ID**: Found in Account → API Keys

### **Step 4: Update Your Code**

Replace the placeholder values in `src/lib/emailService.js`:

```javascript
const serviceId = 'YOUR_ACTUAL_SERVICE_ID'; // From EmailJS dashboard
const templateId = 'YOUR_ACTUAL_TEMPLATE_ID'; // From EmailJS dashboard
const userId = 'YOUR_ACTUAL_USER_ID'; // From EmailJS dashboard
```

### **Step 5: Test**

1. Fill out the contact form
2. Submit it
3. Check your email inbox
4. Check Supabase Authentication → Users (should see new user)

## 🎯 What This Fixes

✅ **Real email sending** - Users will receive actual emails  
✅ **User registration** - Users will appear in Supabase Auth  
✅ **Account creation** - Users can sign in later  
✅ **Email confirmation** - Supabase will send confirmation emails  

## 📧 Free Tier Limits

- **EmailJS**: 200 emails/month free
- **Supabase**: 50,000 users free

## 🔧 Alternative: Supabase Auth Emails

Supabase also sends confirmation emails automatically when users sign up. You can configure these in:
- Supabase Dashboard → Authentication → Emails
- Customize email templates there

## 🚨 Important Notes

1. **Password Field**: Users must enter a password to create an account
2. **Email Confirmation**: Users need to confirm their email before signing in
3. **Error Handling**: If email already exists, form shows appropriate message
4. **Database**: Contact form data is stored in `contacts` table
5. **Auth**: User account is created in Supabase Auth

## 🧪 Testing

After setup:
1. Fill the contact form with a real email
2. Check your email for confirmation
3. Check Supabase Auth → Users
4. Try signing in with the created account

**Your contact form will now create real user accounts and send real emails!** 🎉 