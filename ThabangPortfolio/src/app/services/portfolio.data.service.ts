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
