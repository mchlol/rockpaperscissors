// buttons
/*
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});
*/

const rock = document.querySelector("rock");
const paper = document.querySelector("paper");
const scissors = document.querySelector("scissors");

const playerChoice = document.querySelector("player-choice");
const computerChoice = document.querySelector("computer-choice");

const roundResult = document.querySelector("round-result");

const reset = document.querySelector("reset");

//reset button onclick window.location.reload();

reset.addEventListener('click', () => {
    window.location.reload();
});


// DIV 

/*
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redParagraph = document.createElement('p');
redParagraph.style.cssText = "color: red";
redParagraph.textContent = "Hey I'm red!";

container.appendChild(redParagraph);

const blueHeader3 = document.createElement('h3');
blueHeader3.style.cssText = "color: blue";
blueHeader3.textContent = "I'm a blue h3!";

container.appendChild(blueHeader3);

const newDiv = document.createElement("div");
newDiv.style.cssText = "border: 1px solid black; background-color: pink";

const newHeader1 = document.createElement("h1");
newHeader1.textContent = "I'm in a div";

const newParagraph = document.createElement("p");
newParagraph.textContent = "ME TOO!";


newDiv.appendChild(newHeader1);
newDiv.appendChild(newParagraph);

container.appendChild(newDiv);
/*

