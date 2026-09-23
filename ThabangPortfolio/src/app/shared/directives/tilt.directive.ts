import { Directive } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  // Intentionally a no-op. The site uses flat static panels
  // with no pointer-linked motion.
}
