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
    TooltipModule
  ],
  templateUrl: './labs-management.component.html',
  styleUrl: './labs-management.component.css'
})
export class LabsManagementComponent {
  // Variable para el buscador
  searchQuery: string = '';

  // --- DATOS DE PRUEBA (MOCK DATA) idénticos al mockup ---
  // He creado 12 registros para que funcione la paginación (8 por página)
  laboratorios: Laboratory[] = [
    { id: '20231003001', nombre: 'Zaleth David Ríos Mata', tipo: 'Medicina Interna', plan: 'Centro Patológico del Caribe', fechaIngreso: '03/10/2023', estado: 'Activo' },
    { id: '20231003001', nombre: 'Zaleth David Ríos Mata', tipo: 'Medicina Interna', plan: 'Centro Patológico del Caribe', fechaIngreso: '03/10/2023', estado: 'Activo' },
    { id: '20231003001', nombre: 'Zaleth David Ríos Mata', tipo: 'Medicina Interna', plan: 'Centro Patológico del Caribe', fechaIngreso: '03/10/2023', estado: 'Activo' },
    { id: '20231003001', nombre: 'Zaleth David Ríos Mata', tipo: 'Medicina Interna', plan: 'Centro Patológico del Caribe', fechaIngreso: '03/10/2023', estado: 'Activo' },
    { id: '20231003001', nombre: 'Zaleth David Ríos Mata', tipo: 'Medicina Interna', plan: 'Centro Patológico del Caribe', fechaIngreso: '03/10/2023', estado: 'Activo' },
    { id: '20231003001', nombre: 'Zaleth David Ríos Mata', tipo: 'Medicina Interna', plan: 'Centro Patológico del Caribe', fechaIngreso: '03/10/2023', estado: 'Activo' },
    { id: '20231003001', nombre: 'Zaleth David Ríos Mata', tipo: 'Medicina Interna', plan: 'Centro Patológico del Caribe', fechaIngreso: '03/10/2023', estado: 'Activo' },
    { id: '20231003001', nombre: 'Zaleth David Ríos Mata', tipo: 'Medicina Interna', plan: 'Centro Patológico del Caribe', fechaIngreso: '03/10/2023', estado: 'Activo' },
    // Filas extras para la página 2
    { id: '20231003002', nombre: 'Laboratorio de Prueba 2', tipo: 'Análisis Clínicos', plan: 'Plan Básico', fechaIngreso: '04/10/2023', estado: 'Inactivo' },
    { id: '20231003003', nombre: 'Clínica Alemana', tipo: 'Cardiología', plan: 'Plan Premium', fechaIngreso: '05/10/2023', estado: 'Activo' },
    { id: '20231003003', nombre: 'Clínica Alemana', tipo: 'Cardiología', plan: 'Plan Premium', fechaIngreso: '05/10/2023', estado: 'Activo' },
    { id: '20231003003', nombre: 'Clínica Alemana', tipo: 'Cardiología', plan: 'Plan Premium', fechaIngreso: '05/10/2023', estado: 'Activo' },
  ];
}