/*1) Realiza una página que muestre un formulario y verifique la entrada de un número que
esté comprendido entre 1 y 100.*/

function validarNum() {
    var numero = document.getElementById('num').value;
    var respuesta;

    if (isNaN(numero)|| numero=="") {
        respuesta = 'Por favor, ingrese un número.';
    } else if (numero > 100) {
        respuesta = 'El número ingresado es mayor a lo solicitado';
    } else if (numero < 1) {
        respuesta = 'El número ingresado es menor a lo solicitado';
    } else {
        alert('El número ingresado es válido, presione aceptar y será redirigido')
        window.location.href = 'https://www.google.com';
                return false;
    }

    document.getElementById("resultado").innerHTML = respuesta;

    if (respuesta !== 'El número ingresado es válido, presione aceptar y será redirigido') {

        return false;
    } else {
        return true;
    }
}

function redirigirAGoogle() {
            setTimeout(function() {
                window.location.href = "https://www.google.com.ar";
            }, 2000); // 2000 milisegundos = 2 segundos
        }

