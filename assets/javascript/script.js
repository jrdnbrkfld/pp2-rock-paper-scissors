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
        incrementUserScore()
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = "You lost!"
        incrementComputerScore()
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = "You win!"
        incrementUserScore()
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = "You lost!"
        incrementComputerScore()
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = "You win!"
        incrementUserScore()
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = "You lost!"
        incrementComputerScore()
    }
    resultDisplay.innerHTML = result
}

// generates score for player //

function incrementUserScore() {
    let userScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++userScore;
    checkGameOver()
}

function incrementComputerScore() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
    checkGameOver()
}


// alerts who the winner is based on who reaches 5 first //

function checkGameOver() {
    if (userScore === '5') {
        alert('You have won the match!')
    }
    if (computerScore === '5') {
        alert('You have lost the match!')
    }
}