/*10) Realice una página que permita cargar una fecha en el formato DD-MM-YYYY y diga
cuántos días faltan o ya pasaron respecto del día de hoy.*/

const recargarDato = document.getElementById('btn');
recargarDato.addEventListener('click', calcularDias);

function calcularDias() {
    var fechaEspecifica = document.getElementById('fecha').value;


    //validar 
    let patron = /^\d{2}-\d{2}-\d{4}$/;
    if (patron.test(fechaEspecifica)) {

        let fechaPorPartes = fechaEspecifica.split("-");
        let year = parseInt(fechaPorPartes[2], 10);
        let mes = parseInt(fechaPorPartes[1], 10) - 1; // Restar 1 al mes (los meses en JavaScript son de 0 a 11)
        let dia = parseInt(fechaPorPartes[0], 10);
        let fechaEspecifica1 = new Date(year, mes, dia, 0, 0, 0);
        var fechaActual1 = new Date();
        fechaActual1.setHours(0, 0, 0, 0);

        var diferenciaMilisegundos = Math.abs(fechaEspecifica1 - fechaActual1);
        var diferenciaDias = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
        diferenciaDias = String(diferenciaDias);

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = "La diferencia en días es: " + diferenciaDias;
    } else {
        alert("Fecha incorrecta")
    }

}
