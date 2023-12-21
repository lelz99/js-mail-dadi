//Esercizio Login
const inputMail = document.getElementById('user-mail')
const button = document.getElementById('button-invia')
const mailLoggate = ['es99@gmail.com','se99@gmail.com','es1999@gmail.com']
const paragraph = document.getElementById('risultato-mail')


    button .addEventListener('click', function() {

        if (inputMail.value == mailLoggate[0] || inputMail.value == mailLoggate[1] || inputMail.value == mailLoggate[2]){ 
           text = 'Mail registrata'
        } else {
            text = 'Mail non registrata'
        }
        paragraph.innerText = text
    })


///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// Esercizio Dadi
const playerOne = document.getElementById('one')
const playerTwo = document.getElementById('two')
const result = document.getElementById('result')
const buttonNumbers = document.getElementById('button')

buttonNumbers .addEventListener('click', function(){

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