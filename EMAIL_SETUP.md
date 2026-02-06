# Email Configuration Setup Guide

This guide will help you configure the contact form to send emails to your inbox.

## Step 1: Create Environment Variables File

Create a `.env` file in the **root directory** of the project (same level as `package.json`):

```bash
# In the project root directory
touch .env
```

## Step 2: Add Email Configuration

Open the `.env` file and add your email configuration. Here are examples for different email providers:

### For Gmail:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
SEND_AUTO_REPLY=false
```

**Important for Gmail:**
1. Enable 2-Step Verification on your Google account
2. Generate an App Password:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Portfolio Contact Form"
   - Copy the 16-character password
   - Use this as your `EMAIL_PASSWORD`

### For Outlook/Hotmail:

```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
EMAIL_FROM=your-email@outlook.com
EMAIL_TO=your-email@outlook.com
SEND_AUTO_REPLY=false
```

### For Yahoo:

```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@yahoo.com
EMAIL_TO=your-email@yahoo.com
SEND_AUTO_REPLY=false
```

### For Custom SMTP (like SendGrid, Mailgun, etc.):

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=your-email@yourdomain.com
SEND_AUTO_REPLY=false
```

## Step 3: Environment Variables Explained

- **EMAIL_HOST**: Your email provider's SMTP server
- **EMAIL_PORT**: Usually 587 (TLS) or 465 (SSL)
- **EMAIL_USER**: Your email address or SMTP username
- **EMAIL_PASSWORD**: Your email password or app password
- **EMAIL_FROM**: The "from" address (usually same as EMAIL_USER)
- **EMAIL_TO**: Where to send contact form submissions (your email)
- **SEND_AUTO_REPLY**: Set to `true` to send auto-reply to users, `false` to disable

## Step 4: Restart the Server

After creating/updating the `.env` file, restart your development server:

```bash
npm run dev
```

## Step 5: Test the Contact Form

1. Go to your website
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email inbox (and spam folder) for the notification

## Troubleshooting

### Email not sending?

1. **Check server logs**: Look for error messages in the terminal
2. **Verify credentials**: Make sure your email and password are correct
3. **Check firewall**: Some networks block SMTP ports
4. **Try different port**: Switch between 587 and 465
5. **Use App Password**: For Gmail/Yahoo, regular passwords won't work

### Common Errors:

- **"Invalid login"**: Wrong email or password
- **"Connection timeout"**: Firewall blocking SMTP port
- **"Authentication failed"**: Need to use App Password for Gmail

## Backend Location

The email sending logic is in:
- **File**: `server/routes.ts`
- **Endpoint**: `POST /api/contact`
- **Function**: `createTransporter()` and the contact form handler

## Security Note

⚠️ **Never commit your `.env` file to git!** It contains sensitive credentials. The `.env` file should already be in `.gitignore`.
