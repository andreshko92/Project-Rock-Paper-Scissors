

// 1. The computer choice should randomly return string values “rock”, “paper” or “scissors”

const getComputerChoice = () => {
    const result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "rock";
    } else if (result === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

// 2. Added the prompt which will acquire human's choice.
const getHumanChoice = prompt("Choose and write one of the below options:\nRock\nPaper\nScissors");

// 3. Your game will keep track of the players score. You will write variables to keep track of the players score.

let humanScore = 0;
let computerScore = 0;
