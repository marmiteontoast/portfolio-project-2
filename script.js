const playerPicksDisplay = document.querySelector('#player-picks')
const compPicksDisplay= document.querySelector('#comp-picks')
const resultDisplay = document.querySelector('#result')
const playerScore = document.querySelector('#player-score')
const compScore = document.querySelector('#comp-score')

const button = document.querySelectorAll('button')
let playerPicks
let compPicks
let result 
let userScore = 0
let machineScore = 0

button.forEach(button => button.addEventListener('click', function() {
    playerPicks = this.id
    playerPicksDisplay.innerHTML = playerPicks
    compRandomAnswer()
    getResult()
    gameOver()
}))

function compRandomAnswer() {
    const randomNumber = Math.floor(Math.random() * button.length + 1)
    console.log(randomNumber)

    if (randomNumber === 1) {
        compPicks = 'rock'
    } else if (randomNumber === 2) {
        compPicks = 'scissors'
    } else if (randomNumber === 3) {
        compPicks = 'paper'
    };

    compPicksDisplay.innerHTML = compPicks
}

function getResult() {
    if (compPicks === playerPicks) {
        result = 'its a draw!'
    } else if (compPicks === 'rock' && playerPicks === "paper") {
        result = 'you win'
        userScore++;
        playerScore.textContent = userScore;

    } else if (compPicks === 'rock' && playerPicks === "scissors") {
        result = 'you lose'
        machineScore++;
        compScore.textContent = machineScore;
    } else if (compPicks === 'paper' && playerPicks === "scissors") {
        result = 'you win'
        userScore++;
        playerScore.textContent = userScore;
    } else if (compPicks === 'paper' && playerPicks === "rock") {
        result = 'you lose'
        machineScore++;
        compScore.textContent = machineScore; 
    } else if (compPicks === 'scissors' && playerPicks === "rock") {
        result = 'you win'
        userScore++;
        playerScore.textContent = userScore;
    } else if (compPicks === 'scissors' && playerPicks === "paper") {
        result = 'you lose'
        machineScore++;
        compScore.textContent = machineScore;
    };

    resultDisplay.innerHTML = result
     
}

function gameOver(getResult) {
    if (userScore === 6) {
        alert('player has won the match')
        location.reload()
    } else if (machineScore === 6) {
        alert('computer has won the match')
        location.reload()
    } 
    
} 