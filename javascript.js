function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"]
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

const userBtn = document.querySelectorAll("#user-btn");
const playerScore = document.querySelector(".player-score");
const compScore = document.querySelector(".comp-score");
const message = document.querySelector("#message");
let userScore = 0;
let computerScore = 0;
let Round = 0;
const maxRound = 5;
const endMessage = document.querySelector("#end-message");
const timeLeft = document.querySelector("#timer");


    userBtn.forEach(button => {
        button.addEventListener('click', () => {
    
            if (Round >= maxRound){
                gameEnd();
                return;
            }
            const userChoice = button.getAttribute("data-choice");
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
    
    
        })
    })
    
    
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

    })
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



