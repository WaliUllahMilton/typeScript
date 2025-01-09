//regular function
// function add(a:number,b:number):number{ //ekhane amra parameter e ki ki value nibe r ki type er ta define kore dilam and last e number return korbe shetaw bole dilam..
// return a+b  //number badhe onno ksu return korle error dibe
// }
// console.log(add(3,5))


//function expression
// const add = function(a:number,b:number):void{
//     console.log(a+b);
// }
// add(3,5)

//arrow function 
// const add = (a:number,b:number):void=>{
//     console.log(a+b);
// }
// add(3,5)

// default parameter

// function multiply(a:number=10,b:number=10){console.log(a*b)} //=diye amra default parameter er value assign kore disi..ekhn function call e jodi kew parameter na pass kore tahole default value niye function execute korbe
// multiply()

// const mul = (a:number=100,b:number=0)=>{
//     console.log(a*b)
// }
// mul()

// optional parameter

// function divide(a:number,b?:number):void{ //amra b te ? diye bole disi je b optional argument e b jodi pass na o kore problem nai function kono error dibe na
//     console.log(a/20)
// }
// divide(50)

// function overloading
//  function overloading er maddhome typeScipt multiple function signature allow kore amader

// function getLength(value : string):number;
// function getLength(value : any[]):number;
// function getLength(value : any):number{
//     return value.length
// }

// console.log("1",getLength("sdfsf"));
// console.log("2",getLength([1,3,4]))
// console.log("3",getLength("asd"))

//rest operator

// function printAll(...all:number[]):void{  //rest operator must be an Array
//     let allNum ;
//     allNum = all.reduce((acc,curr)=>{
//         return acc+curr
//     },0)
//     console.log(allNum)
// }
// printAll(12,324,3,435,345,3465,345)


// problem: write a ts function to calculate the factorial of a number with proper type annotation

// function factorial(num:number):number{
//     if(num==1) return 1;
//     return num * factorial(num-1);
// }
// console.log(factorial(4));
