// Tools: 
// const / let
// prompt
// if / else
// array
// document.querySelector
// addEventListener


//Chiedo la mail all'utente tramite un prompt e mi salvo il dato in una variabile

const mail = prompt('Inserisci la tua e-mail')

// Controllo che la mail sia all'interno della lista (array) di chi può accedere

const mail_list = ['ciao@gmail.com', 'tigre12@gmail.com', 'pallone10@gmail.com']

// Se la mail dell'utente si trova all'interno dell'array
if (mail_list.includes(mail)) {
    // Viene mostrato l'alert con l'accesso consentito
    alert('Ok, puoi entrare!✅');
    
// Altrimenti se la mail non coincide a quelle presenti nell'array
} else {
    //Viene mostrato l'alert con l'accesso negato
    alert('Accesso negato.✋🛑');
}

// Gioco dei Dadi
// Pseudocodice

// Salvo in una variabile il numero random del dado per il giocatore
const player_dice = Math.floor(Math.random() * 6) + 1;;

// Salvo in una variabile il numero random del dado per il computer
const computer_dice = Math.floor(Math.random() * 6) + 1;;

// Salvo in una variabile il pulsante per lanciare il dado del giocatore
const player_button = document.getElementById('player_button')

// Salvo in una variabile il pulsante per lanciare il dado del computer
const computer_button = document.getElementById('computer_button')

// Salvo in una variabile il pulsante per vedere il vincitore
const result = document.getElementById('result')

//Quando viene cliccato sul pulsante del giocatore, viene lanciato il dado e viene stampato il valore in pagina
player_button.addEventListener('click', function(){
document.querySelector('.player_result').innerHTML = player_dice
})

//Quando viene cliccato sul pulsante del computer, viene lanciato il dado e viene stampato il valore in pagina
computer_button.addEventListener('click', function(){
    document.querySelector('.computer_result').innerHTML = computer_dice
})

// Se il dado del giocatore è superiore a quello del computer
if (player_dice > computer_dice) {
    
    // Viene stampata in pagina la vittoria del giocatore al click del bottone
    result.addEventListener('click', function(){
        document.querySelector('.comment').innerHTML = 'Complimenti Giocatore, hai vinto!'
        })
}
// Altrimenti se il dado del giocatore è inferiore a quello del computer
else if (player_dice < computer_dice) {

    // Viene stampata in pagina la vittoria del computer al click del bottone
    result.addEventListener('click', function(){
        document.querySelector('.comment').innerHTML = 'Complimenti Computer, hai vinto!'
        })
}

// Altrimenti il dado del giocatore e del computer sono uguali
else {
    
    // Viene stampato in pagina il pareggio al click del bottone
    result.addEventListener('click', function(){
        document.querySelector('.comment').innerHTML = 'Nessun vincitore.'
        })

}