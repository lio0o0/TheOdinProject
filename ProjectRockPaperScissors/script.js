// General Variables
let userScore = document.getElementById("userScore");
let computerScore = document.getElementById("computerScore");
const resultEachRound = document.querySelector("h2");
const finalResult = document.querySelector("h3");
let playerPoints = 0
let computerPoints = 0;
const body = document.body;

// Computer Selection
function computerPlay() {
    const selections = ['rock', 'paper', 'scissors'];
    return selections[Math.floor(Math.random() * selections.length)] // returns either rock, paper or scissors
}

// Logic behind a single round of Rock Paper Scissors
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

// Play Single Round of Rock Paper Scissors
function game(playerSelection) {
    if (playerPoints == 5 || computerPoints == 5) {
        return;
    }
    const computerSelection = computerPlay();
    const round = playRound(playerSelection, computerSelection);
    if (round === `You Win! ${playerSelection} beats ${computerSelection}`) { // player win
        playerPoints++;
        resultEachRound.innerHTML = round; // displays result for each round
        userScore.innerHTML = playerPoints; // updates player's latest score to the website
    }
    else if (round === `You Lose! ${computerSelection} beats ${playerSelection}`) { // computer win
        computerPoints++;
        resultEachRound.innerHTML = round; // displays result for each round
        computerScore.innerHTML = computerPoints; // updates computer's latest score to the website
    }
    else {
        resultEachRound.innerHTML = round; // displays result for each round
    }
    checkWinner(); // checks if the game has ended, if it has, a winner should be named
} 

// checks for the winner of the whole game
function checkWinner() {
    if (playerPoints == 5 || computerPoints == 5) { // first to reach 5 points, wins
        if (playerPoints > computerPoints) {
            // user wins
            finalResult.innerHTML =  "You Win!";
            resultEachRound.innerHTML = "";
            const reloadButton = document.createElement("button");
            reloadButton.textContent = "Play Again?";
            body.append(reloadButton);
            reloadButton.addEventListener("click", refreshPage);
        }
        else if (computerPoints > playerPoints) {
            // computer wins
            finalResult.innerHTML =  "You Lose!";
            resultEachRound.innerHTML = "";
            const reloadButton = document.createElement("button");
            reloadButton.textContent = "Play Again?";
            body.append(reloadButton);
            reloadButton.addEventListener("click", refreshPage);
        }
        else {
            // draw
            finalResult.innerHTML =  "It's a Draw!";
            resultEachRound.innerHTML = "";
            const reloadButton = document.createElement("button");
            reloadButton.textContent = "Play Again?";
            body.append(reloadButton);
            reloadButton.addEventListener("click", refreshPage);
        }
    }

}

// refreshes the page
function refreshPage() {
    location.reload();
}

// Rock Paper Scissor variables
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// adding event listeners
rock.addEventListener("click", e => {
    game("rock")
})
paper.addEventListener("click", e => {
    game("paper")
})
scissors.addEventListener("click", e => {
    game("scissors")
})
