const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const splash = document.querySelector('.splash');
let userChoice;
let computerChoice;
let result;
const gameOver = 5;
let userScore = document.getElementById('user-score');
let computerScore = document.getElementById('computer-score');

// start screen

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
    }, 5000);
});

// event listener to generate computer choice when user makes a choice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

// generates the computers choice as a random number

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber);

    if (randomNumber == 1) {
        computerChoice = 'rock';
    }
    if (randomNumber == 2) {
        computerChoice = 'paper';
    }
    if (randomNumber == 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

// generates the result 

function getResult() {
    if (computerChoice == userChoice) {
        result = "It's a draw!";
    }
    if (computerChoice == 'rock' && userChoice === "paper") {
        result = "You win!";
        incrementUserScore();
    }
    if (computerChoice == 'rock' && userChoice === "scissors") {
        result = "You lost!";
        incrementComputerScore();
    }
    if (computerChoice == 'paper' && userChoice === "scissors") {
        result = "You win!";
        incrementUserScore();
    }
    if (computerChoice == 'paper' && userChoice === "rock") {
        result = "You lost!";
        incrementComputerScore();
    }
    if (computerChoice == 'scissors' && userChoice === "rock") {
        result = "You win!";
        incrementUserScore();
    }
    if (computerChoice == 'scissors' && userChoice === "paper") {
        result = "You lost!";
        incrementComputerScore();
    }
    resultDisplay.innerHTML = result;
}

// generates score for player 

function incrementUserScore() {
    let currentUserScore = parseInt(userScore.innerText);
    currentUserScore++;
    console.log(currentUserScore);
    userScore.innerText = currentUserScore;
    checkWinner(currentUserScore, 'user');
}

function incrementComputerScore() {
    let currentComputerScore = parseInt(computerScore.innerText);
    currentComputerScore++;
    console.log(currentComputerScore);
    computerScore.innerText = currentComputerScore;
    checkWinner(currentComputerScore, 'comp');
}

// alerts who the winner is based on who reaches 5 first 

function checkWinner(score, player) { 
    if (player == 'user') {
        if (score == gameOver) {
            alert('You have won the match! Click Restart Game to try again.');
        }
    } else if (player == 'comp') {
        if (score == gameOver) {
            alert('You have lost the match! Click Restart Game to try again.');
        }
    }
}

// restarts the game when clicked 

document.querySelector('.restart-btn').addEventListener('click', function(){
    window.location.reload();
    return false;
  });