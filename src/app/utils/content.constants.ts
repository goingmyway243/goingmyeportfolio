/**
 * Content Constants - Placeholder Data for E-Portfolio
 * Easy to update all content from one place
 */

export const PERSONAL_INFO = {
  name: 'Light - Nguyễn Hải Đăng',
  title: 'Full-Stack .NET + Angular Developer',
  tagline: 'Building modern, scalable web applications with clean architecture',
  yearsExperience: 4,
  email: 'nguyenhaidang240800@gmail.com',
  location: 'Ho Chi Minh City, Vietnam',
  profileImage: '/images/profile.jpg',
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/nguyenhaidang240800',
  linkedin: 'https://linkedin.com/in/nguyenhaidang240800',
  twitter: 'https://twitter.com/nguyenhaidang240800',
  email: 'mailto:nguyenhaidang240800@gmail.com',
};

export const ABOUT_SECTIONS = [
  {
    icon: '🎯',
    title: 'Full-Stack Developer',
    description: 'Experienced in building end-to-end applications with .NET backend and Angular frontend',
  },
  {
    icon: '⚡',
    title: 'Performance Focused',
    description: 'Optimizing applications for speed, scalability, and user experience',
  },
  {
    icon: '🏗️',
    title: 'Clean Architecture',
    description: 'Following SOLID principles and design patterns for maintainable code',
  },
  {
    icon: '🚀',
    title: 'Cloud Native',
    description: 'Experience with Azure, Docker, and cloud-based deployments',
  },
];

export const SKILLS = [
  {
    category: 'Backend',
    items: [
      { name: 'C#', level: 90 },
      { name: '.NET Core', level: 90 },
      { name: 'Entity Framework', level: 85 },
      { name: 'SQL Server', level: 85 },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'Angular', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'SCSS/CSS', level: 85 },
      { name: 'RxJS', level: 80 },
    ],
  },
  {
    category: 'DevOps & Infrastructure',
    items: [
      { name: 'Azure', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD Pipelines', level: 75 },
      { name: 'Kubernetes', level: 70 },
    ],
  },
  {
    category: 'Tools & Processes',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Microservices', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'Agile/Scrum', level: 85 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    shortDescription: 'Full-stack e-commerce platform with real-time inventory management',
    longDescription: `A comprehensive e-commerce solution built with .NET and Angular. Features include:
      - Product catalog with advanced filtering
      - Real-time inventory sync across multiple warehouses
      - Payment gateway integration (Stripe)
      - Admin dashboard for analytics and order management
      - Mobile-responsive design`,
    image: '/images/project-ecommerce.svg',
    technologies: ['C#', '.NET 8', 'Angular 18', 'SQL Server', 'Stripe', 'Azure'],
    github: 'https://github.com/yourusername/ecommerce-platform',
    liveDemo: 'https://example-ecommerce.com',
    infrastructure: {
      backend: 'Azure App Service (.NET 8 API)',
      frontend: 'Azure Static Web Apps (Angular SPA)',
      database: 'Azure SQL Database',
      services: 'Azure Service Bus, Azure Storage, Cognitive Services',
      cdn: 'Azure CDN',
    },
  },
  {
    id: 2,
    title: 'Real-Time Data Visualization Dashboard',
    shortDescription: 'Interactive dashboard for visualizing complex business metrics',
    longDescription: `A real-time analytics dashboard connecting to multiple data sources. Features:
      - Live data streaming with WebSockets
      - Interactive charts and graphs using D3.js
      - Custom KPI widgets
      - Real-time notifications
      - Role-based access control`,
    image: '/images/project-dashboard.svg',
    technologies: ['C#', '.NET Core', 'Angular', 'SignalR', 'D3.js', 'PostgreSQL'],
    github: 'https://github.com/yourusername/analytics-dashboard',
    liveDemo: 'https://example-dashboard.com',
    infrastructure: {
      backend: 'Docker containers on Kubernetes',
      frontend: 'Angular deployed to S3 with CloudFront',
      database: 'PostgreSQL on RDS',
      messaging: 'RabbitMQ for event streaming',
      monitoring: 'Prometheus, Grafana',
    },
  },
  {
    id: 3,
    title: 'Microservices Order Processing System',
    shortDescription: 'Scalable microservices architecture for order processing',
    longDescription: `Enterprise microservices platform handling order processing at scale. Includes:
      - Order service, Payment service, Inventory service
      - Event-driven architecture with message queues
      - API Gateway pattern
      - Service mesh with Istio
      - Distributed tracing and logging`,
    image: '/images/project-microservices.svg',
    technologies: ['C#', '.NET', 'Kubernetes', 'RabbitMQ', 'Docker', 'gRPC'],
    github: 'https://github.com/yourusername/microservices-orders',
    liveDemo: '',
    infrastructure: {
      backend: 'Kubernetes cluster (EKS)',
      deployment: 'GitOps with ArgoCD',
      messaging: 'RabbitMQ',
      database: 'Multiple PostgreSQL instances (per service)',
      observability: 'ELK Stack, Prometheus, Grafana',
    },
  },
];

export const TIMELINE = [
  {
    year: '2020',
    title: 'Started as Junior Developer',
    description: 'Began career with foundational knowledge in C# and Angular',
  },
  {
    year: '2021',
    title: 'Led First Major Project',
    description: 'Architected and developed e-commerce platform from scratch',
  },
  {
    year: '2022',
    title: 'Expanded to Full-Stack',
    description: 'Became proficient in both backend and frontend technologies',
  },
  {
    year: '2023',
    title: 'Cloud & DevOps Focus',
    description: 'Deep-dived into Azure, Docker, and microservices architecture',
  },
  {
    year: '2024',
    title: 'Technical Leadership',
    description: 'Led a team of 3 developers on enterprise projects',
  },
];

export const CONTACT_INFO = {
  email: 'nguyenhaidang240800@gmail.com',
  phone: '+84 961 362 843',
  location: 'Ho Chi Minh City, Vietnam',
  availability: 'Available for freelance and full-time positions',
  responseTime: 'Usually responds within 24 hours',
};
