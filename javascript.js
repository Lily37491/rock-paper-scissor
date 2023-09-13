<<<<<<< HEAD
function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"]
=======
const playerSelection = prompt("Rock, Paper or Scissors", "Rock");


function getComputerChoice() {
    const choice = ["Rock", "Paper", "Scissor"]
>>>>>>> 8c6bf0a5b734a150bc0e5639dde4c260e9ba5ddf
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

<<<<<<< HEAD
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

=======
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
>>>>>>> 8c6bf0a5b734a150bc0e5639dde4c260e9ba5ddf


