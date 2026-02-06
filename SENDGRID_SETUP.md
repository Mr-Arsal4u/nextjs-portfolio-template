# SendGrid Setup Guide (Free & Easy!)

SendGrid offers **100 free emails per day** - perfect for contact forms!

## Quick Setup (5 minutes)

### Step 1: Create SendGrid Account

1. Go to: https://signup.sendgrid.com/
2. Sign up for free (no credit card required)
3. Verify your email address

### Step 2: Get API Key

1. Log in to SendGrid dashboard: https://app.sendgrid.com/
2. Go to **Settings** → **API Keys**
3. Click **Create API Key**
4. Name it: "Portfolio Contact Form"
5. Select **Full Access** (or just "Mail Send" permissions)
6. Click **Create & View**
7. **Copy the API key immediately** (you won't see it again!)

### Step 3: Verify Sender Email (Important!)

1. Go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Fill in your details:
   - **From Email**: shamir.kashif@xintsolutions.com (or your email)
   - **From Name**: Suza Labs
   - Complete the form
4. Check your email and click the verification link

### Step 4: Update .env File

Open your `.env` file and replace it with:

```env
# SendGrid API Key (get from https://app.sendgrid.com/settings/api_keys)
SENDGRID_API_KEY=SG.your-actual-api-key-here

# Where to receive contact form submissions
EMAIL_TO=shamir.kashif@xintsolutions.com

# Optional: Send auto-reply to users
SEND_AUTO_REPLY=false

# Optional: From name for auto-replies
EMAIL_FROM_NAME=Suza Labs

# Server Port
PORT=5000
```

### Step 5: Restart Server

```bash
npm run dev
```

## Benefits of SendGrid

✅ **Free**: 100 emails/day (3,000/month)  
✅ **Custom "From" addresses**: Emails appear from submitter's email  
✅ **No SMTP issues**: Works reliably  
✅ **Easy setup**: Just an API key  
✅ **Professional**: Used by major companies  

## How It Works

When someone submits the contact form:
- Email sent via SendGrid API
- **From**: Submitter's name and email (e.g., "John Doe" <john@example.com>)
- **To**: Your email (shamir.kashif@xintsolutions.com)
- **Reply-To**: Submitter's email (so you can reply directly)

## Troubleshooting

### "Unauthorized" Error
- Check your API key is correct
- Make sure you copied the full key (starts with `SG.`)

### "Sender email not verified"
- Verify your sender email in SendGrid dashboard
- Check spam folder for verification email

### Email not sending
- Check server console for error messages
- Verify API key in `.env` file
- Make sure `EMAIL_TO` is set

## Free Tier Limits

- **100 emails/day** (resets daily)
- **Unlimited contacts**
- Perfect for contact forms!

If you need more, SendGrid paid plans start at $19.95/month for 50,000 emails.
