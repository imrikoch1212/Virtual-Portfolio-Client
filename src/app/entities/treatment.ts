import { Patient } from './patient';
import { Therapist } from './therapist';

export class Treatment {
  patient: Patient;
  therapy: Therapist;
  dateOfTreatment: Date;
  dateOfNextTreatment: Date;
}
