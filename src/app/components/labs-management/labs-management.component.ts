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
import { SelectModule } from 'primeng/select';         // Antes era dropdown
import { DialogModule } from 'primeng/dialog';

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
    DialogModule
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
}