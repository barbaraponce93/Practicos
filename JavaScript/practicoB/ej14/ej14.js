
function validarIngreso() {// Ver video clase 21 si hay dudas.
    let patronUsuario = /^[A-Z][a-zA-Z0-9]*\d.*\d.*\d.*$/;
    let patronPass = /^(?=\d)(?=.*[A-Z]\d$).{8,}$/;

    let validarUser = document.getElementById("usuario").value;
    let validarPass = document.getElementById("contraseña").value;

    if (patronUsuario.test(validarUser) && patronPass.test(validarPass)) {
        alert("ingreso aceptado");
       
        return true;
    } else {
        alert("Usuario y/o clave incorrecto");
         document.getElementById("usuario").value= '';
         document.getElementById("contraseña").value = '';
        return false;
    }


} 