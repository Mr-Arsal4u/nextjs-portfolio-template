/**
 * Form submission utility supporting multiple providers
 * Set VITE_FORM_PROVIDER in .env to switch between providers
 */

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type SubmitResponse = {
  success: boolean;
  message?: string;
  error?: string;
};

/**
 * Submit to Google Sheets via Apps Script
 */
async function submitToGoogleSheets(data: FormData): Promise<SubmitResponse> {
  const scriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
  
  if (!scriptURL) {
    throw new Error("Google Sheets configuration is missing. Please set VITE_GOOGLE_SCRIPT_URL in your .env file.");
  }

  await fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  // With no-cors mode, we can't read the response, so we assume success
  return { success: true, message: "Data saved successfully" };
}

/**
 * Submit to Formspree
 */
async function submitToFormspree(data: FormData): Promise<SubmitResponse> {
  const formspreeUrl = import.meta.env.VITE_FORMSPREE_URL;
  
  if (!formspreeUrl) {
    throw new Error("Formspree configuration is missing. Please set VITE_FORMSPREE_URL in your .env file.");
  }

  const response = await fetch(formspreeUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (response.ok) {
    return { success: true, message: "Message sent successfully" };
  } else {
    throw new Error(result.error || "Failed to send message");
  }
}

/**
 * Submit to Web3Forms
 */
async function submitToWeb3Forms(data: FormData): Promise<SubmitResponse> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
  
  if (!accessKey) {
    throw new Error("Web3Forms configuration is missing. Please set VITE_WEB3FORMS_KEY in your .env file.");
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      ...data,
    }),
  });

  const result = await response.json();

  if (result.success) {
    return { success: true, message: result.message || "Message sent successfully" };
  } else {
    throw new Error(result.message || "Failed to send message");
  }
}

/**
 * Submit to FormSubmit
 */
async function submitToFormSubmit(data: FormData): Promise<SubmitResponse> {
  const email = import.meta.env.VITE_FORMSUBMIT_EMAIL;
  
  if (!email) {
    throw new Error("FormSubmit configuration is missing. Please set VITE_FORMSUBMIT_EMAIL in your .env file.");
  }

  const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (result.success) {
    return { success: true, message: "Message sent successfully" };
  } else {
    throw new Error("Failed to send message");
  }
}

/**
 * Submit to Airtable
 */
async function submitToAirtable(data: FormData): Promise<SubmitResponse> {
  const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
  const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
  const tableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME || "Contact%20Submissions";
  
  if (!baseId || !apiKey) {
    throw new Error("Airtable configuration is missing. Please set VITE_AIRTABLE_BASE_ID and VITE_AIRTABLE_API_KEY in your .env file.");
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${tableName}`,
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          Name: data.name,
          Email: data.email,
          Subject: data.subject,
          Message: data.message,
          Timestamp: new Date().toISOString(),
        },
      }),
    }
  );

  if (response.ok) {
    return { success: true, message: "Data saved successfully" };
  } else {
    const error = await response.json();
    throw new Error(error.error?.message || "Failed to save data");
  }
}

/**
 * Main function to submit contact form
 * Automatically uses the provider specified in VITE_FORM_PROVIDER
 */
export async function submitContactForm(data: FormData): Promise<SubmitResponse> {
  const provider = (import.meta.env.VITE_FORM_PROVIDER || "google-sheets").toLowerCase();

  switch (provider) {
    case "google-sheets":
      return submitToGoogleSheets(data);
    
    case "formspree":
      return submitToFormspree(data);
    
    case "web3forms":
      return submitToWeb3Forms(data);
    
    case "formsubmit":
      return submitToFormSubmit(data);
    
    case "airtable":
      return submitToAirtable(data);
    
    default:
      throw new Error(
        `Unknown form provider: ${provider}. ` +
        `Supported providers: google-sheets, formspree, web3forms, formsubmit, airtable`
      );
  }
}
