var inquirer = require("inquirer");
const Word = require("./Word");

let wordList = ["cookies", "pastries", "brownies", "pie", "cupcake", "candy"];
var word = wordList[Math.floor(Math.random() * wordList.length)];
const randomWord = new Word(word);
console.log("Guess a letter: " + randomWord.toString());
console.log("2nd Out of startGame check :" + randomWord.makeGuess());


var displayInfo = function () {
  console.log("\nCorrect or Incorrect" +
    "\nGuesses remaining:" + guessesRemaining +
    "\nGuess a letter!" +
    "\n" + randomWord.toString())
}

var guessesRemaining = 9;
var correctLetters = [];
var wrongGuesses = [];

var startGame = function () {
  if (guessesRemaining < 1) {
    displayInfo();
    inquirer.prompt([
      {
        type: "input",
        name: "guess",
        messages: "Guess a letter!"
      }
    ]).then(function (characters) {
      console.log(randomWord.toString());
      randomWord.makeGuess(characters);
      correctLetters.push(randomWord);
      console.log(displayInfo());
    });
  }

}
startGame();






