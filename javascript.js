const playerChoice = prompt("Rock, Paper or Scissors", "Rock");

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"]
    const computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}




