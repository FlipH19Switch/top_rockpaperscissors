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

function getComputerChoice() {
    let gameOptions = [option1,option2,option3];
    return gameOptions[Math.floor(Math.random()*gameOptions.length)]
};

let playerSelection;
let computerSelection = getComputerChoice();

function playRound() {
    playerSelection = prompt("Choose Rock, Paper, or Scissors");
    playerSelection = playerSelection.toUpperCase().slice(0,1) + playerSelection.toLowerCase().slice(1);
    
    if (
        playerSelection === option1 && computerSelection === option2 ||
        playerSelection === option2 && computerSelection === option3 ||
        playerSelection === option3 && computerSelection === option1) {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
        computerScore++
    }
    else if (playerSelection === computerSelection) {
        return "Tie Game!"
    }
    else {
        return "You Win! " + playerSelection + " beats " + computerSelection;
        playerScore++
    }


};

console.log(playRound())

for (playerScore = 0, computerScore = 0; playerScore < 5 && computerScore < 5;playerScore++ ) {
    getComputerChoice();
    playRound()
}

if(computerScore === 5) {
    alert("You Lose!")
}
else if (playerSelection === 5) {
    alert("You Win!")
}

console.log("Player = " + playerScore + " and Computer = " + computerScore)



/*
function outcome(playerSelection, computerSelection) {
    if (playerSelection === gameOptions[0] && computerSelection === gameOptions[])
}
*/