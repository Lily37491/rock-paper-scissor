function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"]
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

const userBtn = document.querySelectorAll("#user-btn");

userBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const userChoice = button.getAttribute('data-choice');
        const compChoice = getComputerChoice();

        if(userChoice === compChoice){
            console.log("It's a tie");
        } else if(userChoice === "rock" && compChoice === "scissor" ||
                    userChoice === "paper" && compChoice === "rock" ||
                    userChoice === "scissor" && compChoice === "paper"){
            console.log("you score a point");
        } else {
            console.log("comp scores a point");
        }
    })
})
