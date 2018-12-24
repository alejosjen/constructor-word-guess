var Letter = function (character) {
    this.character = character;
    this.isGuessed = false;
}

//Use to input correct letters or return underscores
Letter.prototype.toString = function () {
    if (this.isGuessed === true) {
        return this.character;
    } else {
        return "_";
    }
}

//Use to see if input is correct or not, compares at lowercase
Letter.prototype.isCorrect = function (char, error) {
    //check if correct, update to true if so
    if (error) throw error;
    if (char.toLowerCase() === this.character.toLowerCase()) {
        this.isGuessed = true;
        return true;
    } else {
        return false;
    };
};

module.exports = Letter;