
function funciondevalidacion() {
    let name = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value;
    

    // verificamos los valores del nombre
    let testname = /^[a-zA-Z]{5,}$/ // generamos una expresion regular para hacer el test
    if (!testname.test(name) || name=="") {
        alert("Ingrese un nombre que sea mayor de cuatro caracteres, El nombre sólo debe contener caracteres del alfabeto español");
        document.getElementById('nombre').value = ""
        document.getElementById("nombre").focus();
        return false;
    }

    // verificamos la edad
    let testedad = /^[0-9]{1}[0-9]{1}$/
    if (!testedad.test(edad) || edad>30 || edad<18 || edad==""){
        alert("Ingrese una edad que este comprendida entre 18 y 30");
        document.getElementById('edad').value = ""
        document.getElementById("edad").focus();
        return false;
    }

    let testcorreo =/^([a-z0-9_\.-]+){5}@([\da-z\.-]+).([a-z\.])$/
    if (!testcorreo.test(email) || email == ""){
        alert("La dirección de correo debe incluir una arroba y su longitud sea superior a cinco caracteres");
        document.getElementById('email').value = ""
        document.getElementById("email").focus();
        return false;
    }
alert('Formulario enviado correctamente')
return true;

}