import {Component} from '@angular/core';
import {Patient} from './entities/patient';
import {OnInit} from '@angular/core';
import {PatientService} from './patient-service'



@Component({
  selector: 'my-patients',
  templateUrl: './patients.component.html',
  // styleUrls: ['./heroes.component.css'],
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  selectedPatient: Patient;
  cases: any;

  constructor(private patientService: PatientService) {

  }

  getPatients(): void {
    this.patientService.getCases().then(cases => {
      this.cases = cases;
    });
    console.log(this.cases)
  }

  ngOnInit(): void {
    this.getPatients();
  };
}



