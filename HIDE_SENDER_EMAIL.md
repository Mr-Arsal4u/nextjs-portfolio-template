# Hide Personal Email from "From" Address

## Current Issue
Emails show: `suzalabs@gmail.com` in the "from" address, which you want to hide.

## Solutions

### Option 1: Use Domain Authentication (Best Solution)
If you have a domain (e.g., `suzalabs.com`), authenticate it in SendGrid:

1. Go to: https://app.sendgrid.com/settings/sender_auth/domains
2. Click "Authenticate Your Domain"
3. Follow DNS setup instructions
4. After authentication, you can send from: `contact@suzalabs.com` or `noreply@suzalabs.com`

**Update .env:**
```env
SENDGRID_FROM_EMAIL=contact@suzalabs.com
```

### Option 2: Use a Generic Verified Email
Create and verify a generic email address in SendGrid:

1. Go to: https://app.sendgrid.com/settings/sender_auth/senders
2. Click "Verify a Single Sender"
3. Use a generic email like:
   - `contact@yourdomain.com`
   - `noreply@yourdomain.com`
   - `info@yourdomain.com`

**Update .env:**
```env
SENDGRID_FROM_EMAIL=contact@yourdomain.com
```

### Option 3: Use a Different Gmail Account
If you have another Gmail account, verify it in SendGrid:

1. Verify the new email in SendGrid
2. Update `.env`:
   ```env
   SENDGRID_FROM_EMAIL=your-other-email@gmail.com
   ```

## Important Notes

- SendGrid **requires** a verified sender email
- The actual sender email will always be visible in email headers
- Email clients show the actual sender for security/transparency
- The "via sendgrid.net" is added by email clients automatically

## Recommendation

**Best solution**: Set up domain authentication so you can use `contact@yourdomain.com` or `noreply@yourdomain.com`. This looks more professional and hides your personal email.
