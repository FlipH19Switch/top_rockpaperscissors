/*
OVERVIEW
Game = rock-paper-scissors
Opponent = computer
Opponent strategy = randomly generate "Rock", "Paper", or "Scissors"
Display results of each round via console.log()
Sign-off = report winner or loser
*/


let option1 = "Rock";
let option2 = "Paper";
let option3 = "Scissors";
let gameOptions = [option1,option2,option3];
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let message;
const resultsRound = document.querySelector('#results-round');
const resultsPlayerScore = document.querySelector('#player-score');
const resultsComputerScore = document.querySelector('#computer-score');
const resultsContainer = document.querySelector('#results-container');
const results = document.createElement('div');

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(playerScore === 5 || computerScore === 5) {
            return;
        }
        playerSelection = button.textContent;
        playRound();
        resultsPlayerScore.textContent = `Player Score: ${playerScore}`;
        resultsComputerScore.textContent = `Computer Score: ${computerScore}`;
    })
})

function playRound() {
    computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];

    if (
        playerSelection === option1 && computerSelection === option2 ||
        playerSelection === option2 && computerSelection === option3 ||
        playerSelection === option3 && computerSelection === option1) {
        computerScore++;
        message = "You Lose! " + computerSelection + " beats " + playerSelection;
        resultsRound.textContent = message;
    }
    else if (playerSelection === computerSelection) {
        message = "Tie Game!";
        resultsRound.textContent = message;
    }
    else {
        playerScore++;
        message = "You Win! " + playerSelection + " beats " + computerSelection;
        resultsRound.textContent = message;
    }

    if (playerScore === 5) {
        results.textContent = "You won!";
        resultsContainer.appendChild(results);
    }
    else if (computerScore === 5) {
        results.textContent = "You lost!";
        resultsContainer.appendChild(results);
    }
};
