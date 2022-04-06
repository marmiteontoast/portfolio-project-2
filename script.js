const playerPicksDisplay = document.querySelector('#player-picks')
const compPicksDisplay= document.querySelector('#comp-picks')
const resultDisplay = document.querySelector('#result')

const button = document.querySelectorAll('button')
let playerPicks
let compPicks
let result 

button.forEach(button => button.addEventListener('click', (e) => {
    playerPicks = e.target.id
    playerPicksDisplay.innerHTML = playerPicks
    compRandomAnswer()
    getResult()
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
    }

    compPicksDisplay.innerHTML = compPicks
}

function getResult() {
    if (compPicks === playerPicks) {
        result = 'its a draw!'
    } else if (compPicks === 'rock' && playerPicks === "paper") {
        result = 'you win'
    } else if (compPicks === 'rock' && playerPicks === "scissors") {
        result = 'you lose'
    } else if (compPicks === 'paper' && playerPicks === "scissors") {
        result = 'you win'
    } else if (compPicks === 'paper' && playerPicks === "rock") {
        result = 'you lose' 
    } else if (compPicks === 'scissors' && playerPicks === "rock") {
        result = 'you win'
    } else if (compPicks === 'scissors' && playerPicks === "paper") {
        result = 'you lose'
    }

    resultDisplay.innerHTML = result
}