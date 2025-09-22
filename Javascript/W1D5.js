const readline = require("readline");

// Zufallszahl zwischen 1 und 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

// Versuchszähler
let guesses = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Number Guessing Game!");
console.log("Guess a number between 1 and 100");

function askGuess() {
  rl.question("Your guess: ", (input) => {
    const guess = parseInt(input, 10);
    guesses++;
    if (isNaN(guess)) {
      console.log("❌ Please enter a valid number!");
      guesses = guesses - 1
      askGuess();
    } else if (guess < secretNumber) {
      console.log("⬆️ Higher!");
      askGuess();
    } else if (guess > secretNumber) {
      console.log("⬇️ Lower!");
      askGuess();
    } else {
      console.log(`🎉 Correct! The number was ${secretNumber}. You needed ${guesses} guesses!`);
      rl.close();
    }
  });
}

askGuess();