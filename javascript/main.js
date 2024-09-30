// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// 👉 il prezzo del biglietto è definito in base ai km (0.21 € al km)
// 👉 va applicato uno sconto del 20% per i minorenni
// 👉 va applicato uno sconto del 40% per gli over 65.

// 👉 L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

//Preparazione

let kilometres;
let age;
const price_at_kilometres = 0.21;
let under_18 ;
let over_65 ;

//Raccogliere dati

kilometres = prompt('How many kilometres do you want to travel?');
age = prompt('How old are you?')
// let sum = parseFloat (kilometres) + parseFloat(age);


