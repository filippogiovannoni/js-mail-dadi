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