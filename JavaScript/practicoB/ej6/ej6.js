/*6) Realiza una página que muestre cinco cuadrados de diferentes colores. Cuando el ratón
pase por encima de alguno de ellos el color de fondo será del color de relleno del cuadrado.*/


function cambioColor(evento) {
  let colorElemento = window.getComputedStyle(evento).backgroundColor;
// obtener el color de fondo  de el elemento (div por el que pasa el mouse) y los asignamos a la variable colorElemento
  document.body.style.backgroundColor=colorElemento;
//establece el color de fondo almacenado en la variable colorElemento en el body

}

function resetearColor(){
document.body.style.backgroundColor = '';

} 