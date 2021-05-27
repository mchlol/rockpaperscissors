// randomly return one of three options

/* create an array with rock, paper, scissors
randomly return an integer between 0 and 2
use that number as the index of the array to be returned
*/

function computerPlay() {
    let computerTurnOptions = ["Rock", "Paper", "Scissors"]; // create array with three options
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    } // select a random number between a specific range
    let randomNumber = Math.floor(getRandom(3,0)); // call random number with max at less than 3 (but not 3), min at 0, rounded to nearest integer 
    return computerTurnOptions[randomNumber]; // use the random number to select the index of the array
}

/*
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
console.log(computerPlay());
*/

function playRound(choice) {
    let computerChoice = computerPlay();
    console.log("You played " + choice);
    console.log("Computer played " + computerChoice)
}

/* player inputs rock paper or scissors
input is case-insensitive
computer will play rock paper or scissors
check if player choice is winner or loser
  if player == rock && computer == scissors return win
  if player == scissors && computer == rock return lose
  if player == paper && computer == rock return win
  if player == rock && computer == paper return lose
  if player == scissors && computer == paper return win
  if player == paper & computer == scissors return lose
record if game is win or lose
play again x 4 rounds
after 5 rounds return if more than 3 wins or more than 3 loses
return if win or lose game
  if rounds won greater than 3 return win
  if rounds lost great than 3 return lose
reset counter
*/
