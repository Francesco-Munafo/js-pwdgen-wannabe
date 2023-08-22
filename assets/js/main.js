/*
Descrizione problema:
Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito ed infine scrivi in pagina (non solo in console) il risultato,
che va formattato in questo modo: nomecognomecolorepreferito23 
Esempio: fabiopacificiblue23

*/

//Strumenti

// -prompt x3


// -document.GetElementById
// console.log

// Chiedi il nome
const firstName = prompt('Inserisci il tuo nome');

//Chiedi il cognome
const lastName = prompt('Inserisci il tuo cognome');

//Chiedi l'età
const userAge = prompt('Inserisci la tua età')

//Chiedi il colore preferito
const favoriteColor = prompt('Inserisci il tuo colore preferito');



//Selezione tag tramite id

const greetingsElement = document.getElementById('greetings');
console.log('Benvenuto'+ " " + firstName + lastName + favoriteColor + userAge);

//Creo una constante con il tutte le informazioni

const assignedUserName = firstName + lastName + favoriteColor + userAge;

// Riportare il risultato in pagina

greetingsElement.innerHTML = 'Benvenuto' + " " + assignedUserName + "" + ", questo è il nome utente che ti è stato assegnato in base alle informazioni che ci hai fornito. Piacere di conoscerti!"

