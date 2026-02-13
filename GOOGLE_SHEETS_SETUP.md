# Google Sheets Setup Guide for Contact Form

This guide will help you set up the contact form to send data directly to Google Sheets without any backend logic.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Contact Form Submissions"
4. In the first row (Row 1), add these column headers:
   - **A1**: `Name`
   - **B1**: `Email`
   - **C1**: `Subject`
   - **D1**: `Message`
   - **E1**: `Timestamp`

## Step 2: Create Google Apps Script

1. In your Google Sheet, click on **Extensions** → **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste this code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Append the data to the sheet
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || '',
      timestamp
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Data saved successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': false,
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon) or press `Ctrl+S` / `Cmd+S`
5. Give your project a name (e.g., "Contact Form Handler")

## Step 3: Deploy as Web App

1. Click on **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Configure the deployment:
   - **Description**: "Contact Form Handler" (or any name you prefer)
   - **Execute as**: Select **Me** (your email)
   - **Who has access**: Select **Anyone** (this allows your website to submit data)
4. Click **Deploy**
5. You may be asked to authorize the script:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to [Project Name] (unsafe)**
   - Click **Allow**
6. Copy the **Web App URL** that appears (it will look like: `https://script.google.com/macros/s/XXXXX/exec`)

## Step 4: Configure Your Project

1. Create a `.env` file in the root of your project (if it doesn't exist)
2. Add the following lines:
   ```
   VITE_FORM_PROVIDER=google-sheets
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   Replace `YOUR_SCRIPT_ID` with the actual URL you copied in Step 3.

3. Restart your development server for the changes to take effect:
   ```bash
   npm run dev
   ```

## Step 5: Test the Form

1. Fill out the contact form on your website
2. Submit the form
3. Check your Google Sheet - you should see a new row with the submitted data

## Troubleshooting

### Form submits but data doesn't appear in sheet
- Make sure the Apps Script is deployed as a Web App (not just saved)
- Verify the `VITE_GOOGLE_SCRIPT_URL` in your `.env` file is correct
- Check that "Who has access" is set to **Anyone** (not "Only myself")

### Getting authorization errors
- Make sure you've authorized the script when deploying
- Try redeploying the script and authorizing again

### Data appears but columns are wrong
- Make sure your sheet has the correct headers in Row 1:
  - Name, Email, Subject, Message, Timestamp
- The script appends data in this exact order

### CORS errors in browser console
- This is normal when using `no-cors` mode
- The data is still being sent to Google Sheets successfully
- You can verify by checking your Google Sheet

## Security Notes

- The Web App URL is public, but only your specific Google Sheet can receive the data
- Anyone with the URL can submit data to your sheet (this is expected for a contact form)
- Consider adding basic validation or rate limiting in the Apps Script if needed
- The script only appends data - it cannot read or modify existing data without additional permissions

## Advanced: Add Email Notifications

If you want to receive email notifications when someone submits the form, you can modify the Apps Script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = new Date();
    
    // Append to sheet
    sheet.appendRow([
      data.name || '',
      data.email || '',
      data.subject || '',
      data.message || '',
      timestamp
    ]);
    
    // Send email notification (optional)
    var emailBody = 'New contact form submission:\n\n' +
                    'Name: ' + data.name + '\n' +
                    'Email: ' + data.email + '\n' +
                    'Subject: ' + data.subject + '\n' +
                    'Message: ' + data.message;
    
    MailApp.sendEmail({
      to: 'info@suzalabs.com', // Change this to your email
      subject: 'New Contact Form: ' + data.subject,
      body: emailBody
    });
    
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': true,
        'message': 'Data saved successfully'
      }}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        'success': false,
        'error': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

Replace `'info@suzalabs.com'` with your actual email address.
