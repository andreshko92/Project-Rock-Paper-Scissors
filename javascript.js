// 1. The computer choice should randomly return string values “rock”, “paper” or “scissors”
function getComputerChoice() {
    const result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// 2. Added the prompt which will acquire human's choice.
function getHumanChoice() {
    const userInput = prompt("Write down one of the below options:\nrock\npaper\nscissors");
    return userInput.toLowerCase();
}

// 3. Your game will keep track of the players score. You will write variables to keep track of the players score.
let humanScore = 0;
let computerScore = 0;

// 4. Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("A tie!\nPlay again!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") )
     {
        console.log(`Human wins! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    } else {
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// 5. Write the logic to play the entire game of 5 rounds.
