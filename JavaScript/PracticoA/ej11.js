/*11) Realice una página que permita cargar una fecha cargando el día, mes y año por
separado, verifique si es válida e informe la fecha si lo es o diga que es inválida.*/


function verificarFecha() {
    var dia = parseInt(document.getElementById('dia').value, 10);
    var mes = parseInt(document.getElementById('mes').value, 10) - 1;
    var year = parseInt(document.getElementById('anio').value, 10);


    if (fechaValida(dia, mes, year)) {//si la funcion fV no retorna true la fecha es válida
        document.getElementById('resultado').innerHTML = "La fecha ingresada es válida: " + dia + '/' + (mes + 1) + '/' + year;
    } else {
        document.getElementById('resultado').innerHTML = "La fecha es inválida.";
    }
}


function fechaValida(dia, mes, year) {

    var testDate = new Date(year, mes, dia);

    return (// estas comparaciónes son para asegurarse de que no haya cambios o ajustes automáticos realizados por JavaScript al crear el objeto Date.
        testDate.getDate() === dia &&
        testDate.getDate() === dia &&
        testDate.getFullYear() === year
    );
}

