import { Component } from '@angular/core';
import { LucideShieldCheck } from '@lucide/angular';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [LucideShieldCheck],
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent {
  lastUpdated = 'September 2026';
}
