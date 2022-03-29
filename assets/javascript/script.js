const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
var userScore = 0;
var computerScore = 0;
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// generates the computers choice //

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// generates the result //

function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a draw!"
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = "You win!"
        incrementUser();
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = "You lost!"
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = "You win!"
        incrementUser();
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = "You lost!"
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = "You win!"
        incrementUser();
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = "You lost!"
    }
    resultDisplay.innerHTML = result
} 

// generates score for player //

function incrementUser() {
    let userScore = parseInt(document.getElementById("user").innerText);
    document.getElementById("user").innerText = ++userScore;
}

function incrementComputer() {
    let computerScore = parseInt(document.getElementById("computer").innerText);
    document.getElementById("computer").innerText = ++computerScore;
}





