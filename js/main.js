// Costante della distanza da percorrere
const distance = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
console.log(distance);

// Costante riguardante l'età del passeggero
const age = parseFloat(prompt("Quanti anni hai?"));
console.log(age);

// Variabile per il costo del biglietto
let ticketPrice = distance * 0.21; 
console.log(ticketPrice);

// Condizioni per sconto clienti
if (age < 18){ // condizione se il cliente è minorenne
    ticketPrice = ((ticketPrice / 100) * 80).toFixed(2);
    console.log(`Il cliente è minorenne quindi paga € ` + ticketPrice);
} else if (age > 65) {  // condizione se il cliente ha più di 65 anni
    ticketPrice = ((ticketPrice / 100) * 60).toFixed(2);
    console.log(`Il cliente ha più di 65 anni quindi paga € ` + ticketPrice);
} else if (age <= 65){ // condizione per tutti gli altri casi
    ticketPrice = (ticketPrice).toFixed(2);
    console.log(`Il cliente ha tra i 18 e i 65 anni quindi paga il prezzo pieno`);
} else {
    ticketPrice = (ticketPrice).toFixed(2);
    console.log(`Il valore è errato!`)
}

// Output riguardo la distanza
document.getElementById("my-distance").innerHTML = distance + " Km";

// Output riguardo l'età
document.getElementById("my-age").innerHTML = age + " anni";

// Output riguardo il prezzo del biglietto
document.getElementById("my-ticket-price").innerHTML = `Il cliente ha ${age} anni, quindi il prezzo è ${ticketPrice} €`;

let errorDistance;
errorDistance = "Il valore riferito alla distanza è errato";

let errorAge;
errorAge = "Il valore riferito all'età è errato";

if (isNaN(distance) ){
    console.log(`Il valore della distanza inserito è errato!`);
    alert(errorDistance);
} else {
    console.log(`Il valore è ${distance} Km`);
}

if (isNaN(age) ){
    console.log(`Il valore riferito all'età inserito è errato!`);
    alert(errorAge);
} else {
    console.log(`Il valore è ${age} anni`);
}