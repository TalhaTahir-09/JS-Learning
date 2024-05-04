console.log(window);
window.console.log(window);
document.body.style.backgroundColor = "red";

let userName = prompt("Enter your username");

const welcomeMsg = document.getElementById("hello-msg");
welcomeMsg.textContent =
  userName === null || userName === "" ? "Hello Guest" : "Hello " + userName;
console.log(userName);
