import { Injectable } from '@angular/core';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private patients: Patient[] = [];

  constructor() { }

  getAllPatients(): Patient[] {
    return this.patients;
  }

  addPatient(patient: Patient): void {
    this.patients.push(patient);
  }

  updatePatient(patient: Patient): void {
    const index = this.patients.findIndex((p) => p.id === patient.id);
    if (index !== -1) {
      this.patients[index] = patient;
    }
  }

  deletePatient(id: number): void {
    const index = this.patients.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.patients.splice(index, 1);
    }
  }
}
