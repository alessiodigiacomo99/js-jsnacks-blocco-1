/* Scrivi una funzione che accetti una stringa come
argomento e la ritorni girata (es. Ciao -> oaiC) */
function reverse(parola){
    var parolaReverse = "";
    for (var i = 0; i < parola.length; i++){
        var lettera = parola.charAt(i);
        parolaReverse = lettera  + parolaReverse;
    }
    console.log(parolaReverse);
}
reverse("Ciao");