
// display 

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const playerChoiceDiv = document.querySelector("#player-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");

const roundNumberDiv = document.querySelector("#round-number");

const roundResultDiv = document.querySelector("#round-result");

// computer choice

function computerPlay() {
  let computerTurnOptions = ["ROCK", "PAPER", "SCISSORS"]; 
  function getRandom(min, max) {
      return Math.random() * (max - min) + min;
  } 
  let randomNumber = Math.floor(getRandom(3,0)); 
  return computerTurnOptions[randomNumber]; 
};

// script variables

let playerWin = 0; 
let computerWin = 0;
let playerChoice;
let computerChoice;
let roundResult;
let scoreAlert;
let roundNumber = 0;
let invalidChoice = "Invalid choice!";

// player choice

rockBtn.onclick = () => playRound("ROCK");
paperBtn.onclick = () => playRound("PAPER");
scissorsBtn.onclick = () => playRound("SCISSORS");

// round 

function playRound(playerChoice, computerChoice) { 
computerChoice = computerPlay(); 
playerChoiceDiv.textContent = `You played ${ playerChoice }!`;
computerChoiceDiv.textContent = `Computer played ${ computerChoice }!`

if (
   (playerChoice !== "ROCK") &&
   (playerChoice !== "PAPER") &&
   (playerChoice !== "SCISSORS")
   ) {
  alert("Invalid Choice!"); // probably don't need this in the GUI
  roundResult = invalidChoice;
  return invalidChoice;

} else if (
          (playerChoice == "ROCK" && computerChoice == "SCISSORS") ||
          (playerChoice == "PAPER" && computerChoice == "ROCK") ||
          (playerChoice == "SCISSORS" && computerChoice == "PAPER")
          ) {
  playerWin++;
  roundResult = "You WON!";
    roundResultDiv.textContent = roundResult;
  return roundResult;

} else if (
          (playerChoice == "SCISSORS" && computerChoice == "ROCK") ||
          (playerChoice == "ROCK" && computerChoice == "PAPER") ||
          (playerChoice == "PAPER" && computerChoice == "SCISSORS")
          ) {
  computerWin++;
  roundResult = "You LOST!";
    roundResultDiv.textContent = roundResult;
  return roundResult;

} else {
  roundResult = "It's a tie!";
    roundResultDiv.textContent = roundResult;
  return roundResult;
}
roundNumber++;
roundNumberDiv.textContent = `ROUND roundNumber`;
};

// check score

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

// game

function game() {
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
