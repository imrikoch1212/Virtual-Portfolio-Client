import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { PatientsComponent } from './patients.component';
import { PatientShortDetailsComponent } from './patient-short-details.component';
import { AppComponent }         from './app.component';
import { CaseComponent } from './case/case.component';
import { RouterModule, Routes } from '@angular/router';
import  { PatientService } from './patient-service'

const appRoutes: Routes = [
  // {path: 'case', component: CaseComponent},
  {path: 'cases', component: PatientsComponent},
  {path: 'cases/:id', component: CaseComponent}
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
    CaseComponent
  ],
   providers: [ PatientService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
