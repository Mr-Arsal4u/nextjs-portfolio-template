export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  fullDescription?: string;
  image: string;
  results: string[];
  technologies: string[];
  liveUrl: string;
  challenge?: string;
  solution?: string;
  impact?: string[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "retail-sales-dashboard",
    title: "Retail Sales Performance Dashboard",
    client: "Global Retail Inc.",
    category: "Data Analytics",
    description: "Interactive Power BI dashboard consolidating sales, profit, and customer insights for strategic decision-making.",
    fullDescription: "A Power BI dashboard built on the Super Store Sales dataset to deliver fast, actionable insights into retail performance. The solution consolidates sales, profit, orders, and customer behavior into a single, interactive view—enabling decision-makers to track performance and identify opportunities in seconds. KPI cards provide an instant snapshot of business health, while detailed trend analysis and geographic heat maps reveal deeper patterns.",
    image: "/images/retail-dashboard.png",
    results: ["Real-time Insights", "Strategic Decision Support", "Profit Margin Analysis"],
    technologies: ["Power BI", "DAX", "Data Modeling", "SQL"],
    liveUrl: "#",
    challenge: "Retail managers struggled with fragmented data across multiple static reports, making it difficult to get a holistic view of performance and identify profitable opportunities in real-time.",
    solution: "We designed a comprehensive Power BI dashboard that unifies data streams. Key features include interactive KPI cards, seasonal trend analysis, geographic performance mapping, and granular category/product drill-downs. Discount and profit analysis modules help stakeholders balance growth with profitability.",
    impact: [
      "Consolidated multiple static reports into one dynamic view",
      "Enabled seconds-to-insight for key performance metrics",
      "Identified underperforming regions and profitable product segments",
      "Improved strategic planning with data-driven visuals"
    ]
  },
  {
    id: "steamzilla-car-cleaning",
    title: "SteamZilla - Car Steam Cleaning Platform",
    client: "SteamZilla Services",
    category: "Web Application",
    description: "Full-stack web platform for eco-friendly car steam cleaning service with online booking, admin dashboard, and customer management.",
    fullDescription: "SteamZilla roars into the car care industry with a revolutionary steam cleaning system. We built a comprehensive web platform that enables customers to book professional steam cleaning services online, while providing powerful admin and user dashboards for seamless service management. The platform emphasizes the health benefits of chemical-free, 300°F+ steam that eliminates 99.9% of germs, bacteria, and allergens.",
    image: "/images/steamzilla.png",
    results: ["Chemical-Free", "99.9% Sanitization", "Mobile Service"],
    technologies: ["Laravel", "Next.js", "MySQL", "PHP"],
    liveUrl: "#",
    challenge: "SteamZilla needed a complete digital platform to showcase their eco-friendly steam cleaning method, enable online bookings, and manage both customer and service provider workflows efficiently.",
    solution: "We developed a full-stack web application using Laravel and PHP for the robust backend API, MySQL for data management, and Next.js for a responsive, modern frontend. The platform includes an admin dashboard for service management, user dashboard for booking history, and a public-facing website highlighting the unique 'Zilla Method' of steam cleaning.",
    impact: [
      "Enabled online booking with real-time scheduling",
      "Reduced booking friction with mobile-first design",
      "Streamlined operations with comprehensive admin tools",
      "Showcased eco-friendly, chemical-free cleaning benefits"
    ]
  },
  {
    id: "ai-essay-mentor",
    title: "AI Essay Mentor for Students",
    client: "Educational Institutions",
    category: "AI & Education",
    description: "An intelligent multi-agent AI system guides students through a structured, iterative essay-writing process.",
    fullDescription: "What once required over an hour of manual review by a teacher is now completed in minutes. This automation dramatically reduces turnaround time while giving students immediate, actionable feedback at scale—helping them learn faster, write better, and continuously improve with every iteration.",
    image: "/images/ai-essay-mentor.png",
    results: ["10x Faster Feedback", "Improved Writing Score", "Scalable Mentorship"],
    technologies: ["Multi-agent AI", "LLMs", "NLP", "Next.js"],
    liveUrl: "#",
    challenge: "Teachers struggle with the time-intensive process of providing detailed, iterative feedback on student essays, limiting the learning cycle.",
    solution: "We built a multi-agent AI system that provides real-time, multi-turn feedback on grammar, structure, clarity, and depth, guiding students through revisions.",
    impact: [
      "Reduced review time from 60+ minutes to seconds",
      "Enabled immediate revision cycles for students",
      "Improved average essay quality by 40%",
      "Scalable across entire departments"
    ]
  },
  {
    id: "outbound-voice-ai",
    title: "Outbound Voice AI for Lead Generation",
    client: "B2B Sales Teams",
    category: "AI Automation",
    description: "A voice-based AI calling agent automates outbound sales outreach by making over 100 calls per day in parallel.",
    fullDescription: "Prospects are engaged in real time, leads are qualified automatically, and sales teams are freed from repetitive dialing to focus on what matters most—closing deals. The impact was immediate, with high-quality leads generated on the very first day of deployment.",
    image: "/images/outbound-voice-ai.png",
    results: ["100+ Calls/Day", "Instant Qualification", "Revenue Growth"],
    technologies: ["Voice AI", "Telephony API", "Speech-to-Text", "Real-time Processing"],
    liveUrl: "#",
    challenge: "Sales teams spend 70% of their time on repetitive cold calling and manual lead qualification, reducing focus on actual closing.",
    solution: "Developed a high-concurrency voice AI agent that engages prospects in natural conversation, qualifies leads based on custom criteria, and populates CRM data.",
    impact: [
      "High-quality leads generated on day one",
      "Increased outreach capacity by 500%",
      "Accelerated sales cycle by automating qualification",
      "Transforming cold calling into a high-efficiency operation"
    ]
  }
];

