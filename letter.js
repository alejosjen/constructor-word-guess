var Letter = function (character) {
    this.character = character;
    this.isGuessed = false;
}

Letter.prototype.toString = function(){
    if(this.isGuessed === true){
        return this.character;
    } else {
        return "_";
    }
}
Letter.prototype.isCorrect = function (character) {
        //check if correct, update to true if so
    if (character.toLowercase() === this.character.toLowerCase()){
    this.isGuessed = true;
    return true;
    } else {
        return false;
    };
};

module.exports = Letter;