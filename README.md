# constructor-word-guess

Hi and welcome! This command-line game is for the user to guess words based on yummy treats found in a bakery.

## Game
-To start:
  -Enter in the command line 
    -node index.js

-To play:
  -Enter a letter from the keyboard
  -If you guess correctly, your letter will show up in the word.
  -If you guess incorrectly, your letter is eaten by the cookie monster (not literally).

-End of Round or Game
  -If you guess the whole word correctly, you'll be presented with a new word to play.
  -If you run out of guesses, the round is over and you can press the arrow keys to choose **Yes** to play again or **No** to end the game.

## Start of game
![Gif of start of game](https://thumbs.gfycat.com/RawSlipperyCurlew-small.gif)

## End of Round & Prompt
![Gif of rounds and prompts](https://thumbs.gfycat.com/ForsakenUnacceptableAstrangiacoral-small.gif)
### Notes
The challenge was using Javascript constructor functions and then having each constructor export to another file. The index.js runs the game and utilizes Word.js to store, format, and update words. Word.js utilizes Letter.js to turn user input into strings and checks the value for use in the game, whether the letter is put into play or discarded and the placeholder remains. 

I learned a great deal about exporting in regards to the single responsibility principle. Once one function was complete I could leave it alone and work on the next part. I think in future I would create more files to manage running different parts of the game because it became difficult to read and remember where functions were.

The game's functionality is a little off, because any guess decreases your time in the game. It needs more work in creating a discard array and using that to decrease the guesses remaining. It also needs more error handling to check against a user inputting the same or multiple values or entering nonsense or empty strings.
