/**
 * Created by Eitan on 6/30/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'תיק וירטואלי';
  loggedUser: any;
  isLoggedIn = true;
  constructor () {
  }
}
