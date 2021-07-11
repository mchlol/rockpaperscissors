// player choice buttons

const choices = document.querySelectorAll(".choice");

/*
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
*/

// divs to show player choice and computer choice
const playerChoiceDiv = document.querySelector("#player-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");

// divs to show winner and number of rounds played
const roundResultDiv = document.querySelector("#round-result");
const roundNumberDiv = document.querySelector("#round-number");

// divs to show scores & status message
const playerScore = document.querySelector("show-player-score");
const ComputerScore = document.querySelector("#show-player-score");
const scoreStatus = document.querySelector("#score-status");

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
let scoreAlert;
let roundNumber = 0;


// play round

function playRound(playerChoice, computerChoice) { 

  computerChoice = computerPlay(); 
  
  playerChoiceDiv.textContent = `You played ${ playerChoice }!`;
  computerChoiceDiv.textContent = `Computer played ${ computerChoice }!`;
  console.log(`You played ${ playerChoice }!`); 
  console.log(`Computer played ${ computerChoice }!`);
  
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

  // check score
  function checkScore(playerWin, computerWin) {
    if ((playerWin > 5) || (computerWin > 5)) {
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


    // play game of 5 rounds 
    function game() {

      playRound(playerChoice, computerChoice); // play round

      roundResultDiv.textContent = roundResult;
      console.log(roundResult); // show winner of round

      roundNumber++;
      roundNumberDiv = roundNumber; // show number of rounds played

      playerScore.textContent = playerWin;
      ComputerScore.textContent = computerWin; // shouldn't these go at the end of the function?

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


    choices.forEach((choice) => {
      choice.addEventListener("click", () => {
        playerChoice = button.id.toUpperCase;
        game();
      })
    })


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