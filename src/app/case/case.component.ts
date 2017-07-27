import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PatientService} from "../patient-service"
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'case',
  templateUrl: `./case.component.html`,
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  @Input() case: any;
  name:string;
  constructor(private route: ActivatedRoute, private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.patientService.getCaseById(params.get('id')))
      .subscribe(temp => {
        this.case = temp;
      });
  }
  // case = {
  //   patientInfo: {
  //     privateName: "מיכאל",
  //     surName: "דניאלי",
  //     address: "asdf",
  //     phone: "0548045513",
  //     diagnosis: "",
  //     picture: "../assets/img/child2.jpg",
  //     age: 14,
  //     details: [""],
  //     id_number: "123123123"
  //   },
  //   creationDate: '1968-11-16T00:00:00',
  //   lastUpdateDate: '1968-11-16T00:00:00',
  //   managerId: "asdasdasdas123123"
  // }
  ;


  // title = 'תיק וירטואלי';
  // loggedUser = {email: "yarinvak@gmail.com", privateName: "yarin", surName: 'vaknin'};
  // isLoggedIn = true;
  // constructor () {
  // }
}
