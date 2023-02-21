// execute this from the repository root with: ts-node src/firstSession/practice/game.js
const prompt = require("prompt-sync")({ sigint: true });

// This function returns a number between the two specified values
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

// First we get a number between 0 and 100
const numberToGuess = getRandomNumber(0, 100);

// Exercise: transform the following code to have a game that checks if the number the user guessed
// is higher or lower than the target number until the user gets it
const userNumber = prompt("Guess the number: ");
console.log("The user entered the number", userNumber);
console.log("The number to guess was", numberToGuess);
