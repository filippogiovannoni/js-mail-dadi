// Tools: 
// const / let
// prompt
// if / else
// array


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


// Salvo in una variabile l'array con i valori dei dadi da 1 a 6

// Salvo in una variabile il numero random del dado per il giocatore

// Salvo in una variabile il numero random del dado per il computer

// Salvo in una variabile il pulsante per lanciare il dado del giocatore

// Salvo in una variabile il pulsante per lanciare il dado del computer

//Quando viene cliccato sul pulsante del giocatore, viene lanciato il dado e viene stampato il valore in pagina

//Quando viene cliccato sul pulsante del computer, viene lanciato il dado e viene stampato il valore in pagina

    // Se il dado del giocatore è superiore a quello del computer
        // Viene stampata in pagina la vittoria del giocatore

    // Altrimenti se il dado del giocatore è inferiore a quello del computer
        // Viene stampata in pagina la vittoria del computer

    // Altrimenti il dado del giocatore e del computer sono uguali
        // Viene stampato in pagina il pareggio