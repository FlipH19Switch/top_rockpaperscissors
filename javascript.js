/*
OVERVIEW
Game = rock-paper-scissors
Opponent = computer
Opponent strategy = randomly generate "Rock", "Paper", or "Scissors"
Player objective = win best of five rounds
Display results of each round via console.log()
Sign-off = report winner or loser
*/


let option1 = "Rock";
let option2 = "Paper";
let option3 = "Scissors";
let gameOptions = [option1,option2,option3];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let message

function playRound() {
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toUpperCase().slice(0,1) + playerSelection.toLowerCase().slice(1);
    computerSelection = gameOptions[Math.floor(Math.random()*gameOptions.length)];

    if (playerSelection !== option1 && playerSelection !== option2 && playerSelection !== option3) {
        computerScore++;
        message = "You Lose! You did not pick a correct option!";
        console.log(message);
        return message;
    }
    else if (
        playerSelection === option1 && computerSelection === option2 ||
        playerSelection === option2 && computerSelection === option3 ||
        playerSelection === option3 && computerSelection === option1) {
        computerScore++;
        message = "You Lose! " + computerSelection + " beats " + playerSelection;
        console.log(message);
        return message;
    }
    else if (playerSelection === computerSelection) {
        message = "Tie Game!";
        console.log(message);
        return message;
    }
    else {
        playerScore++;
        message = "You Win! " + playerSelection + " beats " + computerSelection;
        console.log(message);
        return message;
    }
};

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    if (computerScore > playerScore) {
        alert("You Lose!")
    }
    else if (computerScore < playerScore) {
        alert("You Win!")
    }
    else {alert("Tie Game!")}
}

game()