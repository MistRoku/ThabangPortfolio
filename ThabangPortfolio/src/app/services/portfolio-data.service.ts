import { Injectable } from '@angular/core';

export interface Project {
  // Existing fields (for card display)
  title: string;
  techStack: string;            // short string for card
  description: string;          // short description for card
  imageUrl?: string;
  demoLink?: string;
  githubLink?: string;
  highlight: string;

  // New fields for detail modal
  fullDescription: string;
  techStackDetails: string[];
  keyFunctions: string[];
  userGuideSummary: string;
  screenshots?: string[];       // optional, for future image galleries
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
  details: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  getPersonalInfo() {
    return {
      name: 'Thabang Mokgonyana',
      title: 'Full Stack Developer/Junior IT Engineer',
      summary: 'IT and operations engineer actively transitioning int a dedicated full-stack software engineering role. Earned a 94% Distinction (Highest in Cohort) leading the end-to-endbuild of a library management system. Aidied in the building and development of production PHP/Laravel and Vue.js POS system and multi-tenant SaaS dashboard.',
      email: 'thabangmokgonyana@gmail.com',
      phone: '+27 79 490 6530',
      location: 'Johannesburg, South Africa',
    };
  }

  getProjects(): Project[] {
    return [
      {
        title: 'AdminForge - Multi-Tenant SaaS Dashboard',
        techStack: 'Laravel 11, Angular 21, MySQL, Stripe, Docker',
        description: 'Multi-tenant SaaS platform with Angular 21 frontend (RxJS dashboards, RBAC) and Laravel 11 backend. Integrated Stripe, 95% test coverage.',
        githubLink: 'https://github.com/MistRoku/management-console',
        highlight: '95% test coverage | Stripe subscriptions',
        fullDescription: 'AdminForge is a complete production‑ready SaaS dashboard that I architected to demonstrate full‑stack multi‑tenancy. It supports user roles (super admin, tenant admin, regular user), subscription billing, real‑time analytics, and a fully responsive admin panel. The frontend uses Angular 17 with lazy loading, HTTP interceptors, and RxJS for state management. The backend is Laravel 11 with Eloquent ORM, Sanctum token authentication, and a multi‑tenant middleware that isolates data per tenant. Payments are handled via Stripe (payment intents, webhooks, customer portal). The entire application runs in Docker containers and is deployed to Laravel Forge with zero‑downtime releases.',
        techStackDetails: [
          'Angular 17 – standalone components, lazy‑loaded modules, RxJS, HTTP interceptors, RBAC guards',
          'Laravel 11 – REST API, Eloquent ORM, Sanctum (token‑based auth), multi‑tenant middleware',
          'MySQL – relational database with tenant‑scoped foreign keys, migrations, indexes',
          'Stripe – payment intents, subscription webhooks, customer billing portal',
          'Docker – multi‑stage builds for development and production environments',
          'Laravel Forge – zero‑downtime deployments, server management, SSL'
        ],
        keyFunctions: [
          'Multi‑tenant isolation: each tenant sees only their own data, configurable settings',
          'Role‑based access control (RBAC): super admin, tenant admin, regular member',
          'Subscription plans (monthly/yearly) with automated invoicing and retries',
          'Real‑time usage dashboard with charts (Chart.js) and metrics',
          'Team management: invite members, assign roles, set custom permissions',
          'Billing portal for tenants to update payment methods and download invoices'
        ],
        userGuideSummary: 'After registration, tenant admins can invite team members, assign roles, and monitor usage from the dashboard. Super admins have access to all tenants for support and can view global analytics. For a full walkthrough, check the video demo on the GitHub repository or contact me for a live session.'
      },
      {
        title: 'Helpdesk Ticketing System - Cloud Deployed',
        techStack: 'ASP.NET Core 10, React 19, SignalR, Azure, Docker',
        description: 'Real‑time ticketing app with SignalR notifications, JWT auth, RBAC. Containerized and deployed to Azure via GitHub Actions.',
        githubLink: 'https://github.com/MistRoku/HelpdeskApp',
        highlight: 'Real‑time SignalR | Azure deployment | 85% test coverage',
        fullDescription: 'The Helpdesk Ticketing System is a full‑stack application for managing support tickets in real time. It features a ASP.NET Core 9 REST API with JWT authentication, Dapper ORM for fast database access, and SignalR for live notifications. The frontend is built with React 18 (TypeScript) and includes dashboard analytics, ticket management, and a responsive UI. The entire application is containerized with Docker and deployed to Azure App Service + Azure SQL Database via a GitHub Actions CI/CD pipeline. All sensitive secrets are managed with Azure Key Vault.',
        techStackDetails: [
          'ASP.NET Core 10 – REST API, JWT bearer authentication, middleware, dependency injection',
          'SignalR – real‑time WebSocket notifications for ticket updates and chat',
          'Dapper – micro‑ORM for high‑performance SQL queries',
          'React 19 (TypeScript) – functional components, hooks, context API for auth state',
          'Azure App Service – hosting for backend and frontend',
          'Azure SQL Database – managed cloud database with geo‑redundancy',
          'Docker – containers for consistent environments',
          'GitHub Actions – CI/CD pipeline with automated tests and deployment'
        ],
        keyFunctions: [
          'User authentication and role‑based access (admin, agent, customer)',
          'Ticket creation, assignment, status tracking (open, in progress, resolved, closed)',
          'Real‑time notifications when ticket is updated or assigned',
          'Dashboard with charts: ticket volume, resolution time, agent performance',
          'File attachments support (Azure Blob Storage integration)',
          'Search and filter tickets by status, priority, date range'
        ],
        userGuideSummary: 'Customers can submit tickets via the public form and receive email notifications. Agents log in to a dedicated queue view, assign tickets to themselves, and communicate with customers via the built‑in chat. Admins have full control over user roles and system settings. See the GitHub wiki for detailed screenshots and a demo video.'
      },
      {
        title: 'RCPOS & RCPOS Lite - Restaurant POS',
        techStack: 'PHP, Laravel, JavaScript, MySQL, LocalStorage API',
        description: 'Production restaurant POS and offline‑capable browser version deployed to live clients. QA test cases and on‑site training.',
        imageUrl: '/RCPOS_Logo.png',
        highlight: 'Offline sync | Live client deployment | 100+ daily orders',
        fullDescription: 'RCPOS is a complete point‑of‑sale system built for restaurants. Its development started prior to my internship at Reliance Corporation. I owrked on it form the start even into my Junior IT role and haves deployed to multiple live clients. The system includes order management, inventory tracking, and sales reporting. RCPOS Lite is a progressive web app that works offline using the LocalStorage API; it syncs with the central database when connectivity resumes. I also authored QA test cases, performed UAT, and led on‑site staff training sessions.',
        techStackDetails: [
          'PHP 8.3 / Laravel 12 – MVC architecture, Eloquent ORM, Blade templates, queues',
          'JavaScript (ES6) – dynamic UI updates, offline detection, sync logic',
          'MySQL – relational database for products, orders, customers',
          'LocalStorage API – offline data persistence for RCPOS Lite',
          'Bootstrap 5 – responsive interface for tablet and desktop',
          'Laravel Sanctum – API token authentication for mobile/offline sync'
        ],
        keyFunctions: [
          'Order management: add/edit items, apply discounts, split bills',
          'Inventory tracking: auto‑deduct stock, low‑stock alerts',
          'Sales reports: daily, weekly, monthly revenue, top‑selling items',
          'Offline mode (RCPOS Lite): continue taking orders without internet; sync when back online',
          'Staff management: multiple roles (cashier, manager, admin) with permissions',
          'Integration with kitchen display system (KDS) for order printing'
        ],
        userGuideSummary: 'Cashiers log in and can start a new order by scanning barcodes or selecting items from categories. Payments can be cash, card, or split. Managers can access reports, adjust inventory, and manage staff. RCPOS Lite works on any modern browser; when offline, orders are saved locally and automatically synced once the connection returns. A full user manual is included in the GitHub repository.'
      },
      {
        title: 'Light of Literacy (94% Distinction)',
        techStack: 'Kotlin, Node.js, MySQL, Firebase, Azure DevOps',
        description: 'Led 3‑person Agile team. Library platform for 100+ concurrent users with offline sync. 85% code coverage, full documentation.',
        imageUrl: 'lol.png',
        demoLink: 'https://lightofliteracy.netlify.app/',   // no demo link
        githubLink: 'https://github.com/MistRoku/light-of-literacy',
        highlight: 'Highest cohort score | Azure Pipelines | 100+ users',
        fullDescription: 'Light of Literacy is a digital library management system that I led as project manager and full‑stack developer during my academic capstone. The project earned a 94% distinction, the highest in the cohort. The Android app (Kotlin) allows users to browse books, check availability, place holds, and read offline – powered by Firebase Realtime Database for sync. The backend is a Node.js/Express REST API with MySQL for structured data. We used Azure DevOps for Agile planning (5 sprints), Git repos, and CI/CD pipelines. I authored full system design documents: ERDs, UML diagrams, high‑level and low‑level architecture. We achieved 85% code coverage with JUnit and Postman tests.',
        techStackDetails: [
          'Kotlin – Android native app with MVVM pattern, ViewModel, LiveData',
          'Node.js / Express – REST API, middleware, JWT authentication',
          'MySQL – relational database for books, users, loans, categories',
          'Firebase Realtime Database – offline sync, real‑time updates for holds/returns',
          'Azure DevOps – Boards (Agile sprints), Repos (Git), Pipelines (CI/CD)',
          'JUnit & Postman – unit tests and integration tests, 85% coverage'
        ],
        keyFunctions: [
          'User registration and login (Android app + web admin panel)',
          'Search books by title, author, category, ISBN',
          'Check availability, place holds, and receive real‑time notifications',
          'Offline reading: download books for offline access, sync progress when online',
          'Admin dashboard: add/edit books, manage users, view loan reports',
          'Automated email reminders for overdue books (Node.js + Nodemailer)'
        ],
        userGuideSummary: 'Users install the Android app, create an account, and can immediately search for books. To borrow, they place a hold; librarians approve the hold from the admin panel. The book is marked as checked out and the user receives a notification. Offline mode downloads selected books to the device. Librarians use the web dashboard to manage inventory and generate reports. A full user guide and developer documentation are available in the repository under `/docs`.'
      }
    ];
  }

