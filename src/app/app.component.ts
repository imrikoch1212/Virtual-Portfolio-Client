import { Component } from '@angular/core';
import {LoginService} from "./login/login-service";
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'תיק וירטואלי';
  loginService : LoginService;
  parentRouter: Router;

  constructor (private loginServicey: LoginService, private router: Router) {
    this.loginService = loginServicey;
    this.parentRouter = router;

    console.log(this.loginService.loggedInUser);
  }

  disconnect(): void{
    localStorage.removeItem('loggedUser');
    this.loginService.loggedInUser=null;
    this.parentRouter.navigateByUrl('/login');

  }
}
