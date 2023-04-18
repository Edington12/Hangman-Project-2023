import prompt from "readline-sync";
import wordBank from "./word-bank.js";


console.log("\nWelcome to Hangman!\n\nTo play this game you will need to guess letters for a ramdonly selected word - after each guess please hit the ENTER key.\nYou will get 6 tries to complete the word and build the hangman.\nIf you would like to stop the game at any point you can:\n\nPRESS ctrl+c to stop the game.\n\nGood Luck & Enjoy!!\n");


/*console.log("\nWelcome to Hangman!\nPress ctrl + c to stop the game\n");*/
/*const guessLetters = prompt.question("Please guess a letter: ");
console.log(`You guessed the letter "${guessLetters}"`);*/


const startGame = () => {
/*RETURN A RANDOMWORD FROM THE WORDBANK*/
  const pickRandomWord = () => {
    return wordBank[Math.floor(Math.random() * wordBank.length)];

  };
  



/*define GAME VARIABLES inside my start game function*/

/*change word to lowercase*/
    let randomWord = pickRandomWord().toLowerCase();

/*an array for guessed letters*/
  let guessedLetters = [];

/*Track the number of guesses left*/
  let guessesRemaining = 6;

/*Input of the person guessing the letters*/
//let inputGuess;

/*The answer and has won/lost etc..*/
//let correctAnswer = Array(randomWord.length).fill("_");

 /*is game running/complete...*/
  let isgameOver = false;


 /*Build the hangman*/
    //let buildHangMan = [];

/*GAME FUNCTIONS*/
/*Displaying the game status*/


  const guessLetters = prompt.question("Please guess 1 letter: ");

/*Function to see if the guess is correct*/
  
  function checkGuess() {
    if (guessedLetters.includes(guessLetters)) {
      console.log(`Please try again - you have already guessed this letter "${guessedLetters}".`);
      } else if (randomWord.includes(guessLetters)) {
          console.log(`This is a correct guess :) The letter "${guessLetters}" is in the word.`);
          guessedLetters.push(guessLetters);
          guessesRemaining--;
        } else {
            console.log(`This is an incorrect guess.  The letter "${guessLetters}" is not in the word.`);
            guessesRemaining--;
      //displayGameStatus();
    }
  }

  /*update guessed letter etc*/

  function displayGameStatus() {
    let randomWordDisplay = " ";
    for (let char of randomWord) {
      if (guessedLetters.includes(char)) {
        randomWordDisplay += char + " ";
      } else {
        randomWordDisplay += "_ ";
      }
    }
    console.log(`RandomWord: ${[randomWordDisplay].join(" ")}`);
    console.log(`GuessedLetters: ${[guessLetters].join(", ")}`);
    console.log(`GuessesRemaining: ${[guessesRemaining--]}`);
  }


/*Function to see if the guess is correct*/
  
  /*function checkGuess() {
    if (guessedLetters.includes(guessLetters)) {
    console.log(`Please try again - you have already guessed this letter "${guessedLetters}".`);
    } else if (randomWord.includes(guessLetters)) {
    console.log(`This is a correct guess :) The letter "${guessLetters}" is in the word.`);
    guessedLetters.push(guessLetters);
    guessesRemaining--;
      } else {
    console.log(`This is an incorrect guess.  The letter "${guessLetters}" is not in the word.`);
    guessesRemaining--;
    //displayGameStatus();
  }
}*/









/*guess = guess.toLowerCase();*/
/*Display the Randomly picked word*/
/*console.log(pickRandomWord);*/

/*Function to see if the guess is correct*/



/*Main While loop for the game*/

  while (!isgameOver) {
      checkGuess();
      displayGameStatus();
      if (guessesRemaining === 0) {
        console.log("The game is over - you have run out of guesses.");
        console.log(`The word was: "${randomWord}"`);
        isgameOver = true;
      } else if ("!guessedLetters".split(" ").every(char => guessedLetters.includes(char))) {
          const guessLetters = prompt("Please enter 1 letter as your guess: ").toLowerCase();
          if (guessedLetters.length === 1 && guessedLetters.match(/[a-z]/)) {
              checkGuess();
          } else {
              console.log("Please enter 1 letter as your guess. ");    
          }  
      } else {
        console.log("Great job! Congratulations ~ you have guessed the correct word.");
        //console.log(buildHangMan[a]);
        isgameOver = true;
        
      }
  }

};



