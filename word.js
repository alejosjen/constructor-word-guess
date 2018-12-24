const Letter = require("./Letter");

function Word (word){
    //console.log("Random word from array: " + word)
    this.word = word;
    this.letters = [];
    this.makeLetters = function(){
       //Make an array
    const stringifiedLetters = this.word.split("");
    //Map is an empty array, it calls function and pushes the return to itself as a callback
    this.letters = stringifiedLetters.map(function(character){
       //needs return, the new Letter is the callback function passing in the character
        return new Letter(character)
    }); 
    }
}

//Join array
Word.prototype.toString = function (){
        //.join will automatically loop and bring things together
        //toString prints as a string 
        return this.letters.join(" ");
    }

//Takes the argument and calls second function for the guess function on each letter
Word.prototype.makeGuess = function(character){
    console.log("Guessed letter: " + character);
    this.letters.forEach(function(character) {
        character.isCorrect(character);
    });
}

//Update display of word in game
Word.prototype.update = function(){
    let displayWord = "";
    this.letters.forEach(function(character){
        displayWord += character.toString() + " ";
    });
    return displayWord;
}

module.exports = Word;