# 🚀 Complete Backend Setup

## Where is the Backend?

The backend code is in the **`server/`** folder:

```
server/
├── index.ts      ← Main server (starts Express, handles routing)
├── routes.ts     ← API endpoints (contact form email sending)
├── storage.ts    ← Database utilities
└── vite.ts       ← Development server setup
```

## Quick Start (3 Steps)

### Step 1: Create `.env` file in ROOT directory

```bash
# In project root (same folder as package.json)
touch .env
```

### Step 2: Add your email config to `.env`

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=your-email@gmail.com
SEND_AUTO_REPLY=false
```

### Step 3: Start server

```bash
npm run dev
```

That's it! The contact form will now send emails.

## 📍 File Locations

| What | Where |
|------|-------|
| **Backend code** | `server/routes.ts` |
| **Email config** | `.env` file (root directory) |
| **Contact form** | `client/src/components/Contact.tsx` |
| **API endpoint** | `POST /api/contact` |

## 📧 Gmail Setup (Most Common)

1. Go to: https://myaccount.google.com/apppasswords
2. Generate App Password for "Mail"
3. Copy the 16-character password
4. Paste in `.env` as `EMAIL_PASSWORD`

## ✅ Verification

After setup:
1. Submit the contact form on your site
2. Check your email inbox
3. You should receive the form submission!

## 📖 More Details

- See `EMAIL_SETUP.md` for detailed email provider instructions
- See `BACKEND_SETUP.md` for complete backend documentation
