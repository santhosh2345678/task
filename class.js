class student{
    constructor(name,age,school,degree1,degree2,skill,job,itijob){
    this.a=name
    this.b=age
    this.c=school
    this.d=degree1
    this.e=degree2
    this.f=skill
    this.g=job
    this.i=itijob
    }
    getName(){
    return(this.a,this.b,this.c,this.d,this.e,this.f,this.g,this.i)
    }
    }
    let s1=new student("santhosh kumar",27,"BBHHS","DECE","ECOE","FED","ITI","TCS");
    let s2=new student("kalai",23,"NNHHS","ECOE","HTML","CSS","JS","ITI","zoho");
    let s3=new student("aswith",19,"GHRSC","EPC","HTML","CSS","JS","ITI","wipro");
    s1.getName()
    console.log(s1);
    console.log(s2);
    console.log(s3);



    class Employee{
        constructor (a,b,c){
            this.name=a
            this.age=b
            this.degree=c
        }
       getDetails(){
        return `my name is ${this.name}I am ${this.age}I have completed ${this.degree}`
       } 
    }
class course extends Employee{
    constructor(a,b,c,d){
        super(a,b,c)
        this.skill=d
    }
}
let emp=new course("ES6",23,"BEECE",["I AM SOFTWARE DEVELOPER"])
console.log(emp);