/*Starting the game*/
startGame();






/*Create a function to display the randomly picked word*/

/*const answer = [];*/
//guessedLetters = guessedLetters.toLowerCase();
/*for (let a = 0; a < pickRandomWord.length; a++) {
  guessedLetters[a] = "_";
};*/

/*const displayRandomWord = (word, guessLetters) => {

}*/

//let picked = pickRandomWord;
/*const displayRandomWord = (pickRandomWord) => {
  let str = '${pickRandonWord}';
  return str.length + "_ ";
  
  };*/


/*const guessLetters = prompt.question("Please guess a letter: ");
console.log(`You guessed the letter "${guessLetters}"`);*/


/*const guessLetters = [];*/
/*guessLetters = guessedLetters.toLowerCase();
for (let a = 0; a < pickRandomWord.length; a++) {
  answer[a] = "_";

}*/

/*const getGuess = (guessedLetters) => {
  return(guessedLetters.toLowerCase());

}*/


/*const randomWord  = (wordBank) => {
  return (wordBank.length + "_ ");

}*/




/*Display the current state of the word with underscores for unguessed letters and the correctly guessed letters*/

/*function displayWord(pickedRandomWord, guessedLetters) {
  return ('_' * (pickRandomWord.length));*/


/*const pickedRandomWord = (pickedRandomWord, a) => {
  console.log(`${a+1}  ${picked}`);

};*/

/*let picked = pickRandomWord;
const countNumberOfLetters = (picked) => {
  let str = '${picked}';
  return str.length + "_ ";
  
  };*/

/*Prompt the player to enter a letter and return it as a lowercase string (non-case senstitivty)*/


/*const getGuess = (guessedLetters) => {
  return(guessedLetters.toLowerCase());

}*/

/*Returns true if the guess has already been guessed, and false if it hasn't been guessed*/

/*const isAlreadyGuessed = (guess, guessedLetters) => {
  if guess = guessedLetters
}*/

/*const isGuessCorrect = (guess) => {
  pickRandomWord.indexOf(guess) !== -1; {
    return true
  }   else { 
  return false

};*/




/*Add/update the guess to the list of guessed letters*/

/*function updateGuessedLetters (guess) { 
  if (guessedLetters.indexOf(guess) === -1) {
    guessedLetters.push(guess)
  }
}*/

/*function updateGuessedLetters(guess, guessedLetters) {


}*/

/*return true if the guess is in the word and false if it is not*/


/*function isGuessCorrect(guess, word) {


}*/

/*decrease the number of guesses remaining if the guess is incorrect* (what about if it is correct?)*/

/*const decreaseGuessesRemaining = (isGuessCorrect, guessesRemaining) {

}*/ 

/*function decreaseGuessesRemaining() {
  guessesLeft--;
}*/

/*Returns true if the game is over (either the player has guessed the word or they ran out of guesses), or false if the game is not over*/

/*function isGameOver(word, guessedLetters, guessesRemaining) {


}*/

/*Display a message when the game is over & ....(ask if they would like to play again???)*/

/*function displayEndOfGameMessage(isWin, word) {

}*/


/*Need to add in info so the letter taken in does not have CASE Sensitivity*/

/*Let the player know how to EXIT out of game if needed*/

/*Message to player if the letter is incorrect or not included in the word ~ enter a message to "Please try again...you have "#" of tries left in this round"*/


/*Need to add in a counter for the number of entries (Limit 6) & keep a tally for the player*/

/*BUILD THE GAME!!*/

/*Prompt the player to see if they would like to play again*/

/*If you can actually get this to work....then work on colors/design/style/maybe buttons etc.. with HTML & CSS*/



