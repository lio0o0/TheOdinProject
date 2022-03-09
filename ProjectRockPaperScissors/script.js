function computerPlay() {
    const play = ["Rock", "Paper", "Scissors"];
    return play[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return "It's a Draw!";
    }
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock" || playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
            playerPoints += 1;
        }
        else if(playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper" || playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors" || playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
            computerPoints += 1;
        }
        else {
            playerPoints += 1;
            computerPoints += 1;
        }
    }
    if (playerPoints > computerPoints) {
        return "You are the Winner!";
    }
    else if (computerPoints > playerPoints) {
        return "You Lose";
    }
    else {
        return "It's a Draw!";
    }
}

console.log(game());
