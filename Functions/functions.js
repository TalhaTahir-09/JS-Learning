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