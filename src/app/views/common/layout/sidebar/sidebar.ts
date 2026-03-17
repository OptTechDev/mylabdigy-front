import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { filter } from 'rxjs/operators';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SidebarItem } from '../../../../models/layout.model';
import { ITEMS_SIDEBAR_ADMINISTRADOR, ITEMS_SIDEBAR_FARMACIA, ITEMS_SIDEBAR_INVENTARIO, ITEMS_SIDEBAR_LABORATORIO, ITEMS_SIDEBAR_MEDICO } from '../../../../constants/items_sidebar';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    AvatarModule, 
    ButtonModule, 
    TooltipModule,
    TranslateModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {

  items: SidebarItem[] = [];

  isCollapsed = false;
  isVisible = true;
  themeClass = 'from-celeste-fuerte to-celeste-suave';
  
  userName = 'Ben Richard';
  userRoleName = 'Médico';
  rolId = 1;

  constructor(private router: Router, private cdr: ChangeDetectorRef, private translate: TranslateService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.isVisible = !event.url.includes('/login') && event.url !== '/';
      this.checkUser();
    });
  }

  ngOnInit() {
    this.checkUser();
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
    
    this.translate.onLangChange.subscribe(() => {
        this.checkUser();
    });
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
        
        const translationKey = `SIDEBAR.ROLES.${this.rolId}`;
        const translatedRole = this.translate.instant(translationKey);
        
        const roles: Record<number, string> = {
            1: 'Administrador',
            2: 'Laboratorio',
            3: 'Medico',
            4: 'Farmacia',
            5: 'Inventario'
        };
        
        this.userRoleName = user.rolNombre || (translatedRole !== translationKey ? translatedRole : roles[this.rolId]) || 'Médico';
      } catch (e) {}
    }
    
    this.themeClass = this.getThemeClass(this.rolId);

    switch (Number(this.rolId)) {
        case 1: this.items = ITEMS_SIDEBAR_ADMINISTRADOR; break;
        case 2: this.items = ITEMS_SIDEBAR_LABORATORIO; break;
        case 3: this.items = ITEMS_SIDEBAR_MEDICO; break;
        case 4: this.items = ITEMS_SIDEBAR_FARMACIA; break;
        case 5: this.items = ITEMS_SIDEBAR_INVENTARIO; break;
        default: this.items = ITEMS_SIDEBAR_ADMINISTRADOR; break;
    }
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
