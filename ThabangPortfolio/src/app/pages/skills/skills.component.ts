import { Component, OnInit, signal, afterNextRender, inject } from '@angular/core';
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
  // Data is assigned synchronously in ngOnInit, so the content is part of
  // the very first render pass and can never get stuck behind a timer.
  skillGroups: SkillGroup[] = [];
  certifications: string[] = [];

  // Skeleton loaders show on first paint, then swap to content after the
  // first render commits. A signal write notifies Angular in both zoned
  // and zoneless change detection, so the swap cannot stick.
  loading = signal(true);
  skeletonGroups = [1, 2];

  private data = inject(PortfolioDataService);

  constructor() {
    afterNextRender(() => this.loading.set(false));
  }

  ngOnInit() {
    this.skillGroups = this.data.getskills();
    this.certifications = this.data.getCertifications();
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
