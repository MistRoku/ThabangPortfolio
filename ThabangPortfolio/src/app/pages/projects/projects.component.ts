import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioDataService, Project } from '../../services/portfolio-data.service';
import {
  LucideX,
  LucideChevronLeft,
  LucideChevronRight,
  LucideCode,
  LucideExternalLink,
  LucideBookOpen,
  LucideLayers,
  LucideWrench,
} from '@lucide/angular';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    LucideX,
    LucideChevronLeft,
    LucideChevronRight,
    LucideCode,
    LucideExternalLink,
    LucideBookOpen,
    LucideLayers,
    LucideWrench,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  selectedProject: Project | null = null;
  modalOpen = false;
  loading = true;
  skeletonItems = [1, 2, 3, 4];

  @ViewChild('scrollTrack') scrollTrack!: ElementRef<HTMLElement>;

  constructor(private data: PortfolioDataService) { }

  ngOnInit() {
    // Skeleton loader visible while content prepares.
    setTimeout(() => {
      this.projects = this.data.getProjects();
      this.loading = false;
    }, 700);
  }

  scrollByAmount(amount: number) {
    const el = this.scrollTrack?.nativeElement;
    if (el) {
      el.scrollBy({ left: amount, behavior: 'auto' });
    }
  }

  openModal(project: Project) {
    this.selectedProject = project;
    this.modalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.closeModal();
    }
  }
}
