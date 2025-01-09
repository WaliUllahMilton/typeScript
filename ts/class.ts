class Person   {
    name:string;  //ekhane amra je string type bole dficchi eta ke type annotation bole mani amra ki propertyr type ki hove ta bole ditesi
    age: number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }
    greet():void{console.log("hi",this.name)}
}
const Newmilton = new Person("milton",12)
Newmilton.greet()