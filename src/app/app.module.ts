import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { PatientsComponent } from './patients.component';
import { PatientShortDetailsComponent } from './patient-short-details.component';
import { AppComponent }         from './app.component';
import { CaseComponent } from './case/case.component';
import { RouterModule, Routes } from '@angular/router';
import  { PatientService } from './patient-service';
import { TaskHandlerComponent } from './task-handler/task-handler.component';
import { TaskHandlerService } from './task-handler/task-handler.service'
import {LoginComponent} from './login/login.component';
import {LoginService} from "./login/login-service";

const appRoutes: Routes = [
  // {path: 'case', component: CaseComponent},
  {path: 'cases', component: PatientsComponent},
  {path: 'tasks', component: TaskHandlerComponent },
  {path: 'cases/:id', component: CaseComponent},
  {path: 'login' , component: LoginComponent}
];



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here

    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    // AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientShortDetailsComponent,
    CaseComponent,
    TaskHandlerComponent,
    LoginComponent
  ],
   providers: [ PatientService, TaskHandlerService, LoginService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
