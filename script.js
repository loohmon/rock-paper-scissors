const playerScoreDisplay = document.querySelector('#player-score')
const computerScoreDisplay = document.querySelector('#computer-score')
const scoreDisplay = document.querySelector('#score-container')
const resultDisplay = document.querySelector('#message')
const resetButton = document.querySelector('#reset')
const rockChoice = document.querySelector('#rock')
const paperChoice = document.querySelector('#paper')
const scissorsChoice = document.querySelector('#scissors')
let playerScore = 0;
let computerScore = 0;

function capsFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

function playRound(playerChoice) {
    const computerSelection = computerChoice();
    if (playerChoice === "rock" && computerSelection == "scissors" || playerChoice === 'scissors' && computerSelection === "paper" || playerChoice === 'paper' && computerSelection === "rock") {
        playerScore++;
        score();
        resultDisplay.innerHTML = `${capsFirstLetter(playerChoice)} beats ${capsFirstLetter(computerSelection)}! You win!`;
    }
    else if (playerChoice === "rock" && computerSelection === "paper" || playerChoice === "paper" && computerSelection === "scissors" || playerChoice === "scissors" && computerSelection === "rock") {
        computerScore++;
        score();
        resultDisplay.innerHTML = `${capsFirstLetter(computerSelection)} beats ${capsFirstLetter(playerChoice)}! You lose!`;
    }
    else if (playerChoice === "rock" && computerSelection === "rock" || playerChoice === "paper" && computerSelection === "paper" || playerChoice === "scissors" && computerSelection === "scissors") {
        score();
        resultDisplay.innerHTML = "It's a draw!";
    }
    else {
        return "Invalid play!"
    }
}

function score() {
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}

function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = Math.floor(Math.random() * 3);
    return choices[computerSelection];
}

function playerChoices() {
    rockChoice.addEventListener('click', function () {
        playRound("rock")
    })

    paperChoice.addEventListener('click', function () {
        playRound("paper")
    })

    scissorsChoice.addEventListener('click', function () {
        playRound("scissors")
    })
}

playerChoices();

resetButton.addEventListener('click', function() {
    location.reload();
})