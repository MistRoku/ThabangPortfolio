import { Component } from '@angular/core';
import { LucideFileText } from '@lucide/angular';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [LucideFileText],
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
  lastUpdated = 'September 2026';
}
