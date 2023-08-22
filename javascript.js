function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"]
    const computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

console.log(getComputerChoice());


