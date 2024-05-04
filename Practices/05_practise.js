// Take number from user and add in to some array

/*
let arr = [1, 12, 18, 17];
let addNumber = prompt("Enter and numeric value");
addNumber = Number.parseInt(addNumber);

arr.push(addNumber);
console.log(arr);
// Take number from user and add in to some array unitl 0 is added


let arr = [1, 12, 18, 17];
let addNumber;
do{
    addNumber = prompt("Enter and numeric value");
    addNumber = Number.parseInt(addNumber);
    
    arr.push(addNumber);
    console.log(arr);
}while(addNumber != 0);

*/


// filter 4 number divisibel by 10

let arr2 = [11, 10, 15, 20, 50, 40];

let x = arr2.filter((value) => {
  return value % 10 == 0;
});
// console.log(x);

// Square of given numbers

let arr3 = [2, 5, 4, 6];
let y = arr3.map((value) => {
  return value ** 2;
});
// console.log(y);

// factorial of any given number

let arr4 = [1,2,3];

let z = arr4.reduce((value, value_2) =>{
    return value*value_2;
})
console.log(z);