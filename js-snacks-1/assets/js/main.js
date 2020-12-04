// Crea 10 oggetti che rappresentano una zucchina,
// indicando per ognuna varietà, peso e lunghezza.
var zucchine = [

    zucchinaUno = {
        varietà: "Zucchino nero di Milano",
        peso: 1,
        lunghezza: 20
    },
    zucchinaDue = {
        varietà: "Zucchino romanesco",
        peso: 2,
        lunghezza: 20
    },
    zucchinaTre = {
        varietà: "Zucchino ortolano di Faenza",
        peso: 3,
        lunghezza: 20
    },
    zucchinaQuattro = {
        varietà: "Zucchina lunga fiorentina",
        peso: 10,
        lunghezza: 20
    },
    zucchinaCinque = {
        varietà: "Zucchino siciliano",
        peso: 9,
        lunghezza: 20
    },
    zucchinaSei = {
        varietà: "Zucchina striata di Napoli",
        peso: 8,
        lunghezza: 20
    },
    zucchinaSette = {
        varietà: "Zucchina bianca triestina",
        peso: 7,
        lunghezza: 20
    },
    zucchinaOtto = {
        varietà: "Zucchina rigata pugliese",
        peso: 6,
        lunghezza: 20
    },
    zucchinaNove = {
        varietà: "Zucchino tondo di Piacenza",
        peso: 5,
        lunghezza: 20
    },
    zucchinaDieci = {
        varietà: "Zucchino tondo di Nizza",
        peso: 4,
        lunghezza: 20
    },
]
// Calcola quanto pesano tutte le zucchine.
var pesoTotale = 0;
zucchine.forEach(element => {
    pesoTotale += element.peso;
});
console.log(pesoTotale);