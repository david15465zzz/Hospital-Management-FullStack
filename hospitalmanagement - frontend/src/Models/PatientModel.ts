class PatientModel{
    public id!: string;
    public firstName:string;
    public lastName:string;
    public age:number;
    public arrival:Date;
    public disease:string;
    public stillBeingTreated:boolean ;
 
    constructor( id: string,
     firstName:string,
      lastName:string,
      age:number,
       arrival:Date,
       disease:string,
       stillBeingTreated:boolean
    ) 
          {
             this.id=id;
             this.firstName=firstName;
             this.lastName=lastName;
             this.age=age;
             this.arrival=arrival;
             this.disease=disease;
             this.stillBeingTreated=stillBeingTreated;
     }
 }
 export default PatientModel
 
 
