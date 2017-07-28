import {Component, Input, OnInit} from '@angular/core';
 import { ActivatedRoute, ParamMap} from  '@angular/router';
 import {Location} from  '@angular/common';
import { TaskHandlerService } from './task-handler.service';
import 'rxjs/add/operator/switchMap';
import {Task} from '../entities/task';
import { LoginService } from '../login/login-service';

@Component({
  selector: 'task-handler',
  templateUrl: './task-handler.component.html',

  // styleUrls: ['./hero-detail.component.css'],
})

export class TaskHandlerComponent implements OnInit {
  @Input()  name: string; description: string;
  tasks: any;
  patientId: string;
  getTasksByPatientId(id: string) {
    this.taskHandlerService.getTasks(id).then(tasks => {
      this.tasks = tasks.reverse();
    });
  }
  updateTask(task: Task) {
    task.status = true;
    this.taskHandlerService.updateTask(task);
    location.reload();
  }
  addTask() {
    let task = new Task(this.name, this.description, this.loginService.loggedInUser._id,'597a25b12b4ed60998709e80');
    this.taskHandlerService.addTask(task);
    location.reload();
  }
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.taskHandlerService.getTasks(params.get('id')))
      .subscribe(temp => {
        this.tasks = temp;
      });
  }
  constructor(
    private taskHandlerService: TaskHandlerService,
    private  location: Location,
    private loginService: LoginService,
    private  route: ActivatedRoute) {}


}
