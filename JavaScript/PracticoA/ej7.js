/*7) Cree un archivo html que muestre una frase al azar cada vez que se cargue. Las frases
deberán estar en otro archivo independiente, del tipo .js.*/

const fraserandom = document.getElementById('fraserandom');//Obtiene la referencia al elemento con el ID "fraserandom" que esta en el html
fraserandom.innerHTML = '';// Limpia cualquier contenido previo

var frasesProgramadores = [
    "No es un error, es una característica.",
    "¡Hola Mundo!",
    "El código es como el humor. Cuando tienes que explicarlo, es malo.",
    "Programar es pensar, no escribir.",
    "Solo hay dos cosas difíciles en ciencias de la computación: invalidar caché y poner nombres a las cosas.",
    "El mejor mensaje de error es el que nunca aparece.",
    "Los programadores reales comienzan a contar desde 0.",
    "Programar es lo más cercano que tenemos a un superpoder.",
    "Si al principio no tienes éxito, llámalo versión 1.0.",
    "Depurar es como ser el detective en una película de crímenes donde también eres el asesino."
];

var random = Math.floor(Math.random() * frasesProgramadores.length);//obtenemos un num aleatorio para seleccionar una de las frases 

fraserandom.innerHTML = frasesProgramadores[random];//asignamos la frase al contenido con id fraserandom 








