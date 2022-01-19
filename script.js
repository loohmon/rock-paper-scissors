const playerScoreDisplay = document.querySelector('#player-score')
const computerScoreDisplay = document.querySelector('#computer-score')
const scoreDisplay = document.querySelector('#score-container')
const resultDisplay = document.querySelector('#message')
const resetButton = document.querySelector('#reset')
const choices = document.querySelectorAll('#choices-container button')
let playerScore = 0;
let computerScore = 0;

function game() {
    while (playerScore < 5 && computerScore < 5) {
        const playerChoice = playerPlay();
        const computerSelection = computerPlay();
        alert(playRound(playerChoice, computerSelection))
    }
// message at the end of the game, with a count of the score
alert(`Match is over! The results are:  \n You: ${playerScore}  \n Computer: ${computerScore}  \n Draws: ${drawTimes}`)
}

function capsFirstLetter(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

function playRound(e) {
    const computerSelection = computerChoice();
    const playerChoice = e.target.id;
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

choices.forEach(choice => choice.addEventListener('click', playRound));

function score() {
    playerScoreDisplay.innerHTML = playerScore;
    computerScoreDisplay.innerHTML = computerScore;
}

function computerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = Math.floor(Math.random() * 3);
    return choices[computerSelection];
}

resetButton.addEventListener('click', function() {
    location.reload();
})