export function getPortfolioItemById(id: string): PortfolioItem | undefined {
  return portfolioItems.find(item => item.id === id);
}

export const services: Service[] = [
  {
    title: "Digital Product & Web Solutions",
    description: "High-performance websites and applications designed to convert, scale, and perform.",
    iconName: "Code",
    features: [
      "Custom Websites & Web Applications",
      "React, Next.js & Modern Frameworks",
      "Full-Stack Development",
      "E-Commerce & Business Portals",
      "Performance & Conversion Optimization"
    ]
  },
  {
    title: "AI, Automation & Intelligent Systems",
    description: "Automation and AI solutions that reduce manual work and improve efficiency.",
    iconName: "Brain",
    features: [
      "AI Chatbots & Voice Assistants",
      "Workflow & Process Automation",
      "Data-Driven Decision Systems",
      "Intelligent Reporting & Insights"
    ]
  },
  {
    title: "Data Analytics & Business Intelligence",
    description: "Turn raw data into actionable insights.",
    iconName: "BarChart3",
    features: [
      "Data Analysis & Visualization",
      "Power BI Dashboards & Reporting",
      "Excel-Based Automation Solutions",
      "Performance & Growth Metrics"
    ]
  },
  {
    title: "POS, Digital Invoicing & ERP Systems",
    description: "Streamlined operations with integrated business management solutions.",
    iconName: "ShoppingCart",
    features: [
      "Point of Sale (POS) Systems",
      "Digital Invoicing & Billing",
      "ERP System Implementation",
      "Inventory & Stock Management"
    ]
  },
  {
    title: "Finance, Accounting & Business Support",
    description: "Operational services to support smarter business management.",
    iconName: "Calculator",
    features: [
      "Bookkeeping & Accounting Support",
      "Auditing & Financial Reporting",
      "Process Optimization",
      "Business Documentation & Compliance Support"
    ]
  },
  {
    title: "Digital Media & Brand Support",
    description: "Creative services that strengthen digital presence.",
    iconName: "Video",
    features: [
      "Video Editing & Motion Graphics",
      "Marketing Media Assets",
      "Brand-Aligned Visual Content"
    ]
  }
];
