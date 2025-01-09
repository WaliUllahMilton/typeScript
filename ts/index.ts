// //basic type

// let character : string = "Milton";
// // character = 43 we will get error because we are trying to assign number type value in a string type variable

// character = "Wali ullah"

// let myNumber : number = 3424;
// // myNumber = "sdds"  error(we are trying to put string in number type)

// myNumber = 34231;

// let isChecked : boolean = true ;

// // isChecked = 34 error
// isChecked =false



// let person : object ={
//     name : "wali",
//     id : 123
// }
// console.log(person)

// person = {...person,name :"dfs"} ekhane amra jei property er value assign korbo shei property er value change hoye jabe ..any kind of type dewa jabe.
// console.log(person)

// let secondPerson :{
//     name :string,
//     id: number
// } = {
//     name : "milton",
//     id : 231
// }
// console.log(secondPerson)

// // secondPerson = {...secondPerson,name : "fsd"} ekhon type o check korbe and overwrite hobe
// console.log(secondPerson)


// any type 

// let something : any ="dsfs";  // any type dile any type of data newa jay
// something = 2132

// tuple

// let arr : [string,number] = ["sad",324]  //  arr : [string,number] evabe amra key value pair vabe array nite pari ekhane amdr first value string and second value number hote hobe and 2ta value er beshi nite parbo na.
// union type

// let a : (string | number )= "fdjsfh"; // amra union type diye multiple type assign kore dite pari jate amra ek variable e multiple type er data nite pari for example amra a the string or number type data nite parbo onno kono type nite gele error dibe
// // a = 32

// // a = true  //error
// // enum

// // enum Size {  // enmum keyword use kore amra ekta custom type er name dite pari and data save korte pari ja pore object er moto kore newa jay... by default property te kono value assign na korle 0 theke shuru kore last propertyr index hold kore r jodi first er property er valuye amra kono number assign kore dei porer gula serial e automatic assign kore ney 
// //     small,  //0   amra ekhane small = 10 assign korle
// //     medium,  //1   =11 auto hobe
// //     large  //2     =12
// // }

// // let smallSize : Size = Size.small;
// // let mediumSize : Size = Size.medium
// // console.log(smallSize,mediumSize)


// // inference 


// // let a = "milton";  // ekhane a string type inference kore nibe jar jonne future e a er vitor string badhe onno ksu assign korte gele error dibe.
// // a =345  //error

// // assertions 

// // let a : any = "sdfjk"  // amra ekhane a ke any type of value dewa te amra string er method gula suggesstion e pabo na
// // console.log(a.) // kono suggesstion nai

// // console.log((a as string).length)  // amra (a as string)  diye string er method gular suggesstion pelam. onno type value hole just string er jaygay oi type ta bole dilei hobe.


// // function 

// // function sum(a : number,b : number){  //amra function declare korar time e parameter er vitor parameter er type diye dite pari jate call dewar time onno type er data diye call dite na pare.
// //     return a + b
// // }
// // sum(2,23)

// // void

// // amra abar function kon type er data return korbe sheta o function declare korar time e bole dite pari

// // function sum(a:number,b:number) : number { // ekhane amra parameter er por  : number diye bole ditesi je function number type value return korbe onno type value return korle error dibe
// //     return a + b
// // }

// // sum(3,5)

// // function sum(a:number,b:number) : void { //by default kono type return korar kotha na bolle or function kono data return na korle ts void return kore.. void hocche undefined er moto .. explicitly void return er kotha bole dile void or undefined badhe onno ksu return korlei error dibe
// //     // return a +b  error
// //     return undefined
// // }

// // interface Person {  //amra interface keyword use kore amra amader object ki ki property thakbe and kon type er value thakbe sheta define kore dite pari
// //     name : string ,
// //     id : number
// // }

// // let milton : Person = {name :"milton",id : 2134}  // ekhane interface e dewa shob gula property e dite hobe beshio dewa jabe na kom o dewa jabe na..and data type o same thakte hobe

// // console.log(milton)



// // problem

// // //get factorial
// // function factorial(num:number):number{
// //     if(num==1) return 1;
// //     return num * factorial(num-1);
// // }
// // console.log(factorial(4))


// // get vehicle info
// type Bike = {
//     type : "bike",
//     brand : string,
//     model : string,
//     year : number
// }
// type Car = {
//     type : "car",
//     brand : string,
//     model : string,
//     year : number
// }
// type Vehicle = Bike | Car;

// function getVehicleInfo(vehicle : Vehicle){
//     let res = `vehicle: ${vehicle.type} brand: ${vehicle.brand} model: ${vehicle.model} year: ${vehicle.year}`
//     if(vehicle.type=="bike") return res
//     return res
// };

// let vehicle : Vehicle ={
//     type : "car",
//     brand:"BMW",
//     model:"hjg",
//     year :532
// }
// console.log(getVehicleInfo(vehicle))

// let vehicle2 : Vehicle ={
//     type : "bike",
//     brand:"yamaha",
//     model:"hjg",
//     year :532
// }
// console.log(getVehicleInfo(vehicle2))


class BankAccount {
    account : string;
    private balance : number;
    constructor(account : string,balance : number){
        this.account = account,
        this.balance = balance
    }
    deposite(amount : number) :void{
        this.balance += amount;
    };
    withdraw(ammount : number):void{
        this.balance -= ammount;
    };
    getBalance():number{
        return this.balance;
    }
}

// const myAccount = new BankAccount("xsahd5ydfas",100)
// console.log(myAccount.deposite(200))
// console.log(myAccount.getBalance())
// myAccount.withdraw(100);
// console.log(myAccount.getBalance())


class Employ {
   constructor(public name:string,public salary:number){
    this.name = name,
    this.salary = salary
   }
   getDetails(){
    return `name :${this.name} salary : ${this.salary}`
   }
}
class Manager extends Employ {
    constructor (public department:string,name:string,salary:number){
        super(name,salary)
        this.department = department
    }
    getDetails(){
    return `name :${this.name} salary : ${this.salary} department:${this.department}`
       }
}

const newEmploy = new Employ("sdf",654)
const newManager = new Manager("sales","dsadfas",4324)

console.log(newEmploy.getDetails())
console.log(newManager.getDetails())

