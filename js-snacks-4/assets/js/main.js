/* Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro */
function unisciArray(arrayUno, arrayDue){
    var arrayUnica = [];
    if (arrayUno.length == arrayDue.length){
        for (var i = 0; i < arrayUno.length; i++){
            arrayUnica.push(arrayUno[i]);
            arrayUnica.push(arrayDue[i]);
        }
        console.log(arrayUnica);
    }
}
var arrayU = [1, 2, 3];
var arrayD = ["uno", "due", "tre"];
unisciArray(arrayU, arrayD);
