import prompt from "readline-sync";
import wordBank from "./word-bank.js";

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");
const letter = prompt.question("Please guess a letter: ");
console.log(`You guessed the letter "${letter}"`);

/*Need to add in info so the letter taken in does not have CASE Sensitivity*/

/*Let the player know how to EXIT out of game if needed*/

/*Message to player if the letter is incorrect or not included in the word ~ enter a message to "Please try again...you have "#" of tries left in this round"*/


/*Need to add in a counter for the number of entries (Limit 6) & keep a tally for the player*/

/*BUILD THE GAME!!*/

/*Prompt the play to see if they would like to play again*/

/*If you can actually get this to work....then work on colors/design/style/maybe buttons etc.. with HTML & CSS*/



