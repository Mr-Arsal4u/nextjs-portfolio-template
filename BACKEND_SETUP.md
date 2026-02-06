# Backend Setup Guide

## 📁 Backend Structure

The backend is located in the `server/` directory:

```
server/
├── index.ts      # Main server entry point
├── routes.ts     # API routes (including contact form email)
├── storage.ts    # Database storage utilities
└── vite.ts       # Vite development server setup
```

## 🔧 Quick Setup

### 1. Create `.env` File

In the **root directory** (same level as `package.json`), create a `.env` file:

```bash
# From project root
touch .env
```

### 2. Add Email Configuration

Copy the example and fill in your details:

```bash
# Copy example file
cp env.example .env

# Then edit .env with your email credentials
```

Or manually create `.env` with:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
SEND_AUTO_REPLY=false
PORT=5000
```

### 3. Start the Server

```bash
npm run dev
```

The server will start on port 5000 (or the port specified in `.env`).

## 📧 Email Configuration Details

### Gmail Setup (Recommended)

1. **Enable 2-Step Verification**
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" → "Other (Custom name)"
   - Name it "Portfolio Contact Form"
   - Copy the 16-character password
   - Use this as `EMAIL_PASSWORD` in `.env`

3. **Your `.env` should look like:**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=youremail@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
EMAIL_FROM=youremail@gmail.com
EMAIL_TO=youremail@gmail.com
SEND_AUTO_REPLY=false
```

## 🔌 API Endpoints

### POST `/api/contact`

Handles contact form submissions and sends emails.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in your services..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message. We'll get back to you soon!"
}
```

**Location:** `server/routes.ts` (lines 40-124)

## 🛠️ How It Works

1. **User submits form** → Frontend sends POST to `/api/contact`
2. **Backend validates** → Uses Zod schema validation
3. **Email sent** → Nodemailer sends email to `EMAIL_TO`
4. **Optional auto-reply** → If `SEND_AUTO_REPLY=true`, sends confirmation to user

## 📝 Code Locations

### Email Configuration
- **File:** `server/routes.ts`
- **Function:** `createTransporter()` (lines 15-37)
- **Environment Variables:** Read from `process.env`

### Contact Form Handler
- **File:** `server/routes.ts`
- **Route:** `app.post("/api/contact", ...)` (lines 41-124)
- **Validation:** Uses Zod schema (lines 7-12)

### Frontend Form
- **File:** `client/src/components/Contact.tsx`
- **Function:** `handleSubmit()` (sends to `/api/contact`)

## 🧪 Testing

1. **Start server:**
   ```bash
   npm run dev
   ```

2. **Test form:**
   - Go to http://localhost:5000
   - Navigate to Contact section
   - Fill out and submit form
   - Check your email inbox

3. **Check server logs:**
   - Look for "Email sending error" if there's an issue
   - Check console for "Email not configured" if `.env` is missing

## ⚠️ Troubleshooting

### Email Not Sending?

1. **Check `.env` file exists** in root directory
2. **Verify all variables are set** (no empty values)
3. **Check server logs** for error messages
4. **Test credentials** - try logging into email manually
5. **For Gmail:** Must use App Password, not regular password

### Common Issues

| Issue | Solution |
|-------|----------|
| "Invalid login" | Wrong email/password or need App Password |
| "Connection timeout" | Firewall blocking port 587/465 |
| "Email not configured" | `.env` file missing or incomplete |
| Form submits but no email | Check server console for errors |

## 🔒 Security

- ✅ `.env` file is in `.gitignore` (won't be committed)
- ✅ Passwords stored as environment variables
- ✅ Form validation on both client and server
- ✅ Error messages don't expose sensitive info

## 📚 Additional Resources

- **Nodemailer Docs:** https://nodemailer.com/about/
- **Gmail App Passwords:** https://support.google.com/accounts/answer/185833
- **SMTP Settings by Provider:** Check your email provider's documentation
