class NurseModel{
    public id!: string;
    public firstName:string;
    public lastName:string;
    public age:number;
    public hospitalWard:string;
 
    constructor( id: string,
     firstName:string,
      lastName:string,
      age:number,
      hospitalWard:string) 
          {
             this.id=id;
             this.firstName=firstName;
             this.lastName=lastName;
             this.age=age;
             this.hospitalWard=hospitalWard;
     }
 }
 export default NurseModel
