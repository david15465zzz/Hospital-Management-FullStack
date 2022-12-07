class EmployeeModel{
    public id!: string;
    public firstName:string;
    public lastName:string;
    public age:number;
    public job:string;
 
    constructor( id: string,
     firstName:string,
      lastName:string,
      age:number,
      job:string) 
          {
             this.id=id;
             this.firstName=firstName;
             this.lastName=lastName;
             this.age=age;
             this.job=job;
     }
 }
 export default EmployeeModel
 