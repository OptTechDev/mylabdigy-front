import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-register-patient',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    InputTextModule, 
    ButtonModule, 
    DatePicker,
    Select
  ],
  templateUrl: './register-patient.html'
})
export class RegisterPatientComponent implements OnInit {
  patientForm!: FormGroup;
  genders = [
    { label: 'Masculino', value: 'M' },
    { label: 'Femenino', value: 'F' }
  ];

  // URLs de avatars por defecto o locales
  avatarMap: any = {
    'M': 'assets/avatars/male-avatar.png',
    'F': 'assets/avatars/female-avatar.png',
    'default': 'assets/avatars/default-hospital.png'
  };

  constructor(private fb: FormBuilder, public ref: DynamicDialogRef) {}

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      dni: ['', Validators.required],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: [null, Validators.required],
      birthDate: [null, Validators.required],
      phone: [''],
      email: ['', [Validators.email]]
    });
  }

  get currentAvatar(): string {
    const gender = this.patientForm.get('gender')?.value;
    return this.avatarMap[gender] || this.avatarMap['default'];
  }

  save() {
    if (this.patientForm.valid) {
      this.ref.close(this.patientForm.value);
    }
  }

  cancel() {
    this.ref.close();
  }
}