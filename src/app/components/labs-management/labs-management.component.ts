import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { TranslateModule } from '@ngx-translate/core';
import { TooltipModule } from 'primeng/tooltip';
import { DatePickerModule } from 'primeng/datepicker'; // Antes era calendar
import { SelectModule } from 'primeng/select';
import { StepperModule } from 'primeng/stepper';
import { CheckboxModule } from 'primeng/checkbox';         // Antes era dropdown
import { DialogModule } from 'primeng/dialog';
import { MenuModule } from 'primeng/menu'; // Agrega a tus imports del @Component
import { MenuItem } from 'primeng/api';

import { MOCK_LABS } from '../../constants/labs.constants';

// Definimos la estructura aquí mismo para no complicarnos por ahora
export interface Laboratory {
  id: string;          // Código
  nombre: string;      // Nombre Comercial
  tipo: string;        // Tipo (ej. Medicina Interna)
  plan: string;        // Plan (ej. Centro Patológico...)
  fechaIngreso: string;// Fecha de ingreso
  estado: 'Activo' | 'Inactivo'; // Estado
}

@Component({
  selector: 'app-labs-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    // PrimeNG Modules
    TableModule,
    ButtonModule,
    InputTextModule,
    TagModule,
    PaginatorModule,
    // Traducción
    TranslateModule,
    TooltipModule,
    DatePickerModule, // Cambiado
    SelectModule,     // Cambiado
    DialogModule,
    StepperModule,
    CheckboxModule,
    MenuModule
  ],
  templateUrl: './labs-management.component.html',
  styleUrl: './labs-management.component.css'
})

export class LabsManagementComponent {
  searchQuery: string = '';

  // Ahora solo llamamos a nuestra "cocina" de datos
  laboratorios: Laboratory[] = MOCK_LABS;

  visible: boolean = false;
  
  nuevoLab: any = {
    nombre: '',
    plan: null,
    vencimiento: null
  };

  // En 'Select', las opciones se manejan igual, pero el componente en el HTML cambia
  planes = [
    { label: 'Basic', value: 'Basic' },
    { label: 'Standard', value: 'Standard' },
    { label: 'Premium', value: 'Premium' }
  ];

  showDialog() {
    this.visible = true;
  }

  // Para controlar en qué pantalla estamos (opcional, el stepper lo maneja)
  activeStep: number = 0;

  tenantData = {
    // Pantalla 1: Datos de Negocio
    business: { tenantKey: '', name: '', businessReason: null, country: '', timezone: '', currency: null, province: '', zip: '', website: null, nit: null, businessType: '' },
    // Pantalla 2: Suscripción
    subscription: { periodicity: null, startDate: null, plan: null, renewalDate: null, trialUntil: null, status: null, tenantStatus: null },
    // Pantalla 3: Administrador
    admin: { names: '', lastnames: '', email: '', countryCode: '', phone: '', position: null },
    // Pantalla 4: Sucursal
    branch: { name: '', internalCode: '', useBusinessAddress: false, address: '', city: '', phone: '', email: '' }
  };

  // Opciones para los Selects según tus notas
  subscriptionStatuses = [
    { label: 'Activa', value: 'Activa' },
    { label: 'Trial', value: 'Trial' },
    { label: 'Vencida', value: 'Vencida' },
    { label: 'Cancelada', value: 'Cancelada' }
  ];

  periodicities = [
    { label: 'Anual', value: 'anual' },
    { label: 'Mensual', value: 'mensual' },
    { label: 'Trimestral', value: 'trimestral' }
  ];

  tenantStatuses = [
    { label: 'Activo', value: 'activo' },
    { label: 'Suspendido', value: 'suspendido' },
    { label: 'Moroso', value: 'moroso' },
    { label: 'Cancelado', value: 'cancelado' }
  ];

  accionesItems: MenuItem[] = [
  { label: 'Ver Detalle', icon: 'pi pi-user' },
  { label: 'Suspender/Bloquear', icon: 'pi pi-info-circle' },
  { label: 'Reactivar tenant', icon: 'pi pi-power-off' },
  { label: 'Extender Trial / Ajustar Trial', icon: 'pi pi-power-off' },
  { label: 'Forzar fin de trial', icon: 'pi pi-power-off' },
  { label: 'Cambiar Plan', icon: 'pi pi-power-off' },
  { label: 'Reset acceso admin', icon: 'pi pi-power-off' }
];
}