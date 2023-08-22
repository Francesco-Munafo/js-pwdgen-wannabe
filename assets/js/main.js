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

//Chiedo un numero a piacere
const favoriteNumber = prompt('Inserisci un numero a tuo piacimento es. Il tuo numero preferito')



//Selezione tag tramite id

const greetingsElement = document.getElementById('greetings');
console.log('Benvenuto'+ " " + firstName + lastName + favoriteColor + userAge);

//Creo una costante con la somma dell'età + il numero preferito

const generatedNumber = Number(userAge) + Number(favoriteNumber);

//Creo una constante con tutte le informazioni

const generatedPassword = firstName + lastName + favoriteColor + generatedNumber;

// Riportare il risultato in pagina

greetingsElement.innerHTML = 'Benvenuto' + " " + firstName + ", questo è la password molto sicura generata in base alle informazioni che ci hai fornito:" + " " + generatedPassword

