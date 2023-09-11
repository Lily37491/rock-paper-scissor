function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"]
    let computerChoice = choice[Math.floor(Math.random() * 3)];
    return computerChoice;
}

const userBtn = document.querySelectorAll("#user-btn");

userBtn.forEach(button => {
    button.addEventListener('click', () =>{
        const userChoice = button.getAttribute('data-choice');
        console.log(userChoice);
    })
})
