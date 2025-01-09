// interface diye amra amader object er structure create kori.. amra bole dite pari je amader obj er vitor ki ki property thakbe and ki ki method thakbe.

// interface User {
//     email: string,
//     userId: number
// }

// const milton:User = {email:"dfs@hd",userId:6786} //interface er vitor jei koyta property ase shob dite hobe tar beshi or kom dewa jabe na..

//optional

// interface User {
//     email: string,
//     userId: number,
//     googleId?: string   //? diye optional bujay ei property na dileo hobe
// }

// const milton:User = {email:"dfs@hd",userId:6786}


//readonly

//readonly property can't be update only can be read the value of property
// interface User {
//     readonly dbId: number
//     email: string,
//     userId: number
// }

// const milton:User = {dbId:2123,email:"dfs@hd",userId:6786}

// milton.email="fd5@sfd"
// milton.dbId =76 // readonly dile amra r oi property update korte parbo na just read korte parbo

// method in interface

// interface User {
//     readonly dbId : number,
//     email: string,
//     userId: number
//     startTrail: () => string //1st way to define method, anything can be return like number,boolean,void etc
// }

// const milton:User = {dbId:231,email:"dfs@hd",userId:6786,startTrail:()=>{
//     return "started"
// }}

// interface User {
//     readonly dbId : number,
//     email: string,
//     userId: number
//     startTrail():string //2nd way to define method, anything can be return like number,boolean,void etc
// }

// const milton:User = {dbId:231,email:"dfs@hd",userId:6786,startTrail:()=>{
//     return "started"
// }}

//passing parameter in function


// interface User {
//     readonly dbId : number,
//     email: string,
//     userId: number
//     startTrail():string //2nd way to define method, anything can be return like number,boolean,void etc
//     getDiscount(couponName:string,value :number): number
// }

// const milton:User = {dbId:231,email:"dfs@hd",userId:6786,startTrail:()=>{
//     return "started"
// },getDiscount(name : "sdjf",vl:231) { //argument e variable name r parameter er variable name match na korleo problem nai
//     return 20
// },}


// amra jokhn ts code run kori tokhn interface js e convert hoy na, interface use kore amra obj er structure er type safety kori. 


//inheritance in interfaces

// interface User {
//     name: string,
//     phone:number
// }
// interface Customer extends User {  //inheritance in interface with extends
//     address:string
// } 
// let milton:Customer={name:"milton",phone:213,address:"hjadh"}
// console.log(milton.name)

//2nd way 
interface User {
    name: string,
    phone:number
}
interface  User {  //inheritance in interface without extends
    address:string
} 
let milton:User={name:"milton",phone:213,address:"hjadh"}
console.log(milton.name)