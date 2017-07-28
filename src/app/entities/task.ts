export class Task {
  name: string;
  description: string;
  status: boolean;
  comment: string;
  patient: string;
  creationDate: Date;
  finishedDate: Date;
  constructor(name: string, description: string) {
    this.description = description;
    this.name = name;
    this.status = false;
    this.comment = ' מלא הערות חשובות בטירוף';
    this.creationDate = new Date();
    this.finishedDate = new Date();
  }
}
