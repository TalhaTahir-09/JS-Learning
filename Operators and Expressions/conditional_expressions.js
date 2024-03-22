 let a = prompt("Hey! What's your age?");
a = Number.parseInt(a); // converting string to a number
console.log(typeof a);
if (a <= 0) {
  alert("This is an Invalid Age");
} else if (a <= 10) {
  alert("You are a kid and dont even think about driving");
} else if (a > 10 && a < 18) {
  alert("You are a teenager and can not drive yet.");
} else {
  alert("This is a Valid Age Congratulations!");
}
// Ternary operator
console.log("You can", (a<18? "not drive":"drive"));

// Swicth
/*
let fruitName = prompt("Enter a Fruit you want to Buy:")
fruitName= fruitName.toLowerCase();

switch (fruitName) {
  case "oranges":
    alert("2 dollars and 50 cents");
    break;
  case "mangoes":
    alert("3 dollars and 35 cents");
    break;
  case "papayas":
    alert("50 dollars and 250 cents");
    break;
  default:
    alert(`Sorry we don't have ${fruitName}`)
}
*/