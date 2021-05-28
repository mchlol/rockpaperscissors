// ROCK PAPER SCISSORS - played in console

/* 
create an array with rock, paper, scissors
randomly return an integer between 0 and 2
use that number as the index of the array to be returned
*/

function computerPlay() {
    let computerTurnOptions = ["ROCK", "PAPER", "SCISSORS"]; // create array with three options
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    } // select a random number between a specific range
    let randomNumber = Math.floor(getRandom(3,0)); // call random number from 0-2, rounded to nearest integer 
    return computerTurnOptions[randomNumber]; // use the random number to select the index of the array
}


/* 
player inputs rock paper or scissors
input is converted to upper case
computer will play rock paper or scissors
check if player choice is winner or loser or tie
  if player choice == computer choice return tie
  if player == rock && computer == scissors return win
  if player == scissors && computer == rock return lose
  if player == paper && computer == rock return win
  if player == rock && computer == paper return lose
  if player == scissors && computer == paper return win
  if player == paper & computer == scissors return lose
*/

function playRound(choice) { // player inputs rock paper or scissors
    let playerChoice = choice.toUpperCase(); // choice is converted to upper case
    let computerChoice = computerPlay(); // computer's choice function is called
    console.log(`You played ${ playerChoice }...`); // show player's choice
    console.log(`Computer played ${ computerChoice }!`); // show computer's choice
    // compare all the choices to determin win or lose
    if (playerChoice == computerChoice) {
      return "It's a tie!";
    } else if (playerChoice == "ROCK" && computerChoice == "SCISSORS") {
      return "You win! Rock beats scissors.";
    } else if (playerChoice == "SCISSORS" && computerChoice == "ROCK") {
      return "You lose! Rock beats scissors.";
    } else if (playerChoice == "PAPER" && computerChoice == "ROCK") {
      return "You win! Paper beats rock.";
    } else if (playerChoice == "ROCK" && computerChoice == "PAPER") {
      return "You lose! Paper beats rock.";
    } else if (playerChoice == "SCISSORS" && computerChoice == "PAPER") {
      return "You win! Scissors beats paper.";
    } else if (playerChoice == "PAPER" && computerChoice == "SCISSORS") {
      return "You lose! Scissors beats paper.";
    } else {
      return "ERROR: You must choose ROCK, PAPER, or SCISSORS."; // result if player doesn't choose rock paper or scissors
    }
};

/* 
record if game is win or lose
play again x 4 rounds
after 5 rounds return if more than 3 wins or more than 3 loses
return if win or lose game
  if rounds won greater than 3 return game won
  if rounds lost great than 3 return game lost
reset counter
*/
