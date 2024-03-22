// console.log("Hello");
// // afafaf
// // afafaf
// // afafaf
// // afafaf
// // afafaf

// console.log("Hi");

// function sayHi() {
//     let x = '2002';
//     console.log(x);
// }
// sayHi()
// sayHi()
// sayHi()

// Global scope
// let x = 5;
// var y= 6;
// const talha = 9;

// Local scope
// {
//   let x = 90;
//   console.log(x);
// }
// function myFunc() {
//   var x = 60;
//   console.log(x);
//   {
//     let y = 90;
//     console.log(y);
//   }
// }
// myFunc()

// function sum(a, b){
//     console.log(a + b)
// }
// sum(29, 3)


// Revision

// Global Scope
/*
let x = 5;
var y = 10;
const z= 22;

console.log(`global-x: ${x}`);
console.log(`global-y: ${y}`)
console.log(`global-z: ${z}`)

function myFunc() {
    let x= 8;
    var y= 11;
    const z= 23;
    // console.log(`function-x: ${x}`)
    // console.log(`funtion-y: ${y}`)
    // console.log(`function-z: ${z}`)
    {
        let x= 9;
        var y= 13;
        const z= 24;
        console.log(`block-x: ${x}`)
        console.log(`block-y: ${y}`)
        console.log(`block-z: ${z}`)
        
    }
    console.log(`function-x: ${x}`)
    console.log(`funtion-y: ${y}`)
    console.log(`function-z: ${z}`)
}
myFunc()

*/
function avgSumPlus(x, y){
    return  1+(x+y)/2;
}
const sum= (p,q) =>{
    return p +q;
};
const hello=() => {
    console.log("Hello how are you? I am fine!")
}
let a =5;
let b= 7;
let c= 44;
let d= 32;
// console.log("Average sum of a and b = " + avgSumPlus(a,b));
// console.log("Average sum of c and b = " + avgSumPlus(c,b));
// console.log("Average sum of c and d = " + avgSumPlus(c,d));
console.log("Sum of 8 and 10 = " + sum(8,10))
hello();