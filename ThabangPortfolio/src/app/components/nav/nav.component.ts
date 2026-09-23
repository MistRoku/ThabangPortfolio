import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideMenu, LucideX } from '@lucide/angular';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideMenu, LucideX],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  menuOpen = false;
  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu() { this.menuOpen = false; }
}
