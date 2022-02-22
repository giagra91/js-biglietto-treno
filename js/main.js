// Costante della distanza da percorrere
const distance = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
console.log(distance);

// Costante riguardante l'età del passeggero
const age = parseFloat(prompt("Quanti anni hai?"));
console.log(age);

// Variabile per il costo del biglietto
let ticketPrice = distance * 0.21; // toFixed(2) per limitare il prezzo del biglietto alla seconda cifra dopo la virgola
console.log(ticketPrice);

// Condizioni per sconto clienti
if (age < 18){ // condizione se il cliente è minorenne
    ticketPrice = ((ticketPrice / 100) * 80).toFixed(2);
    console.log(ticketPrice);
} else if (age > 65) {  // condizione se il cliente ha più di 65 anni
    ticketPrice = ((ticketPrice / 100) * 60).toFixed(2);
    console.log(ticketPrice);
} else { // condizione per tutti gli altri casi
    ticketPrice = (ticketPrice).toFixed(2);
    console.log(ticketPrice);
} 

// Output riguardo la distanza
document.getElementById("my-distance").innerHTML = distance + " Km";

// Output riguardo l'età
document.getElementById("my-age").innerHTML = age + " anni";

// Output riguardo il prezzo del biglietto
document.getElementById("my-ticket-price").innerHTML = ticketPrice + " €";