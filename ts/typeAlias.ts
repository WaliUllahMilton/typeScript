// // type er maddhome amra new type fixed korte pari,mani type alias amader allow kore ekta meaning full name dite ekta particular type ke, it can be primitive non-primitive anythings..

// // interface er moto type o amader ke help kore code ke more readable and reuse korte

// //type AliasName = typeDefination;

// type User = string // amra eekhane user er vitor ekta type set kore disi ekhon jekhane User type use kora hobe shekhane auto ei type chole jabe

// let milton:User = "milton"  // string badhe ksu nile error dibe/ amra User ekta meaning full type diyechi ekhn iccha moto reuse kora jabe 


// // type in obj 
// // type Person = {
// //     name : string;
// //     age:number
// // };

// // let wali :Person = {name:"wali",age:12}

// // union in type 

// type Id = string | number  //amra ekhane union operator use kore Id ke string or number type banalam.Id can take string or number

// let myId : Id = 3424;
// let herId : Id ="sdsf"

//inheritance
// type Vehicle = {
//     make:string,
//     model: string
// }
// type Car = Vehicle & {  // & (interdection type) diye type Alias e inheritance kora hoy
//     year : number
// }

// const myCar : Car = {make:"made in BD",model:"abc2025",year:2025}
// console.log(myCar.make)


//function type Alias

// type Mathop = (a:number,b:number)=>number
// let add: Mathop = (a,b)=>a+b
// console.log(add(5,6))