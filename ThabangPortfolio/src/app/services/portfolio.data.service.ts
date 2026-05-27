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
  catregory: string;
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
