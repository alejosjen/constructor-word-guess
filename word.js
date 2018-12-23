const Letter = require("./Letter");

var Word = function(word){
    console.log("From Word.js " + word)
    //Make an array
    const stringifiedLetters = word.split("");
    //Map is an empty array, it calls function and pushes the return to itself as a callback
    this.letters = stringifiedLetters.map(function(character){
       //needs return, the new Letter is the callback function passing in the character
        return new Letter(character)
    });
}
Word.prototype.toString = function (){
        //.join will automatically loop and bring things together
        //toString prints as a string 
        return this.letters.join(" ");
    }

//Takes the argument and calls second function for the guess function on each letter
Word.prototype.makeGuess = function(character){
    var foundLetter = false;
    this.letters.forEach(function(character) {
        if (this.letters.isGuessed(character)) {
            foundLetter = true;
        }
    })
    console.log("\n" + this + "\n");
    return foundLetter;
}

module.exports = Word;