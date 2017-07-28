import {Component, Input, OnInit} from '@angular/core';
// import {ActivatedRoute} from  '@angular/router';
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
    let task = new Task(this.name, this.description, this.loginService.loggedInUser._id);
    this.taskHandlerService.addTask(task);
    location.reload();
  }
  ngOnInit(): void {
    this.getTasksByPatientId('597a222673da660948f8f72a');
  }
  constructor(private taskHandlerService: TaskHandlerService, private  location: Location, private loginService: LoginService) {}


}
