
export class Task {
  name: string;
  description: string;
  status: boolean;
  comment: string;
  patient: string;
  creationDate: Date;
  finishedDate: Date;
  therapist: string;
  constructor(name: string, description: string, therapist: string) {
    this.description = description;
    this.name = name;
    this.status = false;
    this.comment = ' מלא הערות חשובות בטירוף';
    this.creationDate = new Date();
    this.finishedDate = new Date();
    this.patient = '597a222673da660948f8f72a'
    this.therapist = therapist;
  }
}
