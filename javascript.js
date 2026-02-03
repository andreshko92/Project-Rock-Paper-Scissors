

// The computer choice should randomly return string values “rock”, “paper” or “scissors”



const getComputerChoice = () => {
    const result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return "Rock";
    } else if (result === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
};
/* console.log(getComputerChoice());
 */