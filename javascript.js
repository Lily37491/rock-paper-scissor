const playerSelection = prompt("Rock, Paper or Scissors", "Rock");


function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"]
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

function firstRound(playerSelection, computerSelection) {
       if (playerSelection === computerSelection) {
              return "Tie";
       } else if (playerSelection === "Rock" && computerSelection === "Scissor" ||
                  playerSelection === "Scissor" && computerSelection === "Paper" ||
                  playerSelection === "Paper" && computerSelection === "Rock") {
              return "Player gets a point";
       } else if (computerSelection === "Rock" && playerSelection === "Scissor" ||
                  computerSelection === "Scissor" && playerSelection === "Paper" ||
                  computerSelection === "Paper" && playerSelection === "Rock") {
              return "Computer get's a point";
       } 
}

function game() {
       let playerScore = 0;
       let computerScore = 0;
       let roundNumber = 0;


       for (let i = 0; i < 5; i++) {
              const computerSelection = getComputerChoice();
              firstRound(playerSelection, computerSelection);
              roundNumber++;

       let singleRound = firstRound(playerSelection, computerSelection);

              if (singleRound.includes("Player gets a point")) {
                     playerScore++;
              } else if (singleRound.includes("Computer get's a point")) {
                     computerScore++;
              }

              console.log(`Round Number ${roundNumber}: 
                            Player: ${playerScore} 
                                   and Computer: ${computerScore}`);

       
       }

       if (playerScore > computerScore) {
              return "You win!"
       } else if (computerScore > playerScore) {
             return  "Computer wins!"
       } else {
              return "It's a tie!"
       }

}

console.log(game());


