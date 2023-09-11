function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"]
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

const userBtn = document.querySelectorAll("#user-btn");
let message = document.querySelector("#message");
const playerScore = document.querySelector(".player-score");
const compScore = document.querySelector(".comp-score");
const playBtn = document.querySelector(".play-btn");

userScore = 0;
computerScore = 0;
Round = 0;
maxRound = 5;
userBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const userChoice = button.getAttribute('data-choice');
        const compChoice = getComputerChoice();

        if(Round >= maxRound){
            return;
        } 
        if(userChoice === compChoice){
            message.textContent = "It's a Tie";
        } else if(userChoice === "rock" && compChoice === "scissor"){
            message.textContent = "You score a point";
            userScore++;
            playerScore.textContent = `Player: ${userScore}`;
        } else if(userChoice === "paper" && compChoice === "rock"){
            message.textContent = "You score a point";
            userScore++;
            playerScore.textContent = `Player: ${userScore}`;
        } else if(userChoice === "scissor" && compChoice === "paper"){
            message.textContent = "You score a point";
            userScore++;
            playerScore.textContent = `Player: ${userScore}`;
        }else if(compChoice === "rock" && userChoice === "scissor"){
            message.textContent = "Computer scores a point";
            computerScore++;
            compScore.textContent = `Computer: ${computerScore}`;
        }else if(compChoice === "paper" && userChoice === "rock"){
            message.textContent = "Computer scores a point";
            computerScore++;
            compScore.textContent = `Computer: ${computerScore}`;
        }else if(compChoice === "scissor" && userChoice === "paper"){
            message.textContent =  "Computer scores a point";
            computerScore++;
            compScore.textContent = `Computer: ${computerScore}`;
        }

        Round++;
    })

})




