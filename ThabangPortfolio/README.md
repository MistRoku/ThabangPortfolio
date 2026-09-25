# Thabang Mokgonyana - Full-Stack Developer Portfolio

A responsive portfolio website built with **Angular 21 (standalone components)**, **SCSS**, **Lucide icons**, and **EmailJS** for the contact form.
It presents Thabang's projects, work experience, skills, contact information, Terms of Service, and Privacy Policy in a plain, professional layout.

## Project structure

```text
ThabangPortfolio/
  src/
    app/
      components/  nav, footer
      pages/       home, projects, experience, skills, contact, terms, privacy
      shared/      project-card, directives
      services/    portfolio-data, email, core
      app.config.ts
      app.routes.ts
      app.component.html/ts/scss
    assets/
    enviroments/   environment files (EmailJS keys)
    styles.scss    global tokens and base styles
  angular.json
  package.json
```

## Features

- Fully responsive layout with mobile menu and fluid panels
- Lazy-loaded routes, so the first paint only downloads the shell and the home page
- Hash-based routing, so the production build runs on any static host
- Projects browser as a horizontal scroll strip with skeleton loaders and a detail modal per project
- Lucide icon set throughout, no emoji icons
- EmailJS contact form with a mailto fallback
- Centralised data service (`PortfolioDataService`) holding all CV content
- Terms of Service (`/terms`) and Privacy Policy (`/privacy`) pages linked from the footer
- Semantic HTML with ARIA labels and keyboard accessible cards and modal

## Design rules followed in this repo

- Flat solid colors only, single accent color, square corners everywhere
- No drop shadows, no glass or blur panels, no gradients
- No hover animations or pointer-linked motion
- No three-across feature card grids (projects use a sideways scroll strip)
- No checkmark lists, no pricing columns, no terminal windows, no bento grids
- IBM Plex Sans and IBM Plex Mono for type
- Plain numbered legal pages with square bullet lists

## Projects showcased

1. Crown and Clipper Barber Co. - Booking Platform (React 18, TypeScript, Vite, C#, ASP.NET Core 8, EF Core, SQLite, Docker). 4-step booking wizard, conflict-safe booking engine, notification outbox, multi-tenant dashboards. Live: https://crowns-and-clippers.netlify.app/ Repo: https://github.com/MistRoku/crowns_and_clipperd
2. BranchOps - Multi-Branch Retail Operations Platform (Laravel 11, PHP 8.3, Blade, Alpine.js, Tailwind, MySQL, Docker). POS terminal, cash drawer, refunds, branch transfers, stock takes, Sanctum-secured REST API, row-locked inventory ledger. Repo: https://github.com/MistRoku/Branch-ops
3. AssetArray - Inventory Management API (Laravel 13, PHP 8.3, Sanctum, MySQL, Scribe, GitHub Actions). API-first multi-branch backend with a two-phase transfer state machine and auto-generated OpenAPI docs. Repo: https://github.com/MistRoku/assetarray-api
4. RetailPulse - Retail Dashboard UI Architecture Demo (Laravel 12, Blade, Alpine.js, Tailwind CSS, Vite). Frontend component library with a mock data provider and route-level test sweep. Repo: https://github.com/MistRoku/retailpulse-dashboard-ui
5. Helpdesk Ticketing System - Cloud Deployed (ASP.NET Core 10, React 19, SignalR, Azure, Docker)
6. RCPOS and RCPOS Lite - Restaurant POS (PHP, Laravel, JavaScript, MySQL, LocalStorage API)
7. Light of Literacy, 94 percent Distinction (Kotlin, Node.js, MySQL, Firebase, Azure DevOps)

To edit project content, update `getProjects()` in `src/app/services/portfolio-data.service.ts`.
Each entry supports `title`, `techStack`, `description`, `imageUrl`, `demoLink`, `githubLink`, `highlight`, `fullDescription`, `techStackDetails`, `keyFunctions`, and `userGuideSummary`.

## Tech stack

| Area     | Technologies |
|----------|--------------|
| Framework | Angular 21 (standalone components) |
| Language  | TypeScript 5 |
| Styling   | SCSS with CSS custom properties |
| Icons     | Lucide (`@lucide/angular`) |
| Routing   | Angular Router with `withHashLocation` |
| Email     | EmailJS (`@emailjs/browser`) |
| Build tool | Angular CLI |

## Installation and setup

### Prerequisites

- Node.js 20 LTS or later
- Angular CLI 21 (`npm install -g @angular/cli@21`)

### Steps

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up EmailJS:

   - Create a free account at emailjs.com
   - Copy your Public Key, Service ID, and Template ID into `src/enviroments/enviroment.ts` and `src/enviroments/environment.prod.ts`:

     ```ts
     export const environment = {
       production: false,
       emailJS: {
         publicKey: 'YOUR_PUBLIC_KEY',
         serviceId: 'YOUR_SERVICE_ID',
         templateId: 'YOUR_TEMPLATE_ID'
       }
     };
     ```

   - In your EmailJS template, use the placeholders `{{from_name}}`, `{{from_email}}`, and `{{message}}`.
   - The public key is safe to expose in frontend code. Rate limiting is handled on the EmailJS side.

3. Serve the development server:

   ```bash
   ng serve
   ```

   Open `http://localhost:4200/` in a browser.

4. Build for production:

   ```bash
   ng build
   ```

   Output lands in `dist/ThabangPortfolio/` and can be deployed to any static host.

## Deployment

The production output is static files. Options include Azure Static Web Apps, Netlify, GitHub Pages, or Vercel. For Azure Static Web Apps, set the output location to `dist/ThabangPortfolio`.

## License

This project is for portfolio demonstration purposes. Feel free to reuse the structure as a template for your own portfolio.
