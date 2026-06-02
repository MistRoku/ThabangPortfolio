import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, WorkExperience, Education } from '../../services/portfolio-data.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  workExperiences: WorkExperience[] = [];
  education: Education[] = [];
  constructor(private data: PortfolioDataService) { }
  ngOnInit() {
    this.workExperiences = this.data.getWorkExperience();
    this.education = this.data.getEducation();
  }
}

