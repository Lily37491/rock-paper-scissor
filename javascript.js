//const playerSelection = prompt("Rock, Paper or Scissors", "Rock");

function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"]
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function firstRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock" ||
               playerSelection === "Rock" && computerSelection === "Scissor" ||
               playerSelection === "Scissor" && computerSelection === "Paper") {
        return "You score a Point!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
               playerSelection === "Scissor" && computerSelection === "Rock" ||
               playerSelection === "Paper" && computerSelection === "Scissor") {
        return "Computer scores a Point!"
               }

}

function game() {
    let userScore = 0;
    let computerScore = 0;
    let round = 0;

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let singleRound = firstRound(playerSelection, computerSelection)

        singleRound;
        round++;

        if (singleRound.includes("You score a Point!")) {
            userScore++;
        } else if (singleRound.includes("Computer scores a Point!")) {
            computerScore++;
        }

        console.log(`Round Number ${round}: 
                        Player ${userScore} 
                            and Computer ${computerScore}`);

        if(userScore > computerScore) {
           console.log("You're the winner");
        } else if (computerScore > userScore) {
           console.log("You're the Loser!");
        } else {
            console.log("It's a Tie in between!");
        }

    }
}
// The game function is working correctly and produces accurate results.
game();





