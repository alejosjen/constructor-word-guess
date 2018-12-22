var LETTER = function () {
    // this.storeLettersOfTheWord = [];
    this.matchedLetters = [];
    // this.wrongGuesses = [];
    this.letterDisplay = "";
    this.wordFromBank = wordFromBank;
    this.lettersOfTheWord = wordFromBank.split("");
    this.returnUnderscoreOrLetter = function () {
        for (var i = 0; i < this.lettersOfTheWord.length; i++) {
            if (this.matchedLetters.indexOf(this.lettersOfTheWord[i]) !== -1) {
                letterDisplay += this.lettersOfTheWord[i];
            } else {
                letterDisplay += " _";
            }
        }
    };
    this.checkLetters(letter) = function() {
        var letterInWord = false;
        for (var j = 0; j < lettersOfTheWord.length; j++) {
            if (wordFromBank[j] === letter) {
                letterInWord = true;
            }
        }
    }

};




module.exports = LETTER;