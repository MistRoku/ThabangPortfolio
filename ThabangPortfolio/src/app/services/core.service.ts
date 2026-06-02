import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoreService {
  private renderer: Renderer2;
  private cursor: HTMLElement | null = null;
  private cursorFollower: HTMLElement | null = null;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initCustomCursor() {
    if (window.innerWidth > 768) {
      // create cursor elements using renderer
      this.cursor = this.renderer.createElement('div') as HTMLElement;
      this.renderer.addClass(this.cursor, 'cursor');
      this.renderer.appendChild(document.body, this.cursor);

      this.cursorFollower = this.renderer.createElement('div') as HTMLElement;
      this.renderer.addClass(this.cursorFollower, 'cursor-follower');
      this.renderer.appendChild(document.body, this.cursorFollower);

      // use renderer.listen to attach events (safer for Angular and SSR)
      this.renderer.listen('document', 'mousemove', (e: MouseEvent) => {
        if (this.cursor) {
          this.renderer.setStyle(this.cursor, 'transform', `translate(${e.clientX}px, ${e.clientY}px)`);
        }
        if (this.cursorFollower) {
          this.renderer.setStyle(this.cursorFollower, 'transform', `translate(${e.clientX}px, ${e.clientY}px)`);
        }
      });

      const hoverElements = document.querySelectorAll('a, button, .btn, .card, .chip, .skill-group');
      hoverElements.forEach(el => {
        this.renderer.listen(el, 'mouseenter', () => {
          if (this.cursor) this.renderer.setStyle(this.cursor, 'transform', `translate(-50%, -50%) scale(1.5)`);
          if (this.cursorFollower) this.renderer.setStyle(this.cursorFollower, 'transform', `translate(-50%, -50%) scale(0.5)`);
        });
        this.renderer.listen(el, 'mouseleave', () => {
          if (this.cursor) this.renderer.setStyle(this.cursor, 'transform', `translate(-50%, -50%) scale(1)`);
          if (this.cursorFollower) this.renderer.setStyle(this.cursorFollower, 'transform', `translate(-50%, -50%) scale(1)`);
        });
      });
    }
  }

  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }
}
