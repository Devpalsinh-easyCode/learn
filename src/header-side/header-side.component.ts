import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-side',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './header-side.component.html',
  styleUrl: './header-side.component.css'
})
export class HeaderSideComponent {
  isMenuOpen = false;
  currentRoute : string ="";
  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const overlay: any = document.querySelector('.menu-overlay');
    if(overlay){
      if (this.isMenuOpen) {
        overlay.classList.add('active');
      } else {
        overlay.classList.remove('active');
      }
    }
  }
  
  closeMenu() {
    this.isMenuOpen = false;
    const overlay: any = document.querySelector('.menu-overlay');
    if(overlay){
      overlay.classList.remove('active');
    }
  }  
  closeMobileMenu() {
    const navbarCollapse = document.getElementById('navbarsExample11');
    if (navbarCollapse?.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }
}
