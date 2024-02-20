/*9) Realice una página que permita cargar los datos de una persona en un array. Luego la
página deberá mostrar en una tabla html con las cabeceras adecuadas los datos solicitados.*/


var persona = [];

function agregarPersona() {
    var nombre = document.getElementById('nCompleto').value;// traigo llos valores ingresador en el form
    var dni = document.getElementById('dni').value;
    var edad = document.getElementById('edad').value;
    var ciudad = document.getElementById('ciudad').value;

    if (!isNaN(nombre) ) {                          // Validaciones 
        alert('Por favor, ingrese un nombre válido.');
        return; 
    }

 
    if (isNaN(dni) || parseInt(dni) <= 0 ) { 
        alert('Por favor, ingresa una número válido.');
        return; 
    }


   persona = [ // guardamos los datos en el array
        nombre,
        dni,
        edad,
        ciudad
    ]
    mostrarTabla();
}


function mostrarTabla() {
    var tbody = document.getElementById('tablaDatos').tBodies[0];//tBodies devuelve una colección de todos los elementos tbody
    tbody.innerHTML = "";//limpia 

    for (var i = 0; i < persona.length; i++) {
        var fila = tbody.insertRow(0); // Crea la fila de los datos de la persona

        var celdaNombre = fila.insertCell(0);//insertamos celdas para cada dato
        var celdaDni = fila.insertCell(1);
        var celdaEdad = fila.insertCell(2);
        var celdaCiudad = fila.insertCell(3);

        celdaNombre.innerHTML = persona[0];//cargamos los datos en la celda según el indice
        celdaDni.innerHTML = persona[1];
        celdaEdad.innerHTML = persona[2];
        celdaCiudad.innerHTML = persona[3];

        persona = []; // Limpia el array después de mostrar la tabla
    }
    document.getElementById('nCompleto').value = '';// limpiamos los campos una vez que cargamos los datos en la tabla
    document.getElementById('dni').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('ciudad').value = '';


}