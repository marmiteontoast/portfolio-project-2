const playerPicksDisplay = document.querySelector('#player-picks')
const compPicksDisplay= document.querySelector('#comp-picks')
const resultDisplay = document.querySelector('#result')

const button = document.querySelectorAll('button')
let playerPicks
let compPicks

button.forEach(button => button.addEventListener('click', (e) => {
    playerPicks = e.target.id
    playerPicksDisplay.innerHTML = playerPicks
    compRandomAnswer()
}))

function compRandomAnswer() {
    const randomNumber = Math.floor(Math.random() * button.length + 1)
    console.log(randomNumber)

    if (randomNumber === 1) {
        playerPicks = 'rock'
    } else if (randomNumber === 2) {
        compPicks = 'scissors'
    } else if (randomNumber === 3) {
        compPicks = 'paper'
    }

    compPicksDisplay.innerHTML = compPicks
}