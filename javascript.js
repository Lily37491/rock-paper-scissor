function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"]
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

