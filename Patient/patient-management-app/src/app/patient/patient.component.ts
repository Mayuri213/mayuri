// import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patients: Patient[] = [];
  newPatient: Patient = new Patient();
  editingPatient: Patient | null = null;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patients = this.patientService.getAllPatients();
  }

  addPatient(): void {
    this.patientService.addPatient(this.newPatient);
    this.newPatient = new Patient();
  }

  editPatient(patient: Patient): void {
    this.editingPatient = { ...patient };
  }

  updatePatient(): void {
    if (this.editingPatient) {
      this.patientService.updatePatient(this.editingPatient);
      this.editingPatient = null;
    }
  }

  cancelEdit(): void {
    this.editingPatient = null;
  }

  deletePatient(id: number): void {
    this.patientService.deletePatient(id);
  }

}
