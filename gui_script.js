// player choice buttons (uses all buttons including reset button)

//const buttons = document.querySelectorAll("button");
const choices = document.querySelectorAll(".choice");

// divs to show player choice and computer choice
const playerChoiceDiv = document.querySelector("#player-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");

// divs to show winner and number of rounds played
const roundResultDiv = document.querySelector("#round-result");
const roundNumberDiv = document.querySelector("#round-number");

// divs to show scores & status message
const playerScoreDiv = document.querySelector("#show-player-score");
const computerScoreDiv = document.querySelector("#show-computer-score");
const statusMessageDiv = document.querySelector("#status-message");

// set computer choice
function computerPlay() {
  let computerTurnOptions = ["ROCK", "PAPER", "SCISSORS"]; 
  function getRandom(min, max) {
      return Math.random() * (max - min) + min;
  } 
  let randomNumber = Math.floor(getRandom(3,0)); 
  return computerTurnOptions[randomNumber]; 
};


// game function variables
let playerWin = 0; 
let computerWin = 0;
let playerChoice;
let computerChoice;
let roundResult;
let statusMessage;
let roundNumber = 0;


// play round

function playRound(playerChoice, computerChoice) { 

  computerChoice = computerPlay(); 
  
  playerChoiceDiv.textContent = `You played ${ playerChoice }!`;
  computerChoiceDiv.textContent = `Computer played ${ computerChoice }!`;
  
  if (
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

  function forceRefresh() {
    window.location.reload();
  }


    // play game of 5 rounds 
    
    function game() {

      playRound(playerChoice, computerChoice); // play round

      roundResultDiv.textContent = roundResult;
      console.log(roundResult); // show winner of round

      roundNumber++;
      roundNumberDiv.textContent = `ROUNDS PLAYED: ${roundNumber}`; // show number of rounds played

      playerScoreDiv.textContent = `PLAYER: ${playerWin}`;
      computerScoreDiv.textContent = `COMPUTER: ${computerWin}`; // show scores

      let score = checkScore(playerWin, computerWin); // show if someone has won or to keep playing

      };



choices.forEach((button) => {
  button.addEventListener('click', (e) => {
    playerChoice = button.id.toUpperCase();
    game();
  })
});


/* 
player makes choice by clicking button
playerChoice is assigned the id of the button pressed
computerPlay is called to assign a value to computerChoice
playRound is called with playerChoice and computerChoice
the choices are compared
the round result (win/lose) is displayed
the number of player/computer wins increases
  if tie no wins increase
the number of rounds increases
  if number of round >= 5 winner is declared & game ends
  if number of round < 5 player is prompted to select again
*/

  // check score
  function checkScore(playerWin, computerWin) {
    if ((playerWin > 5) || (computerWin > 5)) {
      statusMessageDiv.textContent = "Stop, they're already dead! Refresh to play again.";
      forceRefresh();
      return;
    
    } else if (playerWin === 5) {
      statusMessageDiv.textContent = `You won the game in ${roundNumber} rounds! Take that, Computer! Refresh to play again.`;
      return;
    
    } else if (computerWin === 5) {
      statusMessageDiv.textContent =  `Computer won the game in ${roundNumber} rounds! The machines are taking over! Refresh to play again.`;
      return;
    
    } else if ((playerWin < 5) || (computerWin < 5)) {
      statusMessageDiv.textContent = `Keep playing, first to 5 wins!`;
      return;
    } else {
      statusMessageDiv.textContent = "Game over! Refresh to play again.";
      return;
    }
    };