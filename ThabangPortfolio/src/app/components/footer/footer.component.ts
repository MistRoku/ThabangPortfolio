import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideCode, LucideExternalLink } from '@lucide/angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LucideCode, LucideExternalLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent { }
