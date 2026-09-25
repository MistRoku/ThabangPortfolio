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
      summary: 'IT and operations engineer actively transitioning into a dedicated full-stack software engineering role. Earned a 94 percent Distinction (highest in cohort) leading the end to end build of a library management system. Helped build and develop a production PHP/Laravel POS system and multi-tenant retail platform.',
      email: 'thabangmokgonyana@gmail.com',
      phone: '+27 79 490 6530',
      location: 'Johannesburg, South Africa',
    };
  }

  getProjects(): Project[] {
    return [
      {
        title: 'Crown and Clipper Barber Co. - Booking Platform',
        techStack: 'React 18, TypeScript, Vite, C#, ASP.NET Core 8, EF Core, SQLite, Docker',
        description: 'Full-stack barbershop booking platform: 4-step wizard with live availability, double-booking prevention, stylist qualification enforcement, automated reminders and Google/Apple/Outlook calendar integration. Containerised and deployed end to end.',
        imageUrl: 'crown-and-clipper.png',
        demoLink: 'https://crowns-and-clippers.netlify.app/',
        githubLink: 'https://github.com/MistRoku/crowns_and_clipperd',
        highlight: 'Live availability engine | Notification outbox with idempotency | Docker + CI from GitHub',
        fullDescription: 'Crown and Clipper is a complete booking platform for a premium barbershop, built as a production-style full-stack assessment. The React 18 and TypeScript frontend provides a 4-step booking wizard: service selection, qualified barber picking, live date and time availability on a 30-minute grid, and validated customer details. The ASP.NET Core 8 API enforces opening hours, a 1-hour lead time, double-booking prevention and stylist qualification rules server-side, so a braiding service can only book with the braiding specialist. A notification outbox with a background scheduler sends confirmations, cancellations and 24-hour and 2-hour reminders through a pluggable email transport, idempotent by dedupe key and tenant-timezone aware. The platform is multi-tenant with JWT authentication and three roles per tenant (Customer, Stylist, Admin), each with dedicated dashboards. Every confirmation offers Google Calendar, Apple Calendar (.ics) and Outlook downloads generated from the actual booking, correctly handling timezone transitions. The API is hardened with security headers, CSP, input sanitising, a request body cap, PII-safe booking lookup and 429 rate limiting, covered by a 44-check automated smoke test. The frontend deploys to Netlify and the containerised API to Render, both rebuilding automatically on every GitHub push.',
        techStackDetails: [
          'React 18 / TypeScript / Vite: SPA with React Router, Luxon date handling, custom design system',
          'ASP.NET Core 8 Web API: controllers, DTOs, EF Core with query-filter data isolation',
          'EF Core / SQLite: relational schema, conflict-safe booking writes, seeded catalogue',
          'Multi-tenancy: tenant resolved by subdomain or shop switcher, JWT auth with three roles per tenant',
          'Notification outbox: background scheduler, pluggable SMTP transport, idempotent by dedupe key',
          'Docker: containerised API on Render, GitHub push-to-deploy on both platforms'
        ],
        keyFunctions: [
          '4-step booking wizard with live availability on a 30-minute grid',
          'Conflict-safe booking engine: 1-hour lead time, opening hours, double-booking prevention',
          'Stylist qualification enforcement across wizard, availability engine and booking API',
          'Automated confirmations, cancellations and 24-hour / 2-hour reminders via outbox pattern',
          'Customer, stylist and admin dashboards with role-scoped data',
          'Google Calendar, Apple Calendar (.ics) and Outlook integration per booking',
          'Multi-tenant: multiple barbershops on one deployment with isolated data'
        ],
        userGuideSummary: 'Visit the live site, browse the service menu, and complete a booking in under a minute. Try a braiding service and notice it only offers the braiding specialist. Look up the booking afterwards with your reference and email. The full assessment documentation, security model and setup guides are in the repository docs folder.'
      },
      {
        title: 'BranchOps - Multi-Branch Retail Operations Platform',
        techStack: 'Laravel 11, PHP 8.3, Blade, Alpine.js, Tailwind, MySQL, Docker',
        description: 'Full-stack retail operations: POS terminal, cash drawer, refunds, branch transfers, stock takes, and a Sanctum-secured REST API. Concurrency-safe inventory with row locking and an append-only movement ledger.',
        imageUrl: 'branchops-pos.png',
        githubLink: 'https://github.com/MistRoku/Branch-ops',
        highlight: 'Row-locked inventory ledger | POS + API v1 | Docker + CI',
        fullDescription: 'BranchOps is a multi-branch retail operations platform I built to solve the hard part of inventory systems: concurrency-safe stock accounting. Every stock change flows through a single service layer that locks the stock row for update, enforces a unique index on (product, branch), guards against negative stock, and writes an append-only movement ledger, so every quantity can be reconstructed and audited. The front office includes a POS terminal, cash drawer with movements, refunds, coupons, quotes, waste logs, and goods-received notes. A Sanctum-token API v1 layer exposes the same domain to external clients, and security is enforced through role middleware, policies, login lockout, and a dedicated SecurityTest suite covering authorization and branch scoping. It deploys as a single Docker image with nginx, PHP-FPM, queue worker, and scheduler under supervisord, gated by a GitHub Actions pipeline.',
        techStackDetails: [
          'Laravel 11 / PHP 8.3 and above: service layer, Form Requests, policies, events and queued listeners',
          'MySQL: transactions, lockForUpdate row locking, unique constraints, migrations',
          'Blade + Alpine.js + Tailwind: POS terminal, admin UI, component library',
          'Laravel Sanctum: token authentication for the API v1 surface',
          'PHPUnit: feature and service tests including security and regression suites',
          'Docker + nginx + supervisord: single-image deployment, GitHub Actions CI'
        ],
        keyFunctions: [
          'POS checkout with atomic stock reduction, cash drawer tracking, and receipts',
          'Branch transfers with two-phase approve/receive flow and full movement audit trail',
          'Inventory adjustments with row locking, negative-stock guards, and low-stock alerts',
          'Role-based access: branch scoping, cost-price visibility gates, login lockout',
          'Purchase orders, GRVs, stock takes, refunds, quotes with proforma output',
          'REST API v1 for sales, inventory, products, suppliers, customers, and search'
        ],
        userGuideSummary: 'Run with Docker (docker compose up) or the setup script. The demo seeder provisions branches, products, and users per role. Log in as admin to manage branches and users, as manager to run transfers and stock takes, or open the POS terminal as cashier to complete a sale and watch the movement ledger update. Full setup instructions are in the repository README.'
      },
      {
        title: 'AssetArray - Inventory Management API',
        techStack: 'Laravel 13, PHP 8.3, Sanctum, MySQL, Scribe, GitHub Actions',
        description: 'API-first multi-branch inventory backend: token auth, service layer, transactional transfers with state machines, automated OpenAPI docs, and a security test suite.',
        githubLink: 'https://github.com/MistRoku/assetarray-api',
        highlight: 'Two-phase transfer state machine | Auto-generated API docs | CI-gated',
        fullDescription: 'AssetArray is the API-first backend of my retail portfolio and the project where my architecture matured most. Dedicated Form Requests define each input contract with authorization, API Resources decouple the schema from what consumers receive (hiding cost prices from roles that should not see them), and a service layer holds the transactional business logic. Transfers follow a two-phase state machine where approve deducts the source branch and receive credits the destination, so in-transit stock is never double-counted. Stock movements are append-only and row-locked, queued jobs handle CSV imports and low-stock alerts, and Scribe generates live OpenAPI and Postman documentation from the codebase. A SecurityTest suite verifies the authorization contract on web and API, and CI gates every push.',
        techStackDetails: [
          'Laravel 13 / PHP 8.3 and above: Form Requests, API Resources, service layer, policies',
          'MySQL: lockForUpdate, unique constraints, append-only movement ledger',
          'Laravel Sanctum: token-based API authentication',
          'Scribe: automated OpenAPI docs, Postman collection, docs appendix workflow',
          'Queues: CSV import jobs, low-stock alert listeners',
          'PHPUnit + GitHub Actions: feature tests, security tests, lint and static analysis'
        ],
        keyFunctions: [
          'Multi-branch stock levels with locked adjustments and full audit history',
          'Two-phase transfers (request, approve, receive, reject) with state guards',
          'Purchase orders and receiving with stock integration',
          'Role-scoped API: cost prices and sensitive fields filtered per role',
          'CSV product import via queued jobs with validation reporting',
          'Self-documenting API: Scribe-generated docs served at /docs'
        ],
        userGuideSummary: 'Clone the repo, copy .env.example, run migrations and seeders, then visit /docs for the full interactive API reference with example requests. Create an API token via the auth endpoints and explore transfers, stock movements, and purchase orders. Setup and architecture notes are in the README.'
      },
      {
        title: 'RetailPulse - Retail Dashboard UI (Architecture Demo)',
        techStack: 'Laravel 12, Blade, Alpine.js, Tailwind CSS, Vite',
        description: 'Frontend architecture demo of a retail dashboard: Blade component library, modular Alpine.js per feature, a mock data provider, and a route-level test sweep with CI. No database. UI and design system focus.',
        githubLink: 'https://github.com/MistRoku/retailpulse-dashboard-ui',
        highlight: 'Blade component library | Modular Alpine.js | CI-gated route tests',
        fullDescription: 'RetailPulse is a deliberate frontend-architecture exploration. It covers the same retail domain as my backend projects, rebuilt as a UI layer with no database, no API, and no authentication, presented as an honest demo of how I structure Blade and Alpine.js. Views are composed from a small Blade component library (navbar, responsive sidebar with desktop and mobile variants, stat cards, modals, empty states), behavior lives in feature-scoped JavaScript modules rather than inline scripts, and a single mock data provider feeds every view so the data layer can later be swapped for a real API without touching the components. A data-provider route test sweeps all pages asserting correct rendering, running in GitHub Actions on every push.',
        techStackDetails: [
          'Laravel 12: lightweight controllers, Blade views, named routes',
          'Blade components: reusable UI kit with slots and props',
          'Alpine.js / modular JS: feature-scoped behavior modules, thin entry point',
          'Tailwind CSS: design tokens and utility-first styling',
          'PHPUnit: route and heading data-provider tests, GitHub Actions CI'
        ],
        keyFunctions: [
          'Dashboard with KPI stat cards and responsive grid',
          'POS terminal interface and product catalog views',
          'Reports and settings screens with form components',
          'Staff management UI with role indicators',
          'Responsive navigation: desktop sidebar and mobile overlay',
          'Swap-ready data layer: mock provider isolated behind one class'
        ],
        userGuideSummary: 'Standard Laravel setup: install dependencies, serve with Vite, and browse the dashboard, POS, products, reports, settings, and staff pages. The README states upfront that this is a frontend architecture demo with mock data. The intended next step is wiring these components to the AssetArray API.'
      },
      {
        title: 'Helpdesk Ticketing System - Cloud Deployed',
        techStack: 'ASP.NET Core 10, React 19, SignalR, Azure, Docker',
        description: 'Real-time ticketing app with SignalR notifications, JWT auth, RBAC. Containerized and deployed to Azure through GitHub Actions.',
        githubLink: 'https://github.com/MistRoku/HelpdeskApp',
        highlight: 'Real-time SignalR | Azure deployment | 85 percent test coverage',
        fullDescription: 'The Helpdesk Ticketing System is a full-stack application for managing support tickets in real time. It provides an ASP.NET Core 10 REST API with JWT authentication, Dapper for fast database access, and SignalR for live notifications. The frontend is built with React 19 and TypeScript and includes dashboard analytics, ticket management, and a responsive UI. The full application is containerized with Docker and deployed to Azure App Service with Azure SQL Database through a GitHub Actions CI/CD pipeline. Sensitive secrets are managed with Azure Key Vault.',
        techStackDetails: [
          'ASP.NET Core 10: REST API, JWT bearer authentication, middleware, dependency injection',
          'SignalR: real-time WebSocket notifications for ticket updates and chat',
          'Dapper: micro-ORM for high-performance SQL queries',
          'React 19 (TypeScript): functional components, hooks, context API for auth state',
          'Azure App Service: hosting for backend and frontend',
          'Azure SQL Database: managed cloud database with geo-redundancy',
          'Docker: containers for consistent environments',
          'GitHub Actions: CI/CD pipeline with automated tests and deployment'
        ],
        keyFunctions: [
          'User authentication and role-based access (admin, agent, customer)',
          'Ticket creation, assignment, status tracking (open, in progress, resolved, closed)',
          'Real-time notifications when a ticket is updated or assigned',
          'Dashboard with charts: ticket volume, resolution time, agent performance',
          'File attachments support (Azure Blob Storage integration)',
          'Search and filter tickets by status, priority, and date range'
        ],
        userGuideSummary: 'Customers can submit tickets through the public form and receive email notifications. Agents log in to a dedicated queue view, assign tickets to themselves, and communicate with customers through the built-in chat. Admins have full control over user roles and system settings. See the GitHub wiki for detailed screenshots and a demo video.'
      },
      {
        title: 'RCPOS and RCPOS Lite - Restaurant POS',
        techStack: 'PHP, Laravel, JavaScript, MySQL, LocalStorage API',
        description: 'Production restaurant POS and offline-capable browser version deployed to live clients. Includes QA test cases and on-site training.',
        imageUrl: '/RCPOS_Logo.png',
        highlight: 'Offline sync | Live client deployment | 100 plus daily orders',
        fullDescription: 'RCPOS is a complete point-of-sale system built for restaurants. Development started before my internship at Reliance Corporation, and I worked on it from the start into my Junior IT role, with deployments to multiple live clients. The system includes order management, inventory tracking, and sales reporting. RCPOS Lite is a progressive web app that works offline using the LocalStorage API and syncs with the central database when connectivity resumes. I also authored QA test cases, performed UAT, and led on-site staff training sessions.',
        techStackDetails: [
          'PHP 8.3 / Laravel 12: MVC architecture, Eloquent ORM, Blade templates, queues',
          'JavaScript (ES6): dynamic UI updates, offline detection, sync logic',
          'MySQL: relational database for products, orders, customers',
          'LocalStorage API: offline data persistence for RCPOS Lite',
          'Bootstrap 5: responsive interface for tablet and desktop',
          'Laravel Sanctum: API token authentication for mobile and offline sync'
        ],
        keyFunctions: [
          'Order management: add and edit items, apply discounts, split bills',
          'Inventory tracking: auto-deduct stock, low-stock alerts',
          'Sales reports: daily, weekly, monthly revenue, top-selling items',
          'Offline mode (RCPOS Lite): keep taking orders without internet, sync when back online',
          'Staff management: multiple roles (cashier, manager, admin) with permissions',
          'Integration with kitchen display system (KDS) for order printing'
        ],
        userGuideSummary: 'Cashiers log in and start a new order by scanning barcodes or selecting items from categories. Payments can be cash, card, or split. Managers can access reports, adjust inventory, and manage staff. RCPOS Lite works in any modern browser. When offline, orders are saved locally and synced automatically once the connection returns. A full user manual is included in the GitHub repository.'
      },
      {
        title: 'Light of Literacy (94 percent Distinction)',
        techStack: 'Kotlin, Node.js, MySQL, Firebase, Azure DevOps',
        description: 'Led 3-person Agile team. Library platform for 100 plus concurrent users with offline sync. 85 percent code coverage, full documentation.',
        imageUrl: 'lol.png',
        demoLink: 'https://lightofliteracy.netlify.app/',
        githubLink: 'https://github.com/MistRoku/light-of-literacy',
        highlight: 'Highest cohort score | Azure Pipelines | 100 plus users',
        fullDescription: 'Light of Literacy is a digital library management system that I led as project manager and full-stack developer during my academic capstone. The project earned a 94 percent distinction, the highest in the cohort. The Android app (Kotlin) lets users browse books, check availability, place holds, and read offline, powered by Firebase Realtime Database for sync. The backend is a Node.js and Express REST API with MySQL for structured data. We used Azure DevOps for Agile planning (5 sprints), Git repos, and CI/CD pipelines. I authored full system design documents: ERDs, UML diagrams, plus high-level and low-level architecture. We reached 85 percent code coverage with JUnit and Postman tests.',
        techStackDetails: [
          'Kotlin: Android native app with MVVM pattern, ViewModel, LiveData',
          'Node.js / Express: REST API, middleware, JWT authentication',
          'MySQL: relational database for books, users, loans, categories',
          'Firebase Realtime Database: offline sync, real-time updates for holds and returns',
          'Azure DevOps: Boards (Agile sprints), Repos (Git), Pipelines (CI/CD)',
          'JUnit and Postman: unit tests and integration tests, 85 percent coverage'
        ],
        keyFunctions: [
          'User registration and login (Android app plus web admin panel)',
          'Search books by title, author, category, ISBN',
          'Check availability, place holds, receive real-time notifications',
          'Offline reading: download books for offline access, sync progress when online',
          'Admin dashboard: add and edit books, manage users, view loan reports',
          'Automated email reminders for overdue books (Node.js plus Nodemailer)'
        ],
        userGuideSummary: 'Users install the Android app, create an account, and can immediately search for books. To borrow, they place a hold and librarians approve the hold from the admin panel. The book is marked as checked out and the user receives a notification. Offline mode downloads selected books to the device. Librarians use the web dashboard to manage inventory and generate reports. A full user guide and developer documentation are available in the repository under /docs.'
      }
    ];
  }

  getWorkExperience(): WorkExperience[] {
    return [
      {
        company: 'Reliance Corporation',
        role: 'Junior IT Engineer (Operations and Software Coordination)',
        period: 'Feb 2026 - Present',
        location: 'Alberton, South Africa',
        achievements: [
          'Selected to join software development team. Write BRDs, review builds, track sprints.',
          'Conduct QA regression and UAT testing across retail systems, reducing post-deployment incidents.',
          'Maintain Windows and Linux servers, network infrastructure (cabling, IP cameras), Tier 1/2 support.'
        ]
      },
      {
        company: 'Reliance Corporation',
        role: 'IT Software and Hardware Support Intern',
        period: 'Aug 2025 - Jan 2026',
        location: 'Alberton, South Africa',
        achievements: [
          'Developed and deployed RCPOS/POS Lite (PHP/Laravel) to live clients.',
          'Worked on office relocation network rebuild (RJ45 crimping, switch patching, server rack).',
          'Managed full IT asset registry and provided helpdesk support.'
        ]
      },

      {
        company: 'Cogent Creations / Rosebank College WIL',
        role: 'Project Manager and Full-Stack Developer (Capstone)',
        period: 'Jan 2024 - Dec 2024',
        location: 'Braamfontein, Gauteng',
        achievements: [
          'Managed 3-person Agile team. Delivered Light of Literacy earning 94 percent Distinction (highest cohort).',
          'Built end to end: Kotlin Android, Node.js/Express, MySQL plus Firebase, Azure DevOps.',
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
        details: 'Distinctions in 9 modules: highest cohort score in Work Integrated Learning (92 percent), plus Web Development (82 percent), Human Computer Interaction (91 percent), Advanced Databases (76 percent), Software Quality and Testing (77 percent), Applied Programming (70 percent).'
      },
      {
        degree: 'National Senior Certificate (Higher Certificate and Diploma Pass)',
        institution: 'Horizon International High School, Turffontein',
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
        category: 'Cloud and DevOps',
        items: ['Microsoft Azure', 'Docker', 'GitHub Actions', 'Azure Pipelines', 'Laravel Forge', 'MongoDB']
      },
      {
        category: 'Testing and QA',
        items: ['JUnit', 'Postman', 'UAT', 'Regression', '85-95 percent coverage']
      }
    ];
  }

  getCertifications(): string[] {
    return [
      'SkillUp Full Stack Development: Certificate of Completion',
      'SkillUp Cloud Computing Fundamentals: Certification'
    ];
  }
}
