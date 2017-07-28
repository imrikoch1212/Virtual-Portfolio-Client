import {Component, Input, OnInit} from '@angular/core';
// import {ActivatedRoute} from  '@angular/router';
 import {Location} from  '@angular/common';
import { TaskHandlerService } from './task-handler.service';
import 'rxjs/add/operator/switchMap';
import {Task} from '../entities/task';


@Component({
  selector: 'task-handler',
  templateUrl: './task-handler.component.html',

  // styleUrls: ['./hero-detail.component.css'],
})

export class TaskHandlerComponent implements OnInit {
  @Input()  name: string; description: string;
  tasks: any;

  getTasks() {
    this.taskHandlerService.getTasks().then(tasks => {
      this.tasks = tasks.reverse();
    });
  }
  updateTask(task: Task) {
    task.status = true;
    this.taskHandlerService.updateTask(task);
    location.reload();
  }
  addTask() {
    let task = new Task(this.name, this.description);
    this.taskHandlerService.addTask(task);
    location.reload();
  }
  ngOnInit(): void {
    this.getTasks();
  }
  constructor(private taskHandlerService: TaskHandlerService, private  location: Location) {}


}
