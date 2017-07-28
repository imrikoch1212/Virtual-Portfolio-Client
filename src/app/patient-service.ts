import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {LoginService} from "./login/login-service";

@Injectable()
export class PatientService {
  private url = 'http://192.168.78.230:3000/cases';  // URL to web api
  private heroesByIdUrl = 'http://localhost:3000/cases';  // URL to web api

  constructor(private http: Http, private loginService: LoginService) {
  }

  getCases(): Promise<any> {
    return this.http.get(this.url+'/getByTherapistId/'+this.loginService.loggedInUser._id)
      .toPromise()
      .then(response =>
        response.json() as any
      )
      .catch(this.handleError);
  }

  getCaseById(id :string) : Promise <any> {
    const url = `${this.url}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response =>
        response.json() as any
      )
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
