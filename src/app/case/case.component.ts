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
  therapists: any[];
  name:string;
  constructor(private route: ActivatedRoute, private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.patientService.getCaseById(params.get('id')))
      .subscribe(temp => {
        this.case = temp;
        this.getTherapists();
      });
  }
  getTherapists(): void{
    this.patientService.getTherapists(this.case._id).then(value => this.therapists = value);
  }

  ;

}
