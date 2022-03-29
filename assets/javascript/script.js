const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
var userScore = document.getElementById('user-score')
var computerScore = document.getElementById('computer-score')
const gameOver = 5;

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
    checkWinner()

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
    console.log(userScore);
}

function incrementComputerScore() {
    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++computerScore;
    console.log(computerScore);
}

// alerts who the winner is based on who reaches 5 first //

function checkWinner() { 
    if (userScore === gameOver) {
        alert('You have won the match!');
    } else if (computerScore === gameOver) {
        alert('You have lost the match!');
    }
}

checkWinner()