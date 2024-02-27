//Realiza una página que implemente una calculadora aritmética.

var pantalla = document.querySelector(".pantalla"); //llamamos a la pantalla
var botones = document.querySelectorAll(".btn");//llamamos a TODOS los botones
// tenemos que agregar un evento a cada boton
//querySelectorAll nos hace un array
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        var botonApretado = boton.textContent// trae el contenido del boton
        if (boton.id === "c") {
            pantalla.textContent = '0';
            return;
        }

        if (boton.id == "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {//si la pantalla tiene 1 numero al presionar la flecha la pantalla vuelva a cero
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);//slice:toma una subcadena  desde el índice 0 hasta el último y  elimina el último caracter.

            }
            return;
        }

        if(boton.id=="igual"){
            try{// este try es para el caso en que se presiono botones erroneamente
                  pantalla.textContent = eval(pantalla.textContent);  //eval: funcion de js que evalua String que tengan operaciones matematicas
            } catch{
                pantalla.textContent= "Error!";
            }
        
            return;

        }


        if (pantalla.textContent === "0" || pantalla.textContent === "Error!" ) {
            pantalla.textContent = botonApretado//borramos el cero del inicio y agregamos los numeros presionados

        } else {
            pantalla.textContent += botonApretado//toma el contenido actual de la pantalla y agrega el valor del botón que se ha presionado
        }


    })

})