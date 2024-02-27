/*Realice un formulario que contenga Nombre, Apellido, Sexo, Fecha de nacimiento y mail.
Luego realice las validaciones para cada uno de los campos.*/


function validarFormulario() {

    // rescato todos los datos de mi formulario y los guardo en una varible para luego analizarlos
    // let name = document.forms["registroForm"][nombre].value 
    let name = document.getElementById('nombre').value; //obtengo el elemento del input
    let lastname = document.getElementById('apellido').value
    let sexo = document.getElementById('sexo').value // OJO no devuelve el texto, devuelve lo definido como value
    let fechaNacimiento = document.getElementById('fechaNacimiento').value
    let email = document.getElementById('email').value
    // alert(name)

    // VALIDACION DE NOMBRE
    if (name == '' || !isNaN(name)) {
        alert('complete con un nombre válido ')
        document.getElementById("nombre").focus(); // coloca el cursor donde falta el dato
        return false;
    }
    //VALIDAMOS EL APELLIDO
    if (lastname == '' || !isNaN(lastname)) {
        alert('complete con un apellido válido')
        document.getElementById("apellido").focus();
        return false;
    }
    //VALIDACION DE SEXO
    if (sexo == '') {
        alert('seleccione su sexo')
        return false;
    }
    if (fechaNacimiento == '') {
        alert('seleccione su fecha de nacimiento')
        return false;
    }

    // aca vamos a tener que hacer un test
    var testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!testEmail.test(email)) {
        alert('Ingrese un correo valido')
        document.getElementById("email").focus();
        return false;
    }



    alert('Formulario enviado correctamente')
    return true;


}