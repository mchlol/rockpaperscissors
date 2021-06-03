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
let scoreAlert;
let invalidChoice = "Invalid choice!";


function playRound(playerChoice, computerChoice) { 
playerChoice = playerChoice.toUpperCase(); 
computerChoice = computerPlay(); 
console.log(`You played ${ playerChoice }!`); 
console.log(`Computer played ${ computerChoice }!`);

if (
   (playerChoice !== "ROCK") &&
   (playerChoice !== "PAPER") &&
   (playerChoice !== "SCISSORS")
   ) {
  alert("Invalid Choice!");
  roundResult = invalidChoice;
  return invalidChoice;

} else if (
          (playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
          (playerChoice == "PAPER" && computerChoice == "ROCK") ||
          (playerChoice == "SCISSORS" && computerChoice == "PAPER")
          ) {
  playerWin++;
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
  roundResult = "It's a tie!";
  return roundResult;
}
};

// check number of player or computer wins and return score 
// if either is over 5 alert user to start again

function checkScore(playerWin, computerWin) {
if (roundResult === invalidChoice) {
  scoreAlert = "Invalid choice, try again";
  return scoreAlert;

} else if ((playerWin > 5) || (computerWin > 5)) {
  let refreshAlert = alert("Stop, he's already dead! Refresh to play again.");
  return refreshAlert;

} else if (playerWin === 5) {
  scoreAlert = alert(`You won the game! Take that, Computer!`);
  return scoreAlert;

} else if (computerWin === 5) {
  scoreAlart =  alert(`Computer won the game! The machines are taking over!`);
  return scoreAlert;

} else if ((playerWin < 5) || (computerWin < 5)) {
  scoreAlert = alert(`Keep playing, first to 5 wins!`);
  return scoreAlert;
} else {
  scoreAlert = alert("Game over! Refresh to play again.");
  return scoreAlert;
}
};

// prompt user to pick rock paper or scissors & store result in playerChoice variable

function chooseFighter() {
playerChoice = prompt("Choose your fighter! Rock, paper, or scissors?");
}


// game function - choose fighter, play round, check score

/* commenting out game function to add reset once won
function game() {
chooseFighter(); // call function to get player choice
playRound(playerChoice, computerChoice);
console.log(roundResult);
console.log(` No. of player wins: ${ playerWin }\n No. of computer wins: ${ computerWin }`);
let score = checkScore(playerWin, computerWin);
return score;
};
*/

function game() {
chooseFighter(); // call function to get player choice
playRound(playerChoice, computerChoice); // play round
console.log(roundResult); // show winner of round
console.log(` No. of player wins: ${ playerWin }\n No. of computer wins: ${ computerWin }`); // show current score in console
let score = checkScore(playerWin, computerWin); // show status if games remaining or alert if someone has won
if (
  (playerWin === 5) ||
  (computerWin === 5) 
) {
  console.log("Game Over, refresh to play again.");
  return alert("Game over! Refresh the page to start again.");
} else {
  return game();
}
};



// loop game to make up 5 rounds
// prevent game from continuing after someone has won
// reset scores