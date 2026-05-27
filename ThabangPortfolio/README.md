# ThabangPortfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

# Thabang Mokgonyana – Full-Stack Developer Portfolio

A modern, responsive portfolio website built with **Angular 18 (standalone components)**, **SCSS**, and **EmailJS** for contact functionality.  
Designed to showcase Thabang’s CV, projects, work experience, skills, and contact information in a clean, professional layout.

---

## 📁 Project Structure

thabang-portfolio/
├── src/
│ ├── app/
│ │ ├── components/ # Reusable UI parts (nav, footer, project-card)
│ │ ├── pages/ # Route-level components (home, projects, experience, skills, contact)
│ │ ├── services/ # Data service (portfolio-data) + Email service
│ │ ├── app.config.ts # App-wide providers (router, HTTP client)
│ │ ├── app.routes.ts # Route definitions (lazy‑loadable pages)
│ │ └── app.component.html/ts/scss
│ ├── assets/ # Project images, CV PDF, favicon
│ ├── environments/ # environment.ts (EmailJS keys)
│ └── styles.scss # Global SCSS variables + responsive grid
├── angular.json
├── package.json
└── README.md
text


---

## 🚀 Features

- ✅ **Fully responsive** – mobile menu, fluid grid, touch‑friendly buttons
- ✅ **Lazy‑loaded routes** – faster initial load
- ✅ **Hash‑based routing** – works on any static host (GitHub Pages, Netlify, Azure)
- ✅ **EmailJS integration** – contact form sends emails without a backend server
- ✅ **Centralised data service** – all CV content in one place; easy to replace with REST API later
- ✅ **Accessible** – semantic HTML, ARIA labels, keyboard navigation
- ✅ **Production build** – optimized with Angular CLI

---

## 🛠️ Tech Stack

| Area          | Technologies |
|---------------|--------------|
| Framework     | Angular 18 (standalone components, no NgModules) |
| Language      | TypeScript 5+ |
| Styling       | SCSS (with CSS custom properties) |
| Routing       | Angular Router (with `withHashLocation`) |
| Email         | EmailJS |
| Build tool    | Angular CLI |
| Testing (optional) | Jasmine / Karma (spec files generated) |

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** 20 LTS or later – [Download](https://nodejs.org)
- **Angular CLI** 18 – `npm install -g @angular/cli@18`
- **Visual Studio 2022** (or VS Code) – recommended for development

### Steps

1. **Clone or create the project**
   ```bash
   ng new thabang-portfolio --standalone --routing --style=scss --ssr=false
   cd thabang-portfolio

    Install additional dependencies
    bash

    npm install emailjs-com
    npm install @types/emailjs-com --save-dev

    Set up EmailJS

        Create a free account at emailjs.com

        Get your Public Key, Service ID, and Template ID

        Create src/environments/environment.ts and src/environments/environment.prod.ts:
        typescript

        export const environment = {
          production: false,
          emailJS: {
            publicKey: 'YOUR_PUBLIC_KEY',
            serviceId: 'YOUR_SERVICE_ID',
            templateId: 'YOUR_TEMPLATE_ID'
          }
        };

        Replace placeholders with real keys.

    Copy the source code
    Replace the generated src/app/ folder with the code provided in the tutorial (or generate components manually via ng generate).

    Serve the development server
    bash

    ng serve --open

    The site will open at http://localhost:4200.

    Build for production
    bash

    ng build --prod

    Output is in dist/thabang-portfolio/ – ready to deploy to any static host.

📧 EmailJS Configuration (Important)

The contact form uses EmailJS to send messages directly from the browser.
After copying your keys into environment.ts, you must also create an email template in EmailJS with these placeholders:

    {{from_name}}

    {{from_email}}

    {{message_html}}

The service ID is the default EmailJS service (service_...) or a custom SMTP service you add.

    Security: Your public key is safe to expose in frontend code (EmailJS is designed for this). Rate limiting and spam protection are applied on EmailJS side.

🧩 How to Add / Modify Content

All CV content is managed in one service – no need to touch HTML files for updates.
📌 Add a new project

Edit src/app/services/portfolio-data.service.ts → getProjects() method. Add a new object to the returned array.
📌 Update work experience or education

Edit the same service – getWorkExperiences() or getEducation().
📌 Change core competencies or skill groups

Modify getSkills() and the coreSkills array (if you added one in the home component).
📌 Replace the CV download file

Place your PDF in src/assets/ and update the download link in home.component.html.
🧪 Testing (Optional)

The project includes .spec.ts files for each service/component (generated by Angular CLI).
Run unit tests with:
bash

ng test

Tests are written with Jasmine/Karma. You can safely delete spec files if you don’t plan to write tests.
🔮 Future Expansion Points

The architecture was designed to be easily extended:
Feature	How to implement
Real backend / CMS	Replace static methods in PortfolioDataService with HttpClient.get() calls.
Blog section	Add new route blog, create lazy‑loaded module, use markdown parser (e.g., ngx-markdown).
Admin dashboard	Generate a protected route with forms to edit projects/skills dynamically.
Multi‑language (i18n)	Angular built‑in @angular/localize – extract text from templates.
PWA (offline support)	Run ng add @angular/pwa and configure ngsw-config.json.
Analytics	Add Google Analytics / Plausible snippet in index.html or via Router.events.
🌐 Deployment

The portfolio is static (HTML/CSS/JS) and can be hosted anywhere:

    Azure Static Web Apps – connect GitHub repo, auto‑deploy on push

    Netlify – drag & drop dist folder

    GitHub Pages – use angular-cli-ghpages package

    Vercel – zero‑config with Angular preset

For Azure Static Web Apps, remember to set the output_location to dist/thabang-portfolio.
📄 License

This project is for portfolio demonstration purposes.
Feel free to use the code as a template for your own portfolio.
🙋 Support

If you encounter any issues:

    Check the terminal output for real errors (ignore VS red squiggles if build passes).

    Ensure all dependencies are installed (npm install).

    Verify that environment.ts contains valid EmailJS keys.

For feature requests or improvements, open an issue or contact the developer.
