// Computer Selection
function computerPlay() {
    const selections = ['rock', 'paper', 'scissors'];
    return selections[Math.floor(Math.random() * selections.length)] // returns either rock, paper or scissors
}

// Play Single Round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors' || playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock' || playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        // player wins
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper' || playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors' || playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        // computer wins
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        // both player and computer return same value
        return "It's a Draw!"
    }
}

// Whole Game, consists of multiple rounds
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) { // 5 round game
        const playerSelection = prompt("Rock, Paper or Scissors?");
        const computerSelection = computerPlay();
        const round = playRound(playerSelection, computerSelection);
        if (round === `You Win! ${playerSelection} beats ${computerSelection}`) { // player win
            playerPoints++;
        }
        else if (round === `You Lose! ${computerSelection} beats ${playerSelection}`) { // computer win
            computerPoints++;
        }
    // compare points to decide final winner
    }
    if (playerPoints > computerPoints) {
        return "You Win!";
    }
    else if (computerPoints > playerPoints) {
        return "You Lose!";
    }
    else {
        return "It's a Draw!";
    }
}
