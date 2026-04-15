import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

// PrimeNG Modules
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { TooltipModule } from 'primeng/tooltip';
import { MenuItem } from 'primeng/api';

// Modelos y Constantes
import { Patient } from '../../../models/patient.model'; // Ajusta la ruta
import { PATIENTS_MOCK_DATA } from '../../../constants/patients';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { RegisterPatientComponent } from '../../../components/register-patient/register-patient';

@Component({
  selector: 'app-pacientes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MenuModule,
    TooltipModule,
    RegisterPatientComponent
  ],
  providers: [DialogService],
  templateUrl: './pacientes.html',
  styleUrl: './pacientes.css'
})
export class Pacientes implements OnInit {
  searchQuery: string = '';
  patients: Patient[] = PATIENTS_MOCK_DATA; // Cargamos los datos cocinados
  selectedPatient: Patient | null = null; // Para saber a quién estamos editando/borrando
  actionItems: MenuItem[] = [];
  constructor(private dialogService: DialogService) {}

  // Getter para filtrar los pacientes en tiempo real
  get filteredPatients() {
    return this.patients.filter(p => 
      p.fullName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      p.dni.includes(this.searchQuery) ||
      p.code.includes(this.searchQuery)
    );
  }

  ngOnInit(): void {
    this.initializeActionMenu();
  }

  initializeActionMenu(): void {
    this.actionItems = [
      { label: 'Crear Nueva Orden', icon: 'pi pi-plus', command: () => this.createNewOrder(this.selectedPatient) },
      { label: 'Ver Historial Médico', icon: 'pi pi-book', command: () => this.viewHistory() },
      { label: 'Editar Datos Personales', icon: 'pi pi-pencil', command: () => this.editPatient(this.selectedPatient) },
      { label: 'Enviar último resultado', icon: 'pi pi-whatsapp', command: () => this.sendWhatsapp() },
      { separator: true },
      { label: 'Dar de Baja', icon: 'pi pi-trash', styleClass: 'text-red-500', command: () => this.confirmDeactivation() }
    ];
  }

  // Métodos de acción
  createNewOrder(patient: Patient | null) { console.log('Nueva orden'); }
  viewHistory() { console.log('Ver historial'); }
  editPatient(patient: Patient | null) {
    if (patient) {
      console.log('Editando a:', patient.fullName);
      // Aquí abrirías el modal de edición
    }
  }
  sendWhatsapp() { console.log('WhatsApp'); }
  confirmDeactivation() { console.log('Baja'); }
  openRegisterModal() {
  const ref = this.dialogService.open(RegisterPatientComponent, {
    header: 'Registrar Nuevo Paciente',
    width: '60%',
    styleClass: 'custom-modal' // Aquí puedes aplicar el azul de tu cabecera en CSS
  });

  ref?.onClose.subscribe((newPatient) => {
    if (newPatient) {
      console.log('Paciente recibido:', newPatient);
      // Aquí harías el push a tu array de pacientes o llamarías al servicio de Spring Boot
    }
  });
}
}