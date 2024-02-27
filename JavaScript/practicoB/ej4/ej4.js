
const boton1 = document.getElementById('primerBoton');
boton1.addEventListener('click', cargarSegundoFormulario)

function cargarSegundoFormulario() {


    // necesito crear campos segun la cantidad de canciones que se tenga por eso voy a necesitar un for y rescatar las variables
    var numCanciones = parseInt(document.getElementById('numCanciones').value);
if ( isNaN(numCanciones) || numCanciones <= 0 || numCanciones === '') {
    alert('Ingrese un número válido de canciones para el álbum');
    document.getElementById('numCanciones').value = "";
    document.getElementById('numCanciones').focus();
    return false;
}


    // voy a crear tantos elementos como numero de canciones
    for (let i = 0; i < numCanciones; i++) {
        var inputCreado = document.createElement('input');
        inputCreado.type = 'text';
        inputCreado.name = 'nombreDeLaCancion' + (i + 1);
        inputCreado.placeholder = 'Nombre de la Canción ' + (i + 1); // ingresa un texto fantasma

        var inputDeLaDuracion = document.createElement('input')
        inputDeLaDuracion.type = 'text';
        inputDeLaDuracion.name = 'duracionDeLaCancion' + (i + 1);
        inputDeLaDuracion.placeholder = 'Duracion de la Canción ' + (i + 1);

        // Una vez creado los elementos, acedo mi div vacío
        var elDivVacio = document.getElementById('ingresartemas');
        // songInputsDiv.innerHTML = '';
        elDivVacio.appendChild(inputCreado);
        elDivVacio.appendChild(inputDeLaDuracion);
        elDivVacio.appendChild(document.createElement('br'));


    }
    document.getElementById('temaForm').classList.remove('hidden');
}

const guardar = document.getElementById('boton2');
guardar.addEventListener('click', crearlista)

function crearlista() {

    



    var coleccionDeCanciones = document.getElementById('ingresartemas').getElementsByTagName('input'); // aca mejor debe ser un querryall pero no lo se bien (mejorar)
    for (let i = 0; i < coleccionDeCanciones.length; i += 2) {

        var duracion = coleccionDeCanciones[i + 1].value
        let testtime = /^[0-5]?[0-9]:[0-5][0-9]$/;
        if(!testtime.test(duracion) || duracion === ''){
            alert('Ingrese el tiempo con el formato 00:00')
            return false
        }

        var nombreDeLaCac = coleccionDeCanciones[i].value;

        if(nombreDeLaCac === ''){
            alert('Ingrese el nombre de la canción')
            return false
        }

    }
   
   
   
    var listaCargada = document.getElementById('listaCargada');
    listaCargada.innerHTML = '<h2>Canciones:</h2>';
    // console.log(coleccionDeCanciones);

    var albumName = document.getElementById('nombrealbum').value;

    for (let i = 0; i < coleccionDeCanciones.length; i += 2) {
        var nombreDeLaCac = coleccionDeCanciones[i].value;
        var duracion = coleccionDeCanciones[i + 1].value;
        // Agregamos un elemento <p> al div vacío
        listaCargada.innerHTML += '<p>Nombre: ' + nombreDeLaCac + ', Duración: ' + duracion + ', álbum: ' + albumName + '</p>';
    }
    document.getElementById('temaForm').classList.add('hidden'); // Oculta el formulario después de mostrar la lista
}

