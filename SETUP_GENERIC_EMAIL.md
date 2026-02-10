# Setup Generic Email to Hide Personal Email

## Current Issue
Emails show `suzalabs@gmail.com` in the "from" address. You want to hide this.

## Solution: Use a Generic Email Address

### Option 1: Use Domain Email (Best)
If you have a domain (e.g., `suzalabs.com` or any domain):

1. **Authenticate Domain in SendGrid:**
   - Go to: https://app.sendgrid.com/settings/sender_auth/domains
   - Click "Authenticate Your Domain"
   - Follow DNS setup instructions
   - This allows sending from any email on your domain

2. **Update .env:**
   ```env
   SENDGRID_FROM_EMAIL=contact@suzalabs.com
   # or
   SENDGRID_FROM_EMAIL=noreply@suzalabs.com
   ```

### Option 2: Verify a Generic Gmail Account
If you don't have a domain, create a generic Gmail account:

1. **Create new Gmail account:**
   - Example: `suzalabs.contact@gmail.com`
   - Or: `contact.suzalabs@gmail.com`

2. **Verify in SendGrid:**
   - Go to: https://app.sendgrid.com/settings/sender_auth/senders
   - Click "Verify a Single Sender"
   - Email: `suzalabs.contact@gmail.com`
   - Name: `Suza Labs Contact Form`
   - Complete the form and verify

3. **Update .env:**
   ```env
   SENDGRID_FROM_EMAIL=suzalabs.contact@gmail.com
   ```

### Option 3: Use Existing Business Email
If you have a business email (not Gmail):

1. **Verify in SendGrid:**
   - Go to: https://app.sendgrid.com/settings/sender_auth/senders
   - Click "Verify a Single Sender"
   - Enter your business email
   - Complete verification

2. **Update .env:**
   ```env
   SENDGRID_FROM_EMAIL=contact@yourbusiness.com
   ```

## After Setup

1. **Update .env file:**
   ```env
   SENDGRID_API_KEY=your-api-key
   EMAIL_TO=suzalabs@gmail.com
   SENDGRID_FROM_EMAIL=contact@yourdomain.com  # Your generic email
   PORT=5000
   ```

2. **Restart server:**
   ```bash
   npm run dev
   ```

3. **Test contact form**

## Result

After setup, emails will show:
- **From**: "Shamir kashif" (or submitter's name)
- **Actual sender**: `contact@yourdomain.com` (your generic email, not personal)
- **Reply-To**: Submitter's email (replies still work)

## Important Notes

- The generic email must be **verified in SendGrid**
- Email clients will still show the actual sender email (for security)
- But it will be your generic email, not your personal `suzalabs@gmail.com`
- The "via sendgrid.net" is added by email clients automatically

## Recommendation

**Best option**: Use domain authentication if you have a domain. This is the most professional solution and allows you to use any email on your domain.
