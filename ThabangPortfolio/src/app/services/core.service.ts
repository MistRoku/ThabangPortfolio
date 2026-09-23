import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CoreService {
  initCustomCursor() {
    // Intentionally left blank. The site uses the standard system cursor
    // so there are no custom cursor effects or hover-linked animations.
  }

  initScrollAnimations() {
    // Intentionally left blank. Content renders in its final state
    // with no scroll-linked animation.
  }
}
