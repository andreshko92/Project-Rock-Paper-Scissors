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

function getHumanChoice() {
    const userInput = prompt("Write down one of the below options:\nrock\npaper\nscissors");
    return userInput.toLowerCase();
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

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
    /* playRound(humanSelection, computerSelection); */

    for (let i = 0; i < 5; i++) {
        console.log(`--- Round ${i + 1} ---`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }


    console.log("--- FINAL RESULTS ---");
    if (humanScore > computerScore) {
        console.log(`Congrats! You won the game ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Game Over! The computer beat you ${computerScore} to ${humanScore}`);
    } else {
        console.log("The whole game is a draw!");
    }
}

