import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real implementation, you would:
      // 1. Save to database
      // 2. Send email notification
      // 3. Possibly send auto-reply to user
      
      console.log("Contact form submission:", validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message. I'll get back to you soon!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
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
      name: "Saqib Rafique",
      title: "Full Stack Developer",
      email: "saibali497@gmail.com",
      phone: "+92 304 4586063",
      location: "Lahore, Pakistan",
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
