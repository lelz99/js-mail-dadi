const playerOne = document.getElementById('one')
const playerTwo = document.getElementById('two')
const result = document.getElementById('result')
const button = document.getElementById('button')



button .addEventListener('click', function(){
    
    // Genero i numeri random
    const firstPlayer = Math.floor(Math.random() *6) + 1
    const secondPlayer = Math.floor(Math.random() *6) + 1

    // Decido cosa succede in base al risultato dei numeri random
    if (firstPlayer > secondPlayer){
        resultGame = 'First Player Win'
    } else if (secondPlayer > firstPlayer) {
        resultGame = 'Second Player Win'
    } else {
        resultGame = 'Tie'
    }

    // Stampo in pagina
    playerOne.innerText = 'Player 1: ' + firstPlayer
    playerTwo.innerText = 'Player 2: ' + secondPlayer
    result.innerText = resultGame
})