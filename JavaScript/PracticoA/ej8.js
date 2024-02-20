/*8) Realice una página que permita al usuario cargar en un array una cantidad variable de
números. Una vez finalizada la carga la página debe mostrar un resumen estadístico
compuesto de los siguientes parámetros: Promedio, Mediana, Mínimo, Máximo y desviación
estándar.*/
// recuperamos el valor que ingresa el usuario cada vez que hace click - para eso uso una funcion f

// recuperamos el valor que ingresa el usuario cada vez que hace click - para eso uso una funcion f

const numeros = [];

const hizoClick = document.getElementById('agregar');
agregar.addEventListener('click', cargarNumero);


//declaron una array para guardar los datos ingresados


function cargarNumero() {
    const elnumero = document.getElementById('numIngresado')

    // antes de guardar el número debo verificar pasarlo al formato numero y ver que no se ingrese una letra

    // transformamos a numero
    const numero = parseFloat(elnumero.value)

    //verificamos que se numero y lo guardamos - podemos usar un if o un try catch

    if (!isNaN(numero)) {

        numeros.push(numero); // cargo en mi array los valores
        numIngresado.value = '' //limpiamos el imput del html

    } else {
        alert('Por favor, ingrese un numero');
        numIngresado.value = ''
    }
}
    // logre almacenar los numero en una array ahora debo procesarlos. Cuando hago click en el boton resultdos debo activar una función.
    // creamos un evento cuando se ejecute el boton resutados

    const mostrarElResultado = document.getElementById('mostrar')
    mostrarElResultado.addEventListener('click', analizar)

    function analizar() {

        //creo una const para alamcenar mi analisis 
        let suma = 0;
        let maximo = numeros[0];
        let minimo = numeros[0];
        let sumaDiferenciasCuadrado = 0;

        for (let i = 0; i < numeros.length; i++) {
            suma += numeros[i];
            if (numeros[i] > maximo) {
                maximo = numeros[i];
            }
            if (numeros[i] < minimo) {
                minimo = numeros[i];
            }
        }
        const promedio = suma / numeros.length;


        for (let i = 0; i < numeros.length; i++) {
            sumaDiferenciasCuadrado += Math.pow(numeros[i] - promedio, 2);
        }
        const desviacionEstandar = Math.sqrt(sumaDiferenciasCuadrado / numeros.length);


        // aca se viene algo complicado porque hay que ver si la cantidad de datos son pares o no.
        const copiaNumeros = numeros.slice(); // aca hacemos una copia para no modificar el original
        let mediana;
        if (numeros.length % 2 === 0) { // la cantidad de datos es par / lo aproximamos por diferencia de cuandrados
            const medio1 = copiaNumeros[numeros.length / 2 - 1];
            const medio2 = copiaNumeros[numeros.length / 2];
            mediana = (medio1 + medio2) / 2;
        } else {// la cantidad de datos es inpar
            mediana = copiaNumeros[Math.floor(numeros.length / 2)];
        }



        // pasarlo al  html
        document.getElementById('promedio').innerHTML = "El promedio es " + promedio;
        document.getElementById('maximo').innerHTML = "El máximo es " + maximo;
        document.getElementById('minimo').innerHTML = "El mínimo es " + minimo;
        document.getElementById('desviacionEstandar').innerHTML = "La desviacion Estandar es " + desviacionEstandar;
        document.getElementById('mediana').innerHTML = "La mediana es " + mediana;

    
    }