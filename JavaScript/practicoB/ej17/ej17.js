  function lohizo(){
            var cadenaHTML = document.getElementById('cadenaHTML').value;
            escribirCadena(cadenaHTML);
        }
         

        function escribirCadena(cadena){
            var texto = document.getElementById('campo');
            var indice = 0;

            
            //vamos hacer una función recursiva, escribira una letra y luego se llamara a si misma
            function escribir(){
                texto.value += cadena[indice];
                indice ++;
                if(indice < cadena.length){
                    setTimeout(escribir,300); //cuando no entre en el if la terminara la recurcion/ muy parecido a un ciclo
                }
            }
            escribir(); //debemos primero de definir la funcion luego llamarla
        }