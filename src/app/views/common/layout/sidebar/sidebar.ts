import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, AvatarModule, ButtonModule, TooltipModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  isCollapsed = false;
  isVisible = true;
  themeClass = 'from-celeste-fuerte to-celeste-suave';
  
  userName = 'Ben Richard';
  userRoleName = 'Médico';
  rolId = 1;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Hide on login
      this.isVisible = !event.url.includes('/login') && event.url !== '/';
      this.checkUser(); // Re-check user when navigating
    });
  }

  ngOnInit() {
    this.checkUser();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    if (window.innerWidth < 768) {
      if (!this.isCollapsed) {
          this.isCollapsed = true;
          this.cdr.detectChanges();
      }
    }
  }

  checkUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        this.rolId = user.rolId || user.rol || 1;
        this.userName = user.nombre || user.name || 'Ben Richard';
        
        const roles: Record<number, string> = {
            1: 'Médico',
            2: 'Laboratorio',
            3: 'Admin',
            4: 'Paciente',
            5: 'Soporte'
        };
        this.userRoleName = user.rolNombre || roles[this.rolId] || 'Médico';
      } catch (e) {}
    }
    
    this.themeClass = this.getThemeClass(this.rolId);
  }

  getThemeClass(rol: number): string {
      switch(Number(rol)) {
          case 1: return 'from-celeste-fuerte to-celeste-suave';
          case 2: return 'from-verde-fuerte to-verde-suave';
          case 3: return 'from-morado-fuerte to-morado-suave';
          case 4: return 'from-azul-fuerte to-azul-suave';
          case 5: return 'from-rosa-fuerte to-rosa-suave';
          default: return 'from-celeste-fuerte to-celeste-suave';
      }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
