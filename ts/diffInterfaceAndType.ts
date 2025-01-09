//difference btwn interface and type alias  :

// interface User {
//     name: string,
//     phone:number
// }
// interface Customer extends User {  //inheritance in interface
//     address:string
// } 
// let milton:Customer={name:"milton",phone:213,address:"hjadh"}
// console.log(milton.name)

// type Vehicle = {
//     make:string,
//     model: string
// }
// type Car = Vehicle & {  // & (interdection type) diye type Alias e inheritance kora hoy
//     year : number
// }

// const myCar : Car = {make:"made in BD",model:"abc2025",year:2025}
// console.log(myCar.make)


// interface User {
//     name: string,
//     phone:number
// }
// interface  User {  //inheritance in interface without extends
//     address:string
// } 
// let milton:User={name:"milton",phone:213,address:"hjadh"}
// console.log(milton.name)

// amra  interface extends na kore evabe type abar dile automatic inheritance hoye jay kintu typeAlias e hoy na

// type Vehicle = {
//     make:string,
//     model: string
// }
// type Vehicle {  // Interface er moto type Alias e evabe kora jay na.
//     year : number
// }