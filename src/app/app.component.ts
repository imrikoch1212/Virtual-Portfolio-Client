/**
 * Created by Eitan on 6/30/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <!--<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>-->
      <!--<a routerLink="/heroes" routerLinkActive="active">Heroes</a>-->
    </nav>
    <my-patients></my-patients>
    <!--<router-outlet></router-outlet>-->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'תיק וירטואלי';
}
