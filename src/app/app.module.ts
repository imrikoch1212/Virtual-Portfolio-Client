import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { PatientsComponent } from './patients.component';
import { PatientShortDetailsComponent } from './patient-short-details.component';
// import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.services';

import { AppComponent }         from './app.component';
// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './patients.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroSearchComponent } from './hero-search.component';
// import { HeroService }          from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // InMemoryWebApiModule.forRoot(InMemoryDataService),
    // AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientShortDetailsComponent
  ],
  // providers: [ HeroService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
