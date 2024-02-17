/*El programa “elige” un número al azar entre uno y un millón y pregunta por el mismo. El
visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva
ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número,
hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número
de intentos que ha realizado hasta el acierto.*/

var numSecreto = Math.floor(Math.random() * 10) + 1;
var numUsuario = 0 ;
var contador = 0;
do {
    var numUsuario = parseInt(prompt('Ingrese un número para adivinar', 'Entre 1 y 1.000.000'));

    if (numSecreto > numUsuario) {
        alert('El número es mayor')

    } else if (numSecreto < numUsuario) {
        alert('El número es menor');
    } 

    contador++;

} while (numSecreto !== numUsuario) {
    alert('Felicidades Adivinaste el número en ' + contador + ' intentos.');

}
