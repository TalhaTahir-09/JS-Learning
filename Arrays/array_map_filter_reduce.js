let arr = [1, 4, 67];

// Array map Method

let a = arr.map((element, index, array) => {
  // console.log(++element, index, array);
});
// console.log(arr);

// Array filter Method

let arr2 = [1, 5, 8, 11, 61, 199];
let x = arr2.filter((value) => {
  return value < 10;
});
let newArray = x.map((element) => {
  // console.log(element)
});
// console.log(x);

// Array Reduce Method

let arr3 = [1, 5, 8, 1, 2, 5];
let newArr3= arr3.reduce((value, value_2) =>{
    return value + value_2;
})
console.log(newArr3);