  getWorkExperience(): WorkExperience[] {
    return [
      {
        company: 'Reliance Corporation',
        role: 'Junior IT Engineer (Operations & Software Coordination)',
        period: 'Feb 2026 - Present',
        location: 'Alberton, South Africa',
        achievements: [
          'Selected to join software development team; write BRDs, review builds, track sprints.',
          'Conduct QA regression & UAT testing across retail systems, reducing post-deployment incidents.',
          'Maintain Windows/Linux servers, network infrastructure (cabling, IP cameras), Tier 1/2 support.'
        ]
      },
      {
        company: 'Reliance Corporation',
        role: 'IT Software & Hardware Support Intern',
        period: 'Aug 2025 - Jan 2026',
        location: 'Alberton, South Africa',
        achievements: [
          'Developed & deployed RCPOS/POS Lite (PHP/Laravel) to live clients.',
          'Worked on office relocation network rebuild (RJ45 crimping, switch patching, server rack).',
          'Managed full IT asset registry and provided helpdesk support.'
        ]
      },

      {
        company: 'Cogent Creations / Rosebank College WIL',
        role: 'Project Manager & Full-Stack Developer (Capstone)',
        period: 'Jan 2024 - Dec 2024',
        location: 'Braamfontein, Gauteng',
        achievements: [
          'Managed 3-person Agile team; delivered Light of Literacy earning 94% Distinction (highest cohort).',
          'Built end-to-end: Kotlin Android, Node.js/Express, MySQL + Firebase, Azure DevOps.',
          'Authored ERDs, UML, architectural docs and 18-case test plan.'
        ]
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        degree: 'Diploma in IT Software Development | NQF Level 6',
        institution: 'Rosebank College, Braamfontein',
        year: 'Graduated Dec 2024',
        details: 'Distinctions in 9 modules - highest cohort score in Work Intergrated Learning(92%), alongside Web Development (82%), Human Computer Interaction (91%), Advanced Databases (76%), Software Quality & Testing (77%), Applied Programming(70%).'
      },
      {
        degree: 'National Senior Certificate (Higher Certificate & Diploma Pass)',
        institution: 'Horizon International High School, Turflontein',
        year: 'Graduated Dec 2020',
        details: 'University entrance exemption.'
      }
    ];
  }

  getskills(): SkillGroup[] {
    return [
      {
        category: 'Languages',
        items: ['JavaScript/TS', 'PHP 8.4', 'C#', 'Kotlin', 'Java', 'SQL']
      },

      {
        category: 'Frontend',
        items: ['Angular 21', 'React 19', 'RxJS', 'Tailwind CSS', 'HTML5/CSS3']
      },

      {
        category: 'Backend',
        items: ['ASP.NET Core 10', 'Laravel 13', 'Node.js/Express', 'Java Spring 7', 'Maven 3', 'REST APIs']
      },

      {
        category: 'Cloud & DevOps',
        items: ['Microsoft Azure', 'Docker', 'GitHub Actions', 'Azure Pipelines', 'Laravel Forge', 'MongoDB']
      },
      {
        category: 'Testing & QA',
        items: ['JUnit', 'Postman', 'UAT', 'Regression', '85-95% coverage']
      }
    ];
  }

  getCertifications(): string[] {
    return [
      'SkillUp Full Stack Development — Certificate of Completion',
      'SkillUp Cloud Computing Fundamentals — Certification'
    ];
  }
}
