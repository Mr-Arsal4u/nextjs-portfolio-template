import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import sgMail from "@sendgrid/mail";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required")
});

// Initialize SendGrid
const initializeSendGrid = () => {
  const apiKey = process.env.SENDGRID_API_KEY;
  const emailTo = process.env.EMAIL_TO;

  if (!apiKey) {
    console.log("SendGrid API key not configured");
    return false;
  }

  if (!emailTo) {
    console.log("EMAIL_TO not configured");
    return false;
  }

  sgMail.setApiKey(apiKey);
  console.log("SendGrid initialized successfully");
  return true;
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Initialize SendGrid on server start
  const isSendGridConfigured = initializeSendGrid();
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      // Log received data for debugging
      console.log("Received contact form data:", req.body);
      
      const validatedData = contactFormSchema.parse(req.body);
      const emailTo = process.env.EMAIL_TO;
      
      console.log("Email configuration:", {
        emailTo,
        sendGridConfigured: isSendGridConfigured,
        sendGridFromEmail: process.env.SENDGRID_FROM_EMAIL
      });
      
      if (isSendGridConfigured && emailTo) {
        // Email content (defined outside try block for error handling)
        // Professional email template to reduce spam score
        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 30px;">
                <h2 style="color: #2c3e50; margin-top: 0;">New Contact Form Inquiry</h2>
                <p style="color: #555;">You have received a new message through your portfolio contact form.</p>
                          
                          <table role="presentation" style="width: 100%; background-color: #f8f9fa; border-left: 4px solid #3498db; border-radius: 4px; margin: 20px 0;">
                            <tr>
                              <td style="padding: 20px;">
                                <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #2c3e50; display: inline-block; min-width: 80px;">Name:</strong> <span style="color: #333333;">${validatedData.name}</span></p>
                                <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #2c3e50; display: inline-block; min-width: 80px;">Email:</strong> <a href="mailto:${validatedData.email}" style="color: #3498db; text-decoration: none;">${validatedData.email}</a></p>
                                <p style="margin: 8px 0; font-size: 14px;"><strong style="color: #2c3e50; display: inline-block; min-width: 80px;">Subject:</strong> <span style="color: #333333;">${validatedData.subject}</span></p>
                              </td>
                            </tr>
                          </table>
                          
                          <table role="presentation" style="width: 100%; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 4px; margin: 20px 0;">
                            <tr>
                              <td style="padding: 20px;">
                                <h3 style="color: #2c3e50; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Message:</h3>
                                <p style="color: #333333; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${validatedData.message.replace(/\n/g, '<br>')}</p>
                              </td>
                            </tr>
                          </table>
                          
                          <table role="presentation" style="width: 100%; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                            <tr>
                              <td>
                                <p style="color: #7f8c8d; font-size: 14px; margin: 0; line-height: 1.6;">
                                  You can reply directly to this email to respond to ${validatedData.name} at <a href="mailto:${validatedData.email}" style="color: #3498db; text-decoration: none;">${validatedData.email}</a>.
                                </p>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                    <p style="text-align: center; color: #95a5a6; font-size: 12px; margin: 20px 0 0 0;">
                      This is an automated message from your portfolio contact form.
                    </p>
                  </td>
                </tr>
              </table>
            </body>
            </html>
          `;
          
          const emailText = `
New Contact Form Inquiry

You have received a new message through your portfolio contact form.

Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

---
You can reply directly to this email to respond to ${validatedData.name}.

This email was sent from your portfolio contact form.
          `;
        
        try {
          // Email to you (notification)
          console.log("Sending email to:", validatedData.email);
          // Try to use submitter's email as from address
          // If SendGrid rejects it, it will fall back to verified email
          const fromEmail = validatedData.email; // Submitter's email
          const fromName = validatedData.name; // Just the name, no email
          
          const msg = {
            to: emailTo, // suzalabs@gmail.com
            from: {
              email: fromEmail, // submitter's email (e.g., shamirkashif02@gmail.com)
              name: fromName // Display just the name
            },
            replyTo: validatedData.email, // Replies go to submitter
            subject: `New Contact: ${validatedData.subject}`, // Changed from "Contact Form:" to reduce spam triggers
            html: emailHtml,
            text: emailText,
            // Add headers to improve deliverability and reduce spam
            headers: {
              'X-Entity-Ref-ID': `contact-${Date.now()}`,
              'X-Mailer': 'Portfolio Contact Form',
              'List-Unsubscribe': `<mailto:${emailTo}?subject=unsubscribe>`,
              'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
              'Precedence': 'bulk',
              'X-Priority': '1',
              'Importance': 'normal',
              'X-Auto-Response-Suppress': 'All', // Prevent auto-replies
              'Auto-Submitted': 'auto-generated', // Indicates automated email
              'Return-Path': validatedData.email, // Return path for bounces
            },
            // Add categories for better tracking
            categories: ['contact-form', 'portfolio-inquiry'],
            // Add custom args for tracking
            customArgs: {
              'contact-form': 'true',
              'timestamp': Date.now().toString()
            }
          };

          const response = await sgMail.send(msg);
          console.log("Email sent successfully via SendGrid");
          console.log("SendGrid response status:", response[0]?.statusCode);
          console.log("Email details:", {
            to: emailTo,
            from: `${validatedData.name} <${validatedData.email}>`,
            replyTo: validatedData.email,
            subject: `New Contact: ${validatedData.subject}`
          });

          // Optional: Send auto-reply to user
          if (process.env.SEND_AUTO_REPLY === 'true') {
            const replyFromName = process.env.EMAIL_FROM_NAME || "Suza Labs";
            const replyFromEmail = process.env.SENDGRID_FROM_EMAIL || emailTo;
            
            const autoReplyMsg = {
              to: validatedData.email,
              from: {
                email: replyFromEmail,
                name: replyFromName
              },
              subject: `Re: ${validatedData.subject}`,
              html: `
                <p>Dear ${validatedData.name},</p>
                <p>Thank you for contacting us! We have received your message and will get back to you within 24 hours.</p>
                <p>Best regards,<br>Suza Labs Team</p>
              `,
              text: `
                Dear ${validatedData.name},
                
                Thank you for contacting us! We have received your message and will get back to you within 24 hours.
                
                Best regards,
                Suza Labs Team
              `,
            };

            await sgMail.send(autoReplyMsg);
            console.log("Auto-reply sent successfully");
          }
        } catch (emailError: any) {
          console.error("Email sending error:", emailError);
          if (emailError.response) {
            console.error("SendGrid error details:", emailError.response.body);
            
            // If error is due to unverified sender, retry with verified email
            const errors = emailError.response.body?.errors || [];
            const isSenderError = errors.some((err: any) => 
              err.message?.includes("verified Sender Identity") || 
              err.field === "from"
            );
            
            if (isSenderError) {
              console.log("Retrying with verified sender email...");
              try {
                // Use a generic email or the configured one
                // To hide personal email, set SENDGRID_FROM_EMAIL to a generic address like contact@yourdomain.com
                const verifiedFromEmail = process.env.SENDGRID_FROM_EMAIL || emailTo;
                // Just show the name, no email in display
                const displayName = validatedData.name;
                const retryMsg = {
                  to: emailTo,
                  from: {
                    email: verifiedFromEmail, // Verified email required by SendGrid (actual sender)
                    name: displayName // Display just the name
                  },
                  replyTo: validatedData.email,
                  subject: `New Contact: ${validatedData.subject}`, // Changed from "Contact Form:" to reduce spam triggers
                  html: emailHtml,
                  text: emailText,
                  // Add headers to improve deliverability and reduce spam
                  headers: {
                    'X-Entity-Ref-ID': `contact-${Date.now()}`,
                    'X-Mailer': 'Portfolio Contact Form',
                    'List-Unsubscribe': `<mailto:${emailTo}?subject=unsubscribe>`,
                    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
                    'Precedence': 'bulk',
                    'X-Priority': '1',
                    'Importance': 'normal',
                    'X-Auto-Response-Suppress': 'All', // Prevent auto-replies
                    'Auto-Submitted': 'auto-generated', // Indicates automated email
                    'Return-Path': validatedData.email, // Return path for bounces
                  },
                  // Add categories for better tracking
                  categories: ['contact-form', 'portfolio-inquiry'],
                  // Add custom args for tracking
                  customArgs: {
                    'contact-form': 'true',
                    'timestamp': Date.now().toString()
                  }
                };
                const retryResponse = await sgMail.send(retryMsg);
                console.log("Email sent successfully with verified sender");
                console.log("SendGrid response:", retryResponse[0]?.statusCode, retryResponse[0]?.headers);
                console.log("Email details:", {
                  to: emailTo,
                  from: `${validatedData.name} <${validatedData.email}>`,
                  actualFromEmail: verifiedFromEmail,
                  replyTo: validatedData.email,
                  subject: `Contact Form: ${validatedData.subject}`
                });
              } catch (retryError) {
                console.error("Retry also failed:", retryError);
              }
            }
          }
          // Still return success to user, but log the error
        }
      } else {
        console.log("SendGrid not configured. Contact form submission:", validatedData);
      }
      
      res.json({ 
        success: true, 
        message: "Thank you for your message. We'll get back to you soon!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Get the first error message for user-friendly display
        const firstError = error.errors[0];
        const errorMessage = firstError 
          ? `${firstError.path.join('.')}: ${firstError.message}`
          : "Invalid form data. Please check all fields.";
        
        res.status(400).json({ 
          success: false, 
          message: errorMessage,
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Portfolio data endpoints (for future use)
  app.get("/api/portfolio", async (req, res) => {
    res.json({
      name: "Alex Chen",
      title: "Full Stack Developer",
      email: "alex.chen@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
