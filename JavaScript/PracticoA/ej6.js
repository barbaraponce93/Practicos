/*6) Leer una cadena de texto desde un prompt y generar un array con la función split().
Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra,
última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la “a”
hasta la “z” y las palabras ordenadas de la “z” hasta la ”a”.*/
var texto=prompt('Ingrese un texto');
var arrayPalabras=texto.split(' ');


var numPalabras=arrayPalabras.length;
console.log("Número de palabras:", numPalabras);

var primerPalabra=arrayPalabras[0]
console.log("Primer palabra:", primerPalabra);

var ultimaPalabra=arrayPalabras[arrayPalabras.length-1]
console.log("Ultima palabra:", ultimaPalabra);

var inverso= arrayPalabras.reverse();
console.log('Palabras en orden inverso: ', inverso)


var AZ=arrayPalabras.sort();
console.log("Orden a-z:", AZ);

var ZA=arrayPalabras.reverse();
console.log("Orden z-a:", ZA);

