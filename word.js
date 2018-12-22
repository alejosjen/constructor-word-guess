var LETTER = require("./Letter.js");

var WORD = function () {
    var currentWord = new LETTER([]);
    currentWord.returnUnderscoreOrLetter().join(" ");
    currentWord.checkLetters(letter);
};



    wordBank = wordsList[Math.floor(Math.random() * wordsList.length)];



module.exports = WORD;