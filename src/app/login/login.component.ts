import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Route} from '@angular/router';
import {LoginService} from "./login-service";
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: `./login.component.html`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {email: "", password: ""};
  errorMessage = "";
  parentRouter: Router;

  constructor(private loginService: LoginService, private router: Router) {
    this.parentRouter = router;
  }

  ngOnInit(): void {

  };

  login(): void {
    this.loginService.login(this.user.email, this.user.password).then((user) => {
      console.log("LOGGED IN");
      this.loginService.loggedInUser = user;
      localStorage.setItem('loggedUser', JSON.stringify(user));
      this.parentRouter.navigateByUrl('/cases');
    }).catch(err => {
      console.log("LOGIN FAILED");
      this.errorMessage = "פרטי ההתחברות שגויים";
    });

  }
}
