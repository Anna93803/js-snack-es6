// Snack 1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const arrayBici = [
    {
        nome: "Basso Venta",
        peso: "5 kg"
    },
    {
        nome: "Rival Etap",
        peso: "6 kg"
    },
    {
        nome: "Wilier",
        peso: "8.2 kg"
    },
    {
        nome: "Sava Phantom",
        peso: "7 kg"
    },
    {
        nome: "AX Lightness",
        peso: "4.4 kg"
    },
    {
        nome: "Trek",
        peso: "8.5 kg",
    },
];

console.log(arrayBici);
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const {nome, peso} = arrayBici[0];

let biciLeggera = {
    nome,
    peso,
};

for(let i = 0; i < arrayBici.length; i++) {

    const {nome, peso} = arrayBici[i];

    if( peso < biciLeggera.peso) {

        biciLeggera = {
            nome,
            peso,
        }
    }
}
console.log(biciLeggera);

const htlmBici = document.getElementById("bici");
htlmBici.innerHTML += `La Bici più leggera: ${biciLeggera.nome} ${biciLeggera.peso}`;
