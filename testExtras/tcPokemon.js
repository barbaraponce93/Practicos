// array de pokemon
let nombrespokemon=['Charmander', 'Pikachu','Bulbasaur', 'Squirtle' ];
//matriz de hab
let habilidades=[
    [80, 75, 90],  //Charmander
    [70, 60, 80],   //Pikachu
    [40, 55, 70],//Bulbasaur
    [45, 70, 60]];  //Squirtle



    //funcion que calcula el promedio
 function calcularPromHab(habilidades) {
    let promedios=[];
        for (let i= 0; i < habilidades.length; i++) {
            let fila=habilidades[i];
           let suma= fila.reduce(( Total,habilidad)=> Total+habilidad,0);
                // a esta fila                            lógica(+) , donde arranca el acumulador
            promedios [i]=suma/fila.length;
        }
        return promedios;
        
    }
    //funcion que clasifica a los pokemos aptos o no
    function aptitud(nombrespokemon, promedios){
        for (let i= 0; i < promedios.length; i++) {
            if(promedios[i]>=70){
            console.log("El pokemon "+nombrespokemon[i] +" es apto para competición, su promedio es de " + promedios[i] );
            }else{
                console.log("El pokemon "+nombrespokemon[i] +" es NO es apto para competición, su promedio es de " + promedios[i] );
            }


        }

    }

    let promediosVector=calcularPromHab(habilidades);
   aptitud(nombrespokemon, promediosVector);