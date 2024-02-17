/*10) Realice una página que permita cargar una fecha en el formato DD-MM-YYYY y diga
cuántos días faltan o ya pasaron respecto del día de hoy.*/


function calcularDias() {
    const fechaIngresada = document.getElementById('fechaIngresada').value;
    

    const fechaActual = new Date(); //  fecha actual

    const diferenciaMilisegundos = fechaIngresada - fechaActual;    // Calcular la diferencia en milisegundos

const diasDiferencia = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));// Calcular la diferencia en días
  

    // Mostrar el resultado
    const resultadoFechas = document.getElementById('resultado');
    if (diasDiferencia > 0) {
        resultadoFechas.textContent = `Faltan ${diasDiferencia} días para la fecha ingresada.`;
    } else if (diasDiferencia < 0) {
        resultadoFechas.textContent = `Han pasado ${Math.abs(diasDiferencia)} días desde la fecha ingresada.`;
    } else {
        resultadoFechas.textContent = 'La fecha ingresada es hoy.';
    }
}
