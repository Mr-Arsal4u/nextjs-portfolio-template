# Portfolio Website

## Overview

This is a modern, interactive portfolio website for a Full Stack Developer built with React, TypeScript, and Express.js. The application features a stunning 3D-enhanced frontend with glassmorphism design, advanced animations, and a RESTful API backend. The portfolio showcases professional experience, skills, projects, and provides a contact form for potential clients or employers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side application is built using **React 18** with **TypeScript** for type safety. The frontend follows a component-based architecture with:

- **Vite** as the build tool for fast development and optimized production builds
- **shadcn/ui** component library with **Radix UI** primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom CSS variables for theming
- **Framer Motion** for advanced animations and transitions
- **Three.js** integration for 3D interactive backgrounds and visual effects
- **React Router (wouter)** for lightweight client-side routing
- **TanStack Query** for efficient server state management and caching

The design system implements a dark theme with neon accent colors (cyan, lime, magenta) and glassmorphism effects. Custom hooks manage theme switching, cursor interactions, and mobile responsiveness.

### Backend Architecture
The server is built with **Express.js** and follows RESTful API principles:

- **Express.js** server with middleware for JSON parsing, CORS, and error handling
- **TypeScript** throughout the backend for consistency and type safety
- Modular route organization with dedicated API endpoints
- In-memory storage implementation with abstracted storage interface for easy database migration
- Form validation using **Zod** schemas for type-safe data handling
- Development middleware integration with Vite for hot module replacement

### Component Structure
The application is organized into logical component groups:

- **Layout Components**: Navigation, Hero section, Footer with social links
- **Content Sections**: About, Experience, Skills, Projects, Open Source, Certifications, Contact
- **Interactive Elements**: Custom cursor, 3D backgrounds, animated skill nodes
- **UI Components**: Comprehensive shadcn/ui component library with buttons, forms, cards, dialogs, and more

### State Management
- **React Context** for global state (theme, cursor position)
- **TanStack Query** for server state and API data fetching
- **React Hook Form** with resolver integration for form state management
- Local component state for UI interactions and animations

### Styling and Design System
- **Tailwind CSS** with custom configuration and CSS variables
- **Dark theme** as default with light theme support
- **Glassmorphism** effects with backdrop blur and transparency
- **Neon gradient** accents and custom animations
- **Responsive design** with mobile-first approach
- **Custom fonts**: Inter for UI text, JetBrains Mono for code elements

## External Dependencies

### Core Framework Dependencies
- **React 18** - Frontend framework with hooks and concurrent features
- **Express.js** - Backend web application framework
- **TypeScript** - Type safety across frontend and backend
- **Vite** - Modern build tool and development server

### UI and Styling
- **shadcn/ui** - Pre-built accessible component library
- **Radix UI** - Primitive components for complex UI patterns
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Three.js** - 3D graphics library for interactive backgrounds
- **Lucide React** - Icon library

### Data Management
- **TanStack Query** - Server state management and caching
- **React Hook Form** - Form state management
- **Zod** - Schema validation and type inference
- **Drizzle ORM** - Database ORM with PostgreSQL support

### Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit integration for development

### Database and Storage
- **Drizzle Kit** - Database migration and schema management
- **@neondatabase/serverless** - PostgreSQL database connection
- **connect-pg-simple** - PostgreSQL session store for Express

### Utility Libraries
- **date-fns** - Date manipulation and formatting
- **clsx** - Conditional className utility
- **class-variance-authority** - Component variant management
- **nanoid** - Unique ID generation