class DoctorModel{
   public id!: string;
   public firstName:string;
   public lastName:string;
   public age:number;
   public domain:string;

   constructor( id: string,
    firstName:string,
     lastName:string,
     age:number,
     domain:string) 
         {
            this.id=id;
            this.firstName=firstName;
            this.lastName=lastName;
            this.age=age;
            this.domain=domain;
	}
}
export default DoctorModel














