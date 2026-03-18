import { Routes } from '@angular/router';
import { Login } from './views/common/login/login';
import { Conexiones } from './views/middleware/conexiones/conexiones';
import { Ordenes as OrdenesLab } from './views/laboratorio/ordenes/ordenes';
import { Ordenes as OrdenesMed } from './views/medico/ordenes/ordenes';
import { Pacientes } from './views/medico/pacientes/pacientes';
import { LabsManagementComponent } from './components/labs-management/labs-management.component';

export const routes: Routes = [
    {
        path: '',
        component: Login
    },
    {
        path: 'login',
        component: Login
    },
    //Middleware
    {
        path: 'middleware/conexiones',
        component: Conexiones
    },
    //Laboratorio
    {
        path: 'laboratorio/ordenes',
        component: OrdenesLab
    },
    //Medico
    {
        path: 'medico/ordenes',
        component: OrdenesMed
    },

    {
        path: 'medico/pacientes',
        component: Pacientes
    },   
    { 
        path: 'labs', 
        component: LabsManagementComponent 
    },
];
