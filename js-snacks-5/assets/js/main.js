/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri (“a” più piccolo di “b” e “b” grande al
massimo quanto il numero di elementi dell’array).
La funzione ritornerà un nuovo array con i valori che
hanno la posizione compresa tra “a” e “b” */
function newArray(array, numeroA, numeroB){
    if (array.length >= numeroB && numeroB > numeroA){
        var differenza = numeroB - numeroA - 1;
        array = [];
        for(var i = 0; i < differenza; i++){
            var numeroRandom = Math.floor(Math.random() * (numeroB - numeroA - 1) + numeroA + 1);
            if(!array.includes(numeroRandom)){
                array.push(numeroRandom);
            }else{
                i--;
            }
            array.sort();
        }
        console.log(array);
    }
};
arrayA = ["a", "b", "c", "d", "a", "b", "c", "d"];
numeroUno = 6;
numeroDue = 1;
newArray(arrayA, numeroDue, numeroUno);
