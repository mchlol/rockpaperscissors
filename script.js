// ROCK PAPER SCISSORS - played in console

/* 
create an array with rock, paper, scissors
randomly return an integer between 0 and 2
use that number as the index of the array to be returned
*/

function computerPlay() {
    let computerTurnOptions = ["ROCK", "PAPER", "SCISSORS"]; 
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    } 
    let randomNumber = Math.floor(getRandom(3,0)); 
    return computerTurnOptions[randomNumber]; 
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
count number of rounds won or lost
*/

let playerWin = 0; 
let computerWin = 0;
let playerChoice;
let computerChoice;

function playRound(playerChoice, computerChoice) { 
    playerChoice = playerChoice.toUpperCase(); 
    computerChoice = computerPlay(); 
    console.log(`You played ${ playerChoice }!`); 
    console.log(`Computer played ${ computerChoice }!`);
    if (playerChoice == computerChoice) { 
      return "It's a tie!";
    } else if ((playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
              (playerChoice == "PAPER" && computerChoice == "ROCK") ||
              (playerChoice == "SCISSORS" && computerChoice == "PAPER")) {
      return "You WIN!";
      playerWin++;
    } else if ((playerChoice == "SCISSORS" && computerChoice == "ROCK") ||
              (playerChoice == "ROCK" && computerChoice == "PAPER") ||
              (playerChoice == "PAPER" && computerChoice == "SCISSORS")) {
      return "You LOSE!";
      computerWin++;
    } else {
      return "ERROR: You must choose ROCK, PAPER, or SCISSORS."; 
    }
};

function chooseFighter() {
  playerChoice = prompt("Choose your fighter! Rock, paper, or scissors?");
}

function game() {
  chooseFighter();
  playRound(playerChoice, computerChoice);
  console.log(`Player wins: ${ playerWin }`);
  console.log(`Computer wins: ${ computerWin }`);
};



/* 
record if round is win or lose
  create counter variable
  increment by one for each player win
  increment by one for each computer win
play again x 4 rounds
after 5 rounds return if more than 3 wins or more than 3 loses
return if win or lose game
  if rounds won greater than 3 return game won
  if rounds lost great than 3 return game lost
reset counter
*/
