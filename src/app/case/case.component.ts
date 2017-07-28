import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PatientService} from "../patient-service"
import { TaskHandlerService } from '../task-handler/task-handler.service'
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'case',
  templateUrl: `./case.component.html`,
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  @Input() case: any;
  therapists: any[];
  task: any;
  name:string;

  constructor(private route: ActivatedRoute, private patientService: PatientService, private  taskHandlerService: TaskHandlerService) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.patientService.getCaseById(params.get('id')))
      .subscribe(temp => {
        this.case = temp;
        this.getTherapists();
      });
    this.getTasks();
  }
  getTherapists(): void {
    this.patientService.getTherapists(this.case._id).then(value => this.therapists = value);
  }
  getTasks(): void {
    this.taskHandlerService.getTasks('597a25b12b4ed60998709e80').then(heroes =>
    {this.task = heroes[0]});
  }
  ;

}
