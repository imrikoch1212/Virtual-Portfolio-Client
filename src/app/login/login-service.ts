import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {
  private url = 'http://192.168.78.230:3000/users';  // URL to web api
  constructor(private http: Http) {
    if (localStorage.getItem('loggedUser')){
      this.loggedInUser = JSON.parse(localStorage.getItem('loggedUser'));
    }
  }

  loggedInUser : any;

  login(email: String, password: String): Promise<any> {
    return this.http.post(this.url+'/login', {email: email, password: password})
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
