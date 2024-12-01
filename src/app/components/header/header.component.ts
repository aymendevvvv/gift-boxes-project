import { Component, HostListener, Renderer2 } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, BadgeModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private renderer: Renderer2){}

  isActive = false ; 

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.updateNavbarOpacity();
  }

  private updateNavbarOpacity(): void {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
      if (window.scrollY > 50) {
        this.renderer.addClass(navbar, 'opacity-70'); 
        this.renderer.removeClass(navbar, 'opacity-100'); 
      } else {
        this.renderer.addClass(navbar, 'opacity-100'); 
        this.renderer.removeClass(navbar, 'opacity-70'); 
      }
    }
  }

}
