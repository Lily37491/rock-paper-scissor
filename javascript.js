function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"]
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

const userBtn = document.querySelectorAll("#user-btn");
let playerScore = document.querySelector(".player-score");
let compScore = document.querySelector(".comp-score");
let message = document.querySelector("#message");
let userScore = 0;
let computerScore = 0;
let Round = 0;
const maxRound = 5;
let endMessage = document.querySelector("#end-message");
const playAgainBtn = document.querySelector("#play-again-btn");
//const timeLeft = document.querySelector("#timer");

function startGame(){
    userBtn.forEach(button => {
        button.addEventListener('click', game)});
    }

function game(){
    
            if (Round >= maxRound){
                gameEnd();
                return;
            }
            let userChoice = this.getAttribute("data-choice");
            const computerChoice = getComputerChoice();
    
            if(userChoice === computerChoice){
                message.textContent = "Tie"
            } else if(userChoice === "rock" && computerChoice === "scissor"||
                    userChoice === "paper" && computerChoice === "rock"||
                    userChoice === "scissor" && computerChoice === "paper"){
                message.textContent = "You get a point";
                userScore++;
                playerScore.textContent = `Player: ${userScore}`;
            }else {
                message.textContent = "Computer scores a point";
                computerScore++;
                compScore.textContent = `Computer: ${computerScore}`;
            }
    
            Round++;
    
    
        }
  
    function gameEnd(){
        if(userScore > computerScore){
            message.textContent = "";
            endMessage.textContent = "YOU WIN!"
        } else if(computerScore > userScore){
            message.textContent = ""
            endMessage.textContent = "YOU LOSE"
        } else {
            message.textContent = ""
            endMessage.textContent = "IT'S A TIE. PLAY AGAIN TO WIN"
        }

    playAgainBtn.style.display = 'block';
    }
    
    
document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.querySelector("#play-btn");
    let gameContainer = document.querySelector("#game-container");
    let preMessage = document.querySelector("#pre-message");
    let anotherPreMessage = document.querySelector("#another-premessage");
    playBtn.addEventListener('click', () => {
        gameContainer.style.display = 'block';
        playBtn.style.display = 'none';
        preMessage.style.display = 'none';
        anotherPreMessage.style.display = 'none';
        startGame();

    })
})

playAgainBtn.addEventListener('click', () => {
    userScore = 0;
    computerScore = 0;
    Round = 0;
    playerScore.textContent = `Player: 0`;
    compScore.textContent = `Computer: 0`;
    message.textContent = "5 Round Game";
    endMessage.textContent = "Choose your weapon";
    playAgainBtn.style.display = 'none';
    userBtn.forEach(button => {
        button.removeEventListener('click', game)
    })
    startGame();
})






/*function startTimer(){
    let seconds = 30;

    timer = setInterval(() => {
        if(seconds >= 0){
            timeLeft.textContent = `Time left: ${seconds}`;
            seconds--;
        } else if(seconds <= 0){
            clearInterval(timer);
            
        }
    },1000);

}
*/



