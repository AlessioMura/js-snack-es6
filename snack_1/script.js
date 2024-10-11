//Snack 1
//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bicycle = [
    {
        nome: 'bici_1',
        peso: 7.2,
    },
    {
        nome: 'bici_2',
        peso: 6.9,
    },
    {
        nome: 'bici_3',
        peso: 6.8,
    },
    {
        nome: 'bici_4',
        peso: 7.1,
    },
    {
        nome: 'bici_5',
        peso: 6.7,
    }
];

//Stampare a schermo la bici con peso minore.

let min_weight = bicycle[0];

for (let i = 0; i < bicycle.length; i++) {

    if (bicycle[i].peso < min_weight.peso) {
        min_weight = bicycle[i];
    }
}
console.log(min_weight);

document.getElementById('output').innerHTML = `The bicycle that weighs the least is "${min_weight.nome}", with a total weight of ${min_weight.peso}`

