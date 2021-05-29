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
count number of player wins and computer wins
*/

let playerWin = 0; 
let computerWin = 0;
let playerChoice;
let computerChoice;
let roundResult;

function playRound(playerChoice, computerChoice) { 
    playerChoice = playerChoice.toUpperCase(); 
    computerChoice = computerPlay(); 
    console.log(`You played ${ playerChoice }!`); 
    console.log(`Computer played ${ computerChoice }!`);
    if (playerChoice == computerChoice) { 
      roundResult = "It's a tie!";
      return roundResult;
    } else if (
              (playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
              (playerChoice == "PAPER" && computerChoice == "ROCK") ||
              (playerChoice == "SCISSORS" && computerChoice == "PAPER")
              ) {
      playerwin++;
      roundResult = "You WON!";
      return roundResult;
    } else if (
              (playerChoice == "SCISSORS" && computerChoice == "ROCK") ||
              (playerChoice == "ROCK" && computerChoice == "PAPER") ||
              (playerChoice == "PAPER" && computerChoice == "SCISSORS")
              ) {
      computerWin++;
      roundResult = "You LOST!";
      return roundResult;
    } else {
      roundResult = "Invalid player choice";
      return roundResult;
    }
};

// check number of player or computer wins and return score 
// if either is over 5 alert user to start again

function checkScore(playerWin, computerWin) {
  if (playerWin === 5) {
    return alert(`You won the game! Take that, Computer!`);
  } else if (computerWin === 5) {
    return alert(`Computer won the game! Sucks to be you, I guess.`);
  } else if ((playerWin < 5) && (computerWin < 5)) {
    return `Keep playing to win best of 5!`;
  } else if ((playerWin > 5) || (computerWin > 5)) {
    let refreshAlert = alert("Stop, he's already dead! Refresh to play again.");
    return refreshAlert;
  }
};

// prompt user to pick rock paper or scissors & store result in playerChoice variable

function chooseFighter() {
  playerChoice = prompt("Choose your fighter! Rock, paper, or scissors?");
}

/* 
count number of player and computer wins
if neither has reached 5 play another round
if either has reached 5:
  notify user of winner
  prompt user to refresh the page
*/

// game function - choose fighter, play round, check score

function game() {
  chooseFighter(); // call function to get player choice
  playRound(playerChoice, computerChoice);
  console.log(roundResult);
  console.log(`Player wins: ${ playerWin }`);
  console.log(`Computer wins: ${ computerWin }`);
  let score = checkScore(playerWin, computerWin);
  return score;
};


