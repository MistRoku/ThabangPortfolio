import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'projects', loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent) },
  { path: 'experience', loadComponent: () => import('./pages/experience/experience.component').then(m => m.ExperienceComponent) },
  { path: 'skills', loadComponent: () => import('./pages/skills/skills.component').then(m => m.SkillsComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'terms', loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent) },
  { path: 'privacy', loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent) },
  { path: '**', redirectTo: '' }
];
