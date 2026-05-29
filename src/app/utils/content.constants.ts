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
  github: 'https://github.com/goingmyway243',
  linkedin: 'https://www.linkedin.com/in/light39',
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
    description: 'Experience with AWS, Docker, and cloud-based deployments',
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
    title: 'GoingMy Social Network',
    shortDescription:
      'Modern microservices social network with real-time chat, notifications, full-text search, and glassmorphic UI.',
    longDescription: `A full-stack social platform designed with clean architecture and event-driven communication. Key capabilities include:
      - User profiles, followers, posts, likes, and comments
      - Real-time private chat and in-app notifications via SignalR
      - Media upload with validation and saga-based orchestration
      - Full-text search, suggestions, and trending posts with Elasticsearch
      - API Gateway (YARP), JWT auth at the edge, and rate limiting`,
    image: '/images/projects/GoingMySocial-Icon.png',
    technologies: [
      '.NET 10',
      'ASP.NET Core',
      'Angular 20',
      'SignalR',
      'RabbitMQ',
      'MassTransit',
      'PostgreSQL',
      'MongoDB',
      'Elasticsearch',
      'YARP',
      'OpenIddict',
      'Docker',
      '.NET Aspire',
      'PrimeNG',
    ],
    github: 'https://github.com/goingmyway243/goingmysocialnetwork',
    liveDemo: '',
    architecture: [
      { layer: 'Frontend', color: 'blue', items: ['Angular 20 SPA', 'PrimeNG', 'SignalR Client'] },
      { layer: 'API Gateway', color: 'violet', items: ['YARP Reverse Proxy', 'JWT Validation', 'Rate Limiting'] },
      { layer: 'Microservices', color: 'pink', items: ['Auth :5001', 'UserProfile :5002', 'Posts :5003', 'Chat :5004', 'Notification :5005', 'Upload :5006', 'Search :5007'] },
      { layer: 'Event Bus', color: 'orange', items: ['RabbitMQ', 'MassTransit'] },
      { layer: 'Data', color: 'teal', items: ['PostgreSQL', 'MongoDB', 'Elasticsearch'] },
      { layer: 'Infra', color: 'gray', items: ['Docker Compose', '.NET Aspire', 'OpenTelemetry', 'GitHub Actions'] },
    ],
    highlights: [
      'Microservices architecture with API Gateway (YARP) and event-driven communication',
      'Real-time messaging and notifications using SignalR hubs',
      'Search and discovery powered by Elasticsearch',
      'Dual dark/light UI with glassmorphism design system',
      'Containerized local orchestration with .NET Aspire and Docker Compose',
    ],
    screenshots: [
      { src: '/images/projects/login-page.png', label: 'Login Page' },
      { src: '/images/projects/dark-mode-home.png', label: 'Dark Mode Home' },
      { src: '/images/projects/dark-mode-discover-page.png', label: 'Dark Mode Discover' },
      { src: '/images/projects/dark-mode-message.png', label: 'Dark Mode Messages' },
      { src: '/images/projects/dark-mode-conversation.png', label: 'Dark Mode Conversation' },
      { src: '/images/projects/dark-mode-notifications-page.png', label: 'Dark Mode Notifications' },
      { src: '/images/projects/dark-mode-profile.png', label: 'Dark Mode Profile' },
      { src: '/images/projects/dark-mode-compose-post.png', label: 'Dark Mode Compose Post' },
      { src: '/images/projects/dark-mode-admin-page.png', label: 'Admin Dashboard' },
      { src: '/images/projects/dark-mode-admin-users.png', label: 'Admin Users' },
      { src: '/images/projects/dark-mode-user-detail-dialog.png', label: 'User Detail Dialog' },
      { src: '/images/projects/light-mode-dashboard.png', label: 'Light Mode Dashboard' },
      { src: '/images/projects/light-mode-discover.png', label: 'Light Mode Discover' },
      { src: '/images/projects/light-mode-notifications.png', label: 'Light Mode Notifications' },
      { src: '/images/projects/GoingMySocial-Icon.png', label: 'Project Icon' },
    ],
    infrastructure: {
      backend: 'Microservices on .NET 10 + ASP.NET Core',
      frontend: 'Angular 20 SPA with PrimeNG + Angular Material',
      gateway: 'YARP reverse proxy with JWT validation and rate limiting',
      data: 'PostgreSQL, MongoDB, Elasticsearch',
      messaging: 'RabbitMQ + MassTransit',
      infra: 'Docker Compose + .NET Aspire + OpenTelemetry + GitHub Actions',
    },
  },
];

export const TIMELINE = [
  {
    year: 'Jun 2022 - Sep 2022',
    title: 'Software Engineer Intern | Orient Software Development Corp.',
    description:
      'Contributed to OPAL2.0 (online learning platform for Singapore) by resolving minor bugs, supporting development and testing, and gaining hands-on Agile/Scrum experience through sprint ceremonies and internal technical training.',
  },
  {
    year: 'Sep 2022 - Jul 2023',
    title: 'Associate Software Engineer (Contract) | Orient Software Development Corp.',
    description:
      'Continued on OPAL2.0 with a stronger engineering scope: fixed defects, delivered enhancements, supported new feature development, and expanded core full-stack skills across the existing microservices ecosystem.',
  },
  {
    year: 'Jul 2023 - Present',
    title: 'Software Engineer 2 (Full-time) | Orient Software Development Corp.',
    description:
      'Full-stack developer on OPAL2.0 in Ho Chi Minh City (on-site), owning microservices feature delivery and reliability. Led major upgrades (.NET 3.5/6/8, Angular 14->18, Xamarin->MAUI), migrated Kendo UI to PrimeNG, optimized inter-service long-running flows, reduced web build time from 26 to under 20 minutes, strengthened security with non-root Docker containers, refresh tokens, idle timeout handling, and mobile certificate pinning, and performed code reviews to improve maintainability.',
  },
];

export const CONTACT_INFO = {
  email: 'nguyenhaidang240800@gmail.com',
  phone: '+84 961 362 843',
  location: 'Ho Chi Minh City, Vietnam',
  availability: 'Available for freelance and full-time positions',
  responseTime: 'Usually responds within 24 hours',
};
