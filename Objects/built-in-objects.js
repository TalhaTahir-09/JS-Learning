// Time and intervals
// setTimeout(function(){
//     console.log("Finished!")
// }
// , 1000)

// setInterval(function(){
//     console.log("Ping!")
// },500 );
// const interval = setInterval(function(){
//     console.log("Ping!")
// },500 );

// setTimeout(function(){
//   clearInterval(interval);
// }, 2900);


// Formats and Values

// let a = 20;
// console.log(a, toString());
// let a = 20;
// let str = a.toString();
// console.log(str);
// console.log(typeof str)

// let a = 10.4;
// console.log(a.toFixed());
// str = a.toString();
// console.log(typeof str);


// String Functions


// let string = "Any String here!";
// console.log(string.split(' '));


// Math Functions

// let a = -3.2;
// console.log(Math.random());
// let rnd = Math.ceil(Math.random() * 100) + 1;
// console.log(rnd);

// Date objects


// let todayDate = new Date(2009, 8 , 24);
// console.log(todayDate);
// let todayDate = new Date();
// console.log(todayDate.getUTCHours());


// Regular Expressions

// let x = "string";
// let pattern = /str/;
// console.log(pattern.exec(x));


// Number

// let x = 505000/0;
// console.log(Number.isFinite(x))

// function test(x , y){
// if(Number.isInteger(x / y)){
//     return 'Yes Sir';
    
// }
// return 'No Sir';
// }

// console.log(test(5, 0))
// console.log(test(5, 5))


// Array

// let fruits = ["Apple", "Banana", "Grape"];
// console.log(fruits[1]);

// Error
// let error = new Error("Something went wrong!");

// function test(x, y){
//     if(Number.isFinite(x / y)){
//         return 'It a Number';
//     }
//     else return error;
// }
// console.log(test(5, 8))