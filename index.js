var inquirer = require("inquirer");
const Word = require("./Word");

//Word bank
const wordList = ["cookies", "pastries", "brownies", "pie", "cupcake", "candy"];

//Variables to store guesses remaining and arrays to hold guesses
let guessesRemaining;
let correctlyGuessedWords;
// let incorrectGuesses;
let wordFromList;
let word;

//Introduction to game
function intro() {
  correctlyGuessedWords = [];
  console.log("\n");
  console.log("--------------------------------------");
  console.log("Welcome to the Bakery Word Guess Game!");
  console.log("--------------------------------------");
  startGame();
}

//Start game function with inquirer prompts
function startGame() {
  wordFromList = "";
  guessesRemaining = 10;
  if (correctlyGuessedWords.length < wordList.length) {
    wordFromList = getWord();
  } else {
    //Winner winner chicken dinner!
    console.log("Nice to know a fellow confection connoisseur!");
    beginAgain();
  }
  if (wordFromList) {
    word = new Word(wordFromList);
    word.makeLetters();
    makeGuess();
  }
}

//Grab random word from word list, see if it's been guessed, return new word if so
function getWord() {
  var random = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[random];
  if (correctlyGuessedWords.indexOf(randomWord) === -1) {
    correctlyGuessedWords.push(randomWord);
    return randomWord;
  } else {
    return getWord();
  }
}

//Prompt user for letters, check if correct, subtract from guesses remaining if incorrect
function makeGuess() {
  let correctLetters = [];
  inquirer.prompt([
    {
      name: "guess",
      message:"\nGuess a letter!" +
              "\n" + word.update() +
              "\n" +
              "\nGuesses remaining: " + guessesRemaining +
              "\n"
    }
  ]).then(function (char, error) {
    word.letters.forEach(function (character) {
      character.isCorrect(char.guess);
      correctLetters.push(character.toString());
      if (error) throw error;
    });

    //Guesses remaining neeeds more research into creating a check against
    //what has already been guessed. Right now it reduces by 1 with each guess.
    if (guessesRemaining > 0 && correctLetters.indexOf("_") !== -1) {
      guessesRemaining--;
      if (guessesRemaining === 0) {
        console.log(
          "\n" +
          "Sorry, no more guesses." +
          "\n");
        beginAgain();
      } else {
        makeGuess();
      }
    } else {
      console.log("Simply scrumptious! Way to go!");
      console.log(word.update());
      console.log("------------------------------")
      startGame();
    }

  });
}

//Prompt user to begin again if he or she so wishes
function beginAgain() {
  inquirer.prompt([
    {
      name: "replay",
      type: "list",
      message: "Play again?",
      choices: ["Yes", "No"]
    }
  ]).then(function (answer) {
    if (answer.replay === "Yes") {
      intro();
    } else {
      console.log("Until next time!")
    }
  });
}

intro();