/*Haz un programa que dibuje un rectángulo de asteriscos a partir de una base y altura
especificada por el usuario.*/

function dibujarRectangulo(base, altura) {
    // var altura = parseInt(prompt('Ingrese la altura del rectangulo'));
    //var base = parseInt(prompt('Ingrese la base del rectangulo'));



    for (var i = 0; i < altura; i++) {
        var linea = "";
        console.log("\n");

        for (var j = 0; j < base; j++) {

            if (i === 0 || i === altura - 1 || j === 0 || j === base - 1) {
                linea += '*';
            } else {
                linea += ' '; // Espacio en lugar de asterisco para el interior
            }





        }
        console.log(linea);

    }

}

const baseUsuario = parseInt(prompt("Ingresa la base del rectángulo:"));
const alturaUsuario = parseInt(prompt("Ingresa la altura del rectángulo:"));

// Verificar si las entradas son números válidos
if (isNaN(baseUsuario) || isNaN(alturaUsuario) || baseUsuario <= 0 || alturaUsuario <= 0) {
    console.log("Por favor, ingresa números válidos y mayores que cero.");
} else {
    // Dibujar el rectángulo
    dibujarRectangulo(baseUsuario, alturaUsuario);
}
