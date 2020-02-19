export class Mark {
    userid: string;
    mark: Number;
    name:string;
  }
  export class Marksheet {
    classname: string;
    year: string;
    term: string;
    subject:string;
    subId:string;
    marks: Array<Mark>;
  }