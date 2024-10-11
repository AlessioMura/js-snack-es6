//Snack2
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teams = [
    {
        nome: 'Juventus',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Inter',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Milan',
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: 'Bologna',
        punti_fatti: 0,
        falli_subiti: 0
    }
];

//Generare numeri random al posto degli 0 nelle proprietà “punti fatti” e “falli subiti”.

function rndm_nmbrs(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

for (let i = 0; i < teams.length; i++) {
    teams[i].punti_fatti = rndm_nmbrs(1, 30);
    teams[i].falli_subiti = rndm_nmbrs(1, 30);


}
console.log(teams);

//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.