let userPick = prompt("Enter S -scissors, R -rock and P -Paper");

let valueArr = ["S", "R", "P"];
const getRandomValue = () => {
  return Math.floor(Math.random() * 3);
};

let randomNumber = getRandomValue();

let computerGuess = valueArr[randomNumber];
while (true) {
  if (userPick === computerGuess) {
    alert("Both picked Same");
  } else if (userPick === "S" && computerGuess === "P") {
    alert(`You Won! Computer picked ${computerGuess}`);
  } else if (userPick === "P" && computerGuess === "R") {
    alert(`You Won! Computer picked ${computerGuess}`);
  } else if (userPick === "R" && computerGuess === "S") {
    alert(`You Won! Computer picked ${computerGuess}`);
  } else {
    alert(`You Lost! Computer picked ${computerGuess}`);
  }
  if (!confirm("Do you want to play again?")) {
    break;
  } else {
    userPick = prompt("Enter S -scissors, R -rock and P -Paper");
    valueArr = ["S", "R", "P"];
    getRandomValue()
    randomNumber = getRandomValue();
    computerGuess = valueArr[randomNumber];
  }
}
