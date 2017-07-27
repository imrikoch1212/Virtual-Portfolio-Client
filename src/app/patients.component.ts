import { Component} from '@angular/core';
import { Patient } from './entities/patient';
// import { HeroService } from  './hero.service';
import { OnInit } from   '@angular/core';
// import { Router } from '@angular/router';
import  { PATIENTS } from './mock-patients';
// import  { Therapist } from './entities/therapist';


@Component({
  selector: 'my-patients',
  templateUrl: './patients.component.html',
  // styleUrls: ['./heroes.component.css'],
})
export class PatientsComponent implements OnInit {
  patients: Patient[];
  selectedPatient: Patient ;

  // constructor(private  heroService: HeroService, private router: Router) { }

  getPatientsByTherapistId(therapistId: string): void {
    this.patients = PATIENTS;
  }
  ngOnInit(): void {
    this.getPatientsByTherapistId('some id');
  }
  onSelect(pateint: Patient): void {
    this.selectedPatient = pateint;
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }
  // delete(hero: Hero): void {
  //   this.heroService
  //     .delete(hero.id)
  //     .then(() => {
  //       this.heroes = this.heroes.filter(h => h !== hero);
  //       if (this.selectedHero === hero) { this.selectedHero = null; }
  //     });
  // }
}
