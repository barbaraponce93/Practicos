var imagenacambiar = document.getElementById('imagen');
imagenacambiar.addEventListener('mouseover',cambiarlaimagen)
imagenacambiar.addEventListener('mouseout',volverOriginal)

var eldiv = document.getElementById('div');

function cambiarlaimagen(){
    imagenacambiar.src="img/imagen2.jpg"

    let elementoNuevo = document.createElement('p');
    elementoNuevo.innerText = 'Detrás de cada gran persona hay una gran familia'

    eldiv.appendChild(elementoNuevo);

}
function volverOriginal(){
    imagenacambiar.src="img/imagen1.jpg"

    // var elementoNuevo = document.querySelector('p');
    // if (elementoNuevo) {
    //     eldiv.removeChild(elementoNuevo);
    // }

    var elementoNuevo = document.querySelector('p');
    eldiv.removeChild(elementoNuevo);
}