
function añadir() {
    var nuevo = document.getElementById("nuevaOpcion").value;//obtenemos el valor ingresado
    var select = document.getElementById("selector");//aca recibimos el elemento(select) al que se le va agregar la opcion
    var option = document.createElement("Option")//creamos un elemento, en este caso un option
    option.value = nuevo;//le asignamos el valor que nos paso el usuario por el campo
    option.text = nuevo;// se establece el texto que se mostrará en el select
    select.add(option);// se agrega el option al select usando el metodo add
    document.getElementById("nuevaOpcion").value = "";//limpia el campo


}

function eliminar() {
    var selector = document.getElementById("selector");//traemos la seleccion
    selector.remove(selector.selectedIndex);//la eliminamos
   ///cargarCampo().value="";
   var modTexto = document.getElementById("modTexto");//por la funcion cargarcampo el campo de mod queda cargado y al eliminar una opcion si no borramos el campo este queda cargado con el elemento ya eliminado
   modTexto.value = ""; 

}

function modificar() {
    var selector = document.getElementById("selector");
    var indiceSeleccionado = selector.selectedIndex;// Obtenemos el índice de la opción seleccionada en el select

    if (indiceSeleccionado !== -1) {// si hay una seleccion obtenemos el nuevo texto del campo
        var nuevoTexto = document.getElementById("modTexto").value;
        selector.options[indiceSeleccionado].text = nuevoTexto;// Actualizar la opción seleccionada con el nuevo texto
    }
}

function cargarCampo() {//carga el campo de texto de modificar cuando hay una seleccion
    var selector = document.getElementById("selector");
    var opcionSeleccionada = selector.options[selector.selectedIndex].value;
    document.getElementById("modTexto").value = opcionSeleccionada;
}