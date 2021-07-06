
// display variables

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const playerChoiceDiv = document.querySelector("#player-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");

const roundResultDiv = document.querySelector("#round-result");

// computer choice

function computerPlay() {
  let computerTurnOptions = ["ROCK", "PAPER", "SCISSORS"]; 
  function getRandom(min, max) {
      return Math.random() * (max - min) + min;
  } 
  let randomNumber = Math.floor(getRandom(3,0)); 
  return computerTurnOptions[randomNumber]; 
}

// script variables

let playerWin = 0; 
let computerWin = 0;
let playerChoice;
let computerChoice;
let roundResult;
let scoreAlert;
let invalidChoice = "Invalid choice!";

// player choice

rockBtn.onclick = () => playerChoice = "ROCK";
paperBtn.onclick = () => playerChoice = "PAPER";
scissorsBtn.onclick = () => playerChoice = "SCISSORS";


// game function

function playRound(playerChoice, computerChoice) { 
//playerChoice = playerChoice.toUpperCase(); 
computerChoice = computerPlay(); 
playerChoiceDiv.textContent = `You played ${ playerChoice }!`;
computerChoiceDiv.textContent = `Computer played ${ computerChoice }!`

console.log(`You played ${ playerChoice }!`); // div
console.log(`Computer played ${ computerChoice }!`); // div

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
  roundResult = "You WON!"; // div
    roundResultDiv.textContent = `You WON!`;
  return roundResult;

} else if (
          (playerChoice == "SCISSORS" && computerChoice == "ROCK") ||
          (playerChoice == "ROCK" && computerChoice == "PAPER") ||
          (playerChoice == "PAPER" && computerChoice == "SCISSORS")
          ) {
  computerWin++;
  roundResult = "You LOST!";
    roundResultDiv.textContent = `You LOST!`;
  return roundResult;

} else {
  roundResult = "It's a tie!";
    roundResultDiv.textContent = `It's a tie!`;
  return roundResult;
}
};


