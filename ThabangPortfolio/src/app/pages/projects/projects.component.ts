import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  HostListener,
  signal,
  afterNextRender,
  inject,
} from '@angular/core';
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
  // Data is assigned synchronously in ngOnInit, so the content is part of
  // the very first render pass and can never get stuck behind a timer.
  projects: Project[] = [];
  selectedProject: Project | null = null;
  modalOpen = false;

  // Skeleton loaders show on first paint, then swap to content after the
  // first render commits. A signal write notifies Angular in both zoned
  // and zoneless change detection, so the swap cannot stick.
  loading = signal(true);
  skeletonItems = [1, 2, 3, 4];
  private imgFailed = new Set<string>();

  @ViewChild('scrollTrack') scrollTrack!: ElementRef<HTMLElement>;

  private data = inject(PortfolioDataService);

  constructor() {
    afterNextRender(() => this.loading.set(false));
  }

  ngOnInit() {
    this.projects = this.data.getProjects();
  }

  scrollByAmount(amount: number) {
    const el = this.scrollTrack?.nativeElement;
    if (el) {
      el.scrollBy({ left: amount, behavior: 'auto' });
    }
  }

  onImgError(project: Project) {
    this.imgFailed.add(project.title);
  }

  showImg(project: Project): boolean {
    return !!project.imageUrl && !this.imgFailed.has(project.title);
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

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.modalOpen) {
      this.closeModal();
    }
  }
}
