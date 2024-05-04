// Generating a random number

function randomNumber() {
  return Math.floor(Math.random() * 100);
}



// Initializations 
let orignalScore = 0;
let correctNumber = randomNumber();
let guessedNumber = prompt("Enter your guess");
guessedNumber = parseInt(guessedNumber);
console.log("I AM HERE", guessedNumber)
// Loop


while (guessedNumber != correctNumber) {
  orignalScore += 1;
  
  if (guessedNumber < correctNumber) {
    console.log("Your guess is lower than the number");
    guessedNumber = prompt("Enter your guess");
  } else if (guessedNumber > correctNumber) {
    console.log("Your guess is greater than the number");
    guessedNumber = prompt("Enter your guess");
  }
}

let correctScore = 100 - orignalScore;
// Result 
console.log(`Your score is ${correctScore} and the actual number was ${correctNumber}`);
