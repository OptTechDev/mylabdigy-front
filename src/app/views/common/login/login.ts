import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  imports: [
    ButtonModule,
    TranslateModule,
    FloatLabelModule,
    InputTextModule,
    ReactiveFormsModule,
    PasswordModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  userform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  private router = inject(Router);

  constructor() {}

  ngOnInit() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  agregarUsuarioInvitado() {
    const rolId = this.userform.value.username;
    const user = {
      id: 1,
      nombre: 'Ben Richard',
      rolId: rolId,
      rolNombre: 'Médico'
    };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', 'token');
    this.router.navigate(['/medico/pacientes']);
  }

}
