/*6) Leer una cadena de texto desde un prompt y generar un array con la función split().
Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra,
última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la “a”
hasta la “z” y las palabras ordenadas de la “z” hasta la ”a”.*/
var texto = prompt('Ingrese un texto');
var arrayPalabras = texto.split(' ');//se utiliza para dividir una cadena en un array de subcadenas basándose en un delimitador especificado ej una ,
                                    //split es una funcion de String


console.log("Número de palabras:", arrayPalabras.length);

var primerPalabra =; 
console.log("Primer palabra:", arrayPalabras[0]);

var ultimaPalabra = arrayPalabras[arrayPalabras.length - 1]

console.log("Ultima palabra:", ultimaPalabra);

console.log('Palabras en orden inverso: ',arrayPalabras.reverse())

console.log("Orden a-z:",sort() );// mal , supongo hay que clonar el array

console.log("Orden z-a:", arrayPalabras.sort().reverse() );

