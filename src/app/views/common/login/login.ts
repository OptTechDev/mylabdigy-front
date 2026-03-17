import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {

  private router = inject(Router);

  constructor() {}

  ngOnInit() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  agregarUsuarioInvitado() {
    const user = {
      id: 1,
      nombre: 'Ben Richard',
      rolId: 1,
      rolNombre: 'Médico'
    };
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', 'token');
    this.router.navigate(['/medico/pacientes']);
  }

}
