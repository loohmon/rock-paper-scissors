let weapons = ['rock', 'paper', 'scissors'];

// define what the player's selection is

function playerPlay() {
    let playerSelection = prompt("Choose your weapon!");
    console.log("You picked: ", playerSelection);
    return playerSelection;
  }

// randomize the computer's play

function computerPlay() {
    let computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
    console.log("Computer picked: ", computerSelection);
    return computerSelection;
}

// play one round of rock paper scissors

const playerSelection = playerPlay().toLowerCase();
const computerSelection = computerPlay();


    function playRound(playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection == "scissors" || playerSelection === 'scissors' && computerSelection === "paper" || playerSelection === 'paper' && computerSelection === "rock") {
            playerScore++;
            return `You win! \n You: ${playerScore} \n Computer: ${computerScore}`
        }
        else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
            computerScore++;
            return `You lose! \n You: ${playerScore} \n Computer: ${computerScore}`
        }
        else if (playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors") {
            drawTimes++;
            return `It's a draw! \n You: ${playerScore} \n Computer: ${computerScore}`
        }
        else {
            return "Invalid play!"
        }
    }

let playerScore = 0;
let computerScore = 0;
let drawTimes = 0;

    result = playRound(playerSelection,computerSelection);
    console.log(result);