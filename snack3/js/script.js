// Snack 3

// Dato l’array di nomi:
// const myArray = [‘Michele’, ‘Fabio’, ‘Roberto’, ‘Giovanni’, ‘Simone’, ‘Chiara’];

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

console.log(myArray);

// e dati due numeri min e max (min più piccolo di max).
let numeriMin = 3;
let numeriMax = 5;
// Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
// Eseguiamo questo esercizio prima con forEach e poi con filter.

const nuovoArray = [];

// CON CICLO FOREACH

myArray.forEach((element, i) => {

    element = myArray;
    if(i >= numeriMin && i <= numeriMax){
        nuovoArray.push(element[i]);
    }
});

console.log(nuovoArray);

// CON CICLO FILTER

// const array = myArray.filter((element, i) => {

//     element = myArray;
//     if(i >= numeriMin && i <= numeriMax){
//         // nuovoArray.push(element[i]);
//         return nuovoArray;
//     }
// });
// console.log(nuovoArray);

const array = myArray.filter((element, i) => (i >= numeriMin && i <= numeriMax));

console.log(array);