import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioDataService } from '../../services/portfolio-data.service';
import { LucideFolderOpen, LucideDownload } from '@lucide/angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideFolderOpen, LucideDownload],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personalInfo: any;
  coreSkills = ['C# 14', 'PHP 8.5', 'Javascript ES2026', 'TypeScript 5.13', 'Kotlin 2.3', 'Java 26', 'Angular 22', 'React 19', 'ASP.NET Core 10', 'ASP.NET 4.8.1', 'Laravel 13', 'Spring 7', 'Maven 3', 'MySQL', 'SQL Server', 'Azure', 'Docker', 'QA/UAT', 'Multi-tenant RBAC'];

  constructor(private data: PortfolioDataService) { }

  ngOnInit() {
    this.personalInfo = this.data.getPersonalInfo();
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'Thabang_Mokgonyana_Software_Engineer_v4.pdf';
    link.download = 'Thabang_Mokgonyana_CV.pdf';
    link.click();
  }
}
