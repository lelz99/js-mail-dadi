//Esercizio Login

const emailsLoggate = ['es99@gmail.com','se99@gmail.com','es1999@gmail.com']

const inputEmail = document.getElementById('user-mail')
const button = document.getElementById('button-invia')
const paragraph = document.getElementById('risultato-mail')

button.addEventListener('click', function(){
    const userEmail = inputEmail.value.trim();

    if(!userEmail){
        alert('non hai inserito una mail')
        return
    }

    let userLoggato = false;
    text = 'mail non registrata' 

    for(let i = 0; i < emailsLoggate.length; i++){

        if (userEmail === emailsLoggate[i]){
            text = 'mail registrata'
            let = userLoggato = true
        }
    }
    paragraph.innerText = text
});


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