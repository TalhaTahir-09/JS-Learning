let num = [1, 2, 3, 4, 5, 6];
let b = num.toString();
// console.log(typeof b);
// let d= num.join("-");
// console.log(d);

/*
num.pop()
console.log(num)
*/
// let r = num.pop()
// console.log(r)
// let t = num.push(90) // gives the array length, not the pushed value
// console.log(t, num)

// let u = num.shift(); // pop but removes the first value
// console.log(u , num)
// let un = num.unshift(90); // pop but removes the first value
// console.log(un , num)

// delete num[0];
// console.log(num, num.length) // length does not change

let a1 = [1, 2, 3, 4, 5, 6];
let a2 = [7, 8, 9, 10];
let a3 = [11, 12, 13, 14, 15, 16];
let newArray = [13, 41, 6141, 91, 193, 123, 231];

// let a_new_array= a1.concat(a2);
// let a_new_array= a1.concat(a2, a3);

// console.log(a_new_array)

// Sort

let compare = (a, b) => {
  return a - b;
};
let compareDescending = (a, b) => {
  return b - a;
};
// newArray.reverse();
// newArray.sort(); // sorting the array alphabetically as a string
// newArray.sort(compare); // now sorting in ascending order
//newArray.sort(compareDescending); // now sorting in ascending order
// console.log(newArray);

// Splice and slice
// Splice returns deleted values

// a1.splice(2, 2, 1001, 1002, 1003);
// console.log(a1);
// let deletedValues = a1.splice(2, 2, 1001, 1002, 1003);
// console.log(deletedValues)

// slice does not change the orignal array
let newA1 = a1.slice(2, 5);
console.log(newA1);


