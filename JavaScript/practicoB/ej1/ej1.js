/*1) Realiza una página que muestre un formulario y verifique la entrada de un número que
esté comprendido entre 1 y 100.*/

function validarNum(){
    var numero = document.getElementById('num').value;

    if(numero === ''  ){
    alert('Por favor, ingrese un número.');
        return;
    }
    else if(numero>100){
        alert('El número ingresado es mayor a lo solicitado')
    }else if (numero<1){
        alert('El número ingresado es menor a lo solicitado')
    }


}

