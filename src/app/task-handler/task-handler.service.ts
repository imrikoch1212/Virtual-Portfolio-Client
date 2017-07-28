import {Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';

@Injectable()
export class TaskHandlerService {
  private url = 'http://192.168.78.230:3000/tasks/byPatient';  // URL to web api
  private addTaskurl = 'http://192.168.78.230:3000/tasks/addTask';  // URL to web api
  private updateTaskUrl = 'http://192.168.78.230:3000/tasks/update';  // URL to web api

  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }
  getTasks(id: string): Promise<any> {
    return this.http.get(this.url + '/' + id)
      .toPromise()
      .then(response =>
        response.json() as any
      )
      .catch(this.handleError);
  }
  addTask(task: any): Promise<void>  {
     return this.http
      .post(this.addTaskurl, {task: task}, {headers: this.headers}).toPromise()
       .then(() => null);
  }
  updateTask(task: any): Promise<void> {
    return this.http
      .post(this.updateTaskUrl, {task: task}, {headers: this.headers}).toPromise()
      .then(() => null);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
