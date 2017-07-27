import { Component, Input} from '@angular/core';
// import {ActivatedRoute} from  '@angular/router';
// import {Location} from  '@angular/common';
import {Patient} from './entities/patient';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'patient-short-detail',
  templateUrl: `./patient-short-detail.component.html`,
  // styleUrls: ['./hero-detail.component.css'],
})

export class PatientShortDetailsComponent  {
  @Input() patient: Patient;
  constructor (
    // private route: ActivatedRoute,
    // private location: Location
  ) {}

  goToDetails(): void {
    alert(this.patient);
    // todo go to details routing
  }
  // save(): void {
  //   this.heroService.update(this.hero).then(() => this.goBack());
  // }
}
