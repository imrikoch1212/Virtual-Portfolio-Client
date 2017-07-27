import {Component} from '@angular/core';

@Component({
  selector: 'case',
  templateUrl: `./case.component.html`,
  styleUrls: ['./case.component.css']
})
export class CaseComponent {
  case = {
    patientInfo: {
      privateName: "מיכאל",
      surName: "דניאלי",
      address: "asdf",
      phone: "0548045513",
      diagnosis: "",
      picture: "../assets/img/child2.jpg",
      age: 14,
      details: [""],
      id_number: "123123123"
    },
    creationDate: '1968-11-16T00:00:00',
    lastUpdateDate: '1968-11-16T00:00:00',
    managerId: "asdasdasdas123123"
  }
  ;
  patient: any;

  constructor() {
    this.patient = this.case.patientInfo;
  }

  // title = 'תיק וירטואלי';
  // loggedUser = {email: "yarinvak@gmail.com", privateName: "yarin", surName: 'vaknin'};
  // isLoggedIn = true;
  // constructor () {
  // }
}
