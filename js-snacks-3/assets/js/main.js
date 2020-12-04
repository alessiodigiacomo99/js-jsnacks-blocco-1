// Crea 10 oggetti che rappresentano una zucchina.
var zucchine = [

    zucchinaUno = {
        varietà: "Zucchino nero di Milano",
        peso: 1,
        lunghezza: 10
    },
    zucchinaDue = {
        varietà: "Zucchino romanesco",
        peso: 2,
        lunghezza: 13
    },
    zucchinaTre = {
        varietà: "Zucchino ortolano di Faenza",
        peso: 3,
        lunghezza: 16
    },
    zucchinaQuattro = {
        varietà: "Zucchina lunga fiorentina",
        peso: 10,
        lunghezza: 15
    },
    zucchinaCinque = {
        varietà: "Zucchino siciliano",
        peso: 9,
        lunghezza: 14
    },
    zucchinaSei = {
        varietà: "Zucchina striata di Napoli",
        peso: 8,
        lunghezza: 19
    },
    zucchinaSette = {
        varietà: "Zucchina bianca triestina",
        peso: 7,
        lunghezza: 17
    },
    zucchinaOtto = {
        varietà: "Zucchina rigata pugliese",
        peso: 6,
        lunghezza: 25
    },
    zucchinaNove = {
        varietà: "Zucchino tondo di Piacenza",
        peso: 5,
        lunghezza: 30
    },
    zucchinaDieci = {
        varietà: "Zucchino tondo di Nizza",
        peso: 4,
        lunghezza: 28
    },
]
var zucchinePiccole = [];
var zucchineGrandi = [];
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
zucchine.forEach(element => {
    if (element.lunghezza < 15){
        zucchinePiccole.push(element);
    }else{
        zucchineGrandi.push(element);
    }
});
console.log(zucchinePiccole, zucchineGrandi);
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine
var zucchinePiccolePeso = 0;
var zucchineGrandiPeso = 0;
zucchinePiccole.forEach(element => {
    zucchinePiccolePeso += element.peso;
});
console.log(zucchinePiccolePeso);
zucchineGrandi.forEach(element => {
    zucchineGrandiPeso += element.peso;
});
console.log(zucchineGrandiPeso);