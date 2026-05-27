import { Injectable } from '@angular/core';

export interface Project { 
  title: string;
  techStack: string;
  description: string;
  imageUrl?: string;
  demoLink?: string;
  githubLink?: string;
  highlight: string;
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
        techStack: 'Laravel 11, Angular 17, Node.js, MySQL, Docker',
        description: 'Architected multi-tenant SaaS with Angular 17 frontend (RxJS dashboards, RBAC) and Laravel 11 backend. Integrated Stripe, 95% test coverage, zero-downtime Docker deployment',
        imageUrl: '/assets/projects/adminforge.jpg',
        demoLink: '#',
        githubLink: 'https://github.com/MistRoku/management-console',
        highlight: '95% test coverage | Stripe subscriptions'
      },

      {
        title: 'Helpdesk Ticketing System',
        techStack: 'ASP.NET Core 9, React 18, SignalR, Azure, Docker',
        description: 'Real-time ticketing app with SignalR notifications, JWT auth, RBAC. Containerized, deployed to Azure via GitHub Actions CI/CD.',
        imageUrl: '/assets/projects/helpdesk.jpg',
        demoLink: '#',
        githubLink: 'https://github.com/MistRoku/HelpdeskApp',
        highlight: 'Real-time SignalR | Azure deployment'
      },

      {
        title: 'Light of Literacy',
        techStack: 'PHP, Laravel, Vue.js, MySQL',
        description: 'Led end-to-end development of a library management system, achieving 94% Distinction (Highest in Cohort). Implemented book catalog, user management, and borrowing features using Laravel and Vue.js.',
        imageUrl: '/assets/projects/lol.png',
        demoLink: 'https://lightofliteracy.netlify.app/',
        githubLink: 'https://github.com/MistRoku/LightOfLiteracy',
        highlight: '94% Distinction | Highest cohort score | Azure Pipelines'
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
        location: 'Braamfontein',
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
        details: 'Distinctions in 9 modules - highest cohort score in WIL 3B (94%). Key: Web Dev (82%), HCI (91%), Advanced Databases (76%).'
      },
      {
        degree: 'National Senior Certificate (Higher Certificate & Diploma Pass)',
        institution: 'Horizon International High School, Turflontein',
        year: 'Dec 2020',
        details: 'University entrance exemption.'
      }
    ];
  }

  getskills(): SkillGroup[] {
    return [
      {
        category: 'Languages',
        items: ['JavaScript/TS', 'PHP 8', 'C#', 'Kotlin', 'Java', 'SQL']
      },

      {
        category: 'Frontend',
        items: ['Angular 17', 'React 18', 'RxJS', 'Tailwind CSS', 'HTML5/CSS3']
      },

      {
        category: 'Backend',
        items: ['ASP.NET Core 9', 'Laravel 11', 'Node.js/Express', 'REST APIs']
      },

      {
        category: 'Cloud & DevOps',
        items: ['Microsoft Azure', 'Docker', 'GitHub Actions', 'Azure Pipelines', 'Laravel Forge']
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
