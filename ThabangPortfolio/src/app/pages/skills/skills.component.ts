import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, SkillGroup } from '../../services/portfolio-data.service';
import { LucideFileText, LucideWrench } from '@lucide/angular';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LucideFileText, LucideWrench],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillGroups: SkillGroup[] = [];
  certifications: string[] = [];
  loading = true;
  skeletonGroups = [1, 2];

  constructor(private data: PortfolioDataService) { }

  ngOnInit() {
    setTimeout(() => {
      this.skillGroups = this.data.getskills();
      this.certifications = this.data.getCertifications();
      this.loading = false;
    }, 200);
  }

  getSkillPercentage(skill: string): number {
    const percentages: Record<string, number> = {
      'JavaScript/TS': 80, 'PHP 8.4': 85, 'C#': 95, 'Kotlin': 75, 'Java': 80, 'SQL': 85,
      'Angular 21': 80, 'React 19': 80, 'RxJS': 75, 'Tailwind CSS': 80, 'HTML5/CSS3': 90,
      'ASP.NET Core 10': 95, 'Laravel 13': 80, 'Node.js/Express': 80, 'REST APIs': 80, 'Java Spring 7': 75, 'Maven 3': 80,
      'MySQL': 90, 'SQL Server': 80, 'Firebase Realtime DB': 75, 'Schema Design': 88, 'MongoDB': 80, 'Laravel Forge': 75,
      'Microsoft Azure': 75, 'Docker': 80, 'GitHub Actions': 75, 'Azure Pipelines': 70,
      'JUnit': 75, 'Postman': 85, 'UAT': 90, 'Regression': 90, '85-95 percent coverage': 90
    };
    return percentages[skill] || 70;
  }
}
