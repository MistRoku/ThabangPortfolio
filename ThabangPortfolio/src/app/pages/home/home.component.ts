import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  personalInfo: any;
  coreSkills = ['Angular 21', 'React 19', 'ASP.NET Core 10', 'Laravel 13', 'Spring 7', 'Maven 3', 'MySQL', 'SQL Server' , 'Azure', 'Docker', 'QA/UAT', 'Multi-tenant RBAC'];

  constructor(private data: PortfolioDataService) { }

  ngOnInit() {
    this.personalInfo = this.data.getPersonalInfo();
  }

  ngAfterViewInit() {
    // Typing Animation
    gsap.to('.typing-text', {
      duration: 3,
      text: this.personalInfo.title,
      ease: 'none',
      repeat: -1,
      repeatDelay: 2,
      yoyo: true
    });

    // Floating Tech Sphere Animation
    gsap.to('.tech-sphere', {
      duration: 10,
      rotateY: 360,
      repeat: -1,
      ease: 'none'
    });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/Thabang_Mokgonyana_CV.pdf';
    link.download = 'Thabang_Mokgonyana_CV.pdf';
    link.click();
  }
}
