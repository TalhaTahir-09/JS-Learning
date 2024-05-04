/* const ageTeller = (age) => {
  return age >= 18 ? true : false;
};
while (true) {
  let age = prompt("Enter your age!");
  age = Number.parseInt(age);
  if (age < 0){
    console.error("You entered an invalid value")
    break;
  }
  if (ageTeller(age)) {
    alert("You can drive!");
  } else {
    alert("You can not drive");
  }
  if (!confirm("Do you want to enter your age again")) {
    break;
  }
}

*/

/*
let redirectValue = 4;
let userValue = prompt("Enter the redirection value!");
userValue = Number.parseInt(userValue)
if(userValue === redirectValue){
    location.href = "https://www.youtube.com/";
}
*/

let colorPicker = ["red" , "green" , "yellow"]
let userValue = prompt("Enter a value from 0 - 2");
userValue = Number.parseInt(userValue);

document.body.style.backgroundColor = colorPicker[userValue];

