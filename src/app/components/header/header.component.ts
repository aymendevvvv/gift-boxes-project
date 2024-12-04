import { Component, HostListener, Renderer2 } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ButtonModule, BadgeModule, CommonModule, SidebarModule, SharedModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private renderer: Renderer2){}

  isActive = false ; 

  sidebarVisible: boolean = false;

  
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.updateNavbarOpacity();
  }

  private updateNavbarOpacity(): void {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
      if (window.scrollY > 200) {
        this.renderer.addClass(navbar, 'opacity-0');
        this.renderer.removeClass(navbar, 'opacity-60');
        this.renderer.removeClass(navbar, 'opacity-100');
      } else if (window.scrollY > 30) {
        this.renderer.addClass(navbar, 'opacity-60');
        this.renderer.removeClass(navbar, 'opacity-100');
        this.renderer.removeClass(navbar, 'opacity-0');
      } else {
        this.renderer.addClass(navbar, 'opacity-100');
        this.renderer.removeClass(navbar, 'opacity-60');
        this.renderer.removeClass(navbar, 'opacity-0');
      }
    }
    
  }

}
