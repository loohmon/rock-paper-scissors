let weapons = ['rock', 'paper', 'scissors'];

// define what the player's selection is

function playerPlay() {
    let playerSelection = prompt("Choose your weapon!");
    return playerSelection;
}

// randomize the computer's play

function computerPlay() {
    let computerSelection = weapons[Math.floor(Math.random() * weapons.length)];
    console.log("Computer picked: ", computerSelection);
    return computerSelection;
}

// play one round of rock paper scissors


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

// keep count of the scores

let playerScore = 0;
let computerScore = 0;
let drawTimes = 0;

// plays the game until someone gets to 5 points

    while (playerScore < 5 && computerScore < 5) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();
        alert(playRound(playerSelection, computerSelection))
    }
    
// message at the end of the game, with a count of the score
alert(`Match is over! The results are:  \n You: ${playerScore}  \n Computer: ${computerScore}  \n Draws: ${drawTimes}`)