import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Sidebar } from './views/common/layout/sidebar/sidebar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mylabdigy');
  private translate = inject(TranslateService);

  constructor() {
    this.translate.addLangs(['en', 'es']);
    this.translate.use('es');
  }
}

