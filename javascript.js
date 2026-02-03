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
    


    console.log round winner?
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);