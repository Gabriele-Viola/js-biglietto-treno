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
let under_18 = price_at_kilometres * 20 / 100;
let over_65 = price_at_kilometres * 40 / 100;
let your_ticket;
let messagge;

//Raccogliere dati

kilometres = prompt('How many kilometres do you want to travel?');
age = prompt('How old are you?')
// let sum = parseFloat (kilometres) + parseInt(age);

// elaborazione dati

if ( age < 18 ){
    your_ticket = kilometres * under_18
} else if ( age >= 18 && age < 65 ){
    your_ticket = kilometres * price_at_kilometres
}else{
    your_ticket = kilometres * over_65
}
console.log(your_ticket.toFixed(2));

