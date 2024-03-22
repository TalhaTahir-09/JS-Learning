// 77;
// "Talha Tahir";
// false;

// Operators in JS

// Arithematic Operators
console.log("Operators in Js");
let a = 54
let b= 6
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a / b =", a / b);
console.log("a * b =", a * b);

// Exponential (a to the power of b)
console.log("a ** b =", a ** b);

// Module (remaider of a Multiplication)

console.log("a % b =", a % b); // Remainder will be zero because it fully divides

console.log("a % b=", 41 % 10); // Remaider will be 1 because 1

// Increment(increases value by 1) and Decrement (decreases value by 1) Operators

console.log("a++ =", a++); // value is shown first and then increased by 1
console.log(a);
console.log("++a =", ++a); // value is increased first and then showed

console.log("a-- =", a--) // value was 56 so it was showed first and then decreased
console.log(a);

console.log("--a =", --a); //value is decreased first and then showed


// Assignment Operators

let assignment = 1;
assignment += 5; // same as assignment= assignment + 5
console.log("assignment =", assignment)

assignment = 1;
assignment -= 5;
console.log("assignmen -=", assignment)

assignment = 2;
assignment *= 5;
console.log("assignmen *=", assignment)

assignment = 10;
assignment /= 5;
console.log("assignmen /=", assignment)


assignment = 11;
assignment %= 5;
console.log("assignmen %=", assignment)

assignment = 11;
assignment **= 5;
console.log("assignmen **=", assignment)


// Comparison Operators

let comp1 = 11;
let comp2 = "11"
let comp3 = 15;
let comp4 = 16;
console.log("comp1 == comp2", comp1==comp2)
console.log("comp1 != comp2", comp1 !=comp2)
console.log("comp1 == comp2", comp1===comp2) // check the value and type aswell
console.log("comp1 != comp2", comp1 !==comp2)

console.log("comp3 is <= comp4", comp3 <= comp4);
console.log("comp3 is >= comp4", comp3 >= comp4);


// Logical Operators

let x = "5";
let y= 8;
console.log(x<y && x==5); // if both are true than return true

console.log(x<y || x==5); // if one is true than return true

console.log("!false equals to ", !false) // ! turns false to true and true to false
console.log("!true equals to ", !true)
