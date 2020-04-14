let prompt = require("./node_modules/prompt-sync")();
//generate random number
const ranNum = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
const randomNumber = ranNum(1, 101);
// set counter and array of guessed numbers
let counter = 1;
let guessed = [];
//set prompt
let answer = prompt("Let's play Number Guess! Guess a number between 1 and 100: ");
//run while loop
while (answer !== randomNumber) {
  if (!Number(answer)) {
    console.log(`"${answer}" is not a number! Try again!`);
    answer = prompt("Guess a number between 1 and 100: ");
  } else if (guessed.indexOf(answer) !== -1) {
    console.log(`You already guessed ${answer}! Try again!`);
    answer = prompt("Guess a number between 1 and 100: ");
  } else if (answer > randomNumber) {
    console.log("Too High! Try again!");
    counter++;
    guessed.push(answer);
    answer = prompt("Guess a number between 1 and 100: ");
  } else if (answer < randomNumber) {
    console.log("Too Low! Try again!")
    counter++;
    answer = prompt("Guess a number between 1 and 100: ");
  } else {
    console.log(`You got it! The number was ${answer}. It took you ${counter} guesses.`);
    return;
  };
};