# Email Not Received? Troubleshooting Guide

## Quick Checks

### 1. Check Spam/Junk Folder
- **Gmail**: Check "Spam" folder
- **Outlook**: Check "Junk Email" folder
- **Yahoo**: Check "Spam" folder
- Search for: "Contact Form" or "New Inquiry"

### 2. Verify Email Address in .env
Your `.env` file should have:
```env
EMAIL_TO=suzalabs@gmail.com
SENDGRID_FROM_EMAIL=suzalabs@gmail.com
```

**Important**: The `SENDGRID_FROM_EMAIL` must be verified in SendGrid!

### 3. Verify Sender in SendGrid
1. Go to: https://app.sendgrid.com/settings/sender_auth/senders
2. Check if `suzalabs@gmail.com` is verified
3. If not verified:
   - Click "Verify a Single Sender"
   - Enter: `suzalabs@gmail.com`
   - Complete the form
   - Check your email and verify

### 4. Check SendGrid Activity
1. Go to: https://app.sendgrid.com/activity
2. Look for recent email sends
3. Check the status:
   - ✅ **Delivered**: Email was sent (check spam)
   - ⚠️ **Bounced**: Email address issue
   - ❌ **Blocked**: Sender not verified
   - ⏳ **Processing**: Still sending

### 5. Check Server Logs
Look for these in your terminal:
```
Email sent successfully with verified sender
Email details: { to: 'suzalabs@gmail.com', ... }
```

### 6. Test with Different Email
Try changing `EMAIL_TO` to a different email you have access to:
```env
EMAIL_TO=your-other-email@gmail.com
```

Then restart server and test again.

## Common Issues

### Issue: "Email sent" but not received
**Solution**: 
- Check spam folder
- Verify sender email in SendGrid
- Check SendGrid Activity dashboard

### Issue: SendGrid rejects email
**Solution**: 
- Verify `SENDGRID_FROM_EMAIL` in SendGrid dashboard
- Make sure it matches the email in `.env`

### Issue: Wrong email address
**Solution**: 
- Double-check `EMAIL_TO` in `.env`
- Make sure there are no typos
- Restart server after changing `.env`

## Next Steps

1. **Check SendGrid Activity**: https://app.sendgrid.com/activity
2. **Verify Sender**: https://app.sendgrid.com/settings/sender_auth/senders
3. **Check Spam Folder** in your email
4. **Restart Server** after any `.env` changes

If still not working, check the server logs for the exact email address being used.
