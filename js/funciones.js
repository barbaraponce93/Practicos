function sumar(a,b){
    //a y b solo las manejo dentro de la funcion
    return a+b; 
}

// invoco la funcion
let resultado=sumar(20,15);
console.log("La suma es " + resultado)

function algo(funcParam,dato){

    let res= funcParam(dato);
    console.log("Resultado "+res);
 }
 
 
 
 //interfaz funcional
 algo((a)=>{return a*2},90);

 function sumar(){//funcion sin parametros, asi se pueden pasar los numeros que se necesiten

    let total=0;
    for(let i=0;i < arguments.length;i++){

        total+=arguments[i];

    }
    return total;

}

let res=sumar(20,33,45,10);
console.log("resultado "+res);


let lista=[];

lista[0]="uno";
lista[1]="dos";

//agregar al final
lista.push("ultimo");

//agregar adelante
lista.unshift("primero");


//eliminar el ultimo elemento
lista.pop();

//eliminar el primer elemento
lista.shift();

//clonar
let otraLista=lista.slice();

//concatenar (unir)
let diferente=["tres","cuatro"];

let otro=lista.concat(diferente);

//Cambiar elementos.
otro.fill("x",1,2);

//Obtener la posicion de un elemento.
let indice=otro.indexOf('cinco');
console.log("Posicion "+indice);

let arreglo=["b","a","c"];
console.log("ordenar "+arreglo.sort());

console.log(lista);
console.log(otraLista);
console.log(otro);


let fecha=new Date(2024,1,9);

console.log(fecha);
console.log(fecha.getDate());
console.log(fecha.getDay());
console.log(fecha.toDateString());
console.log(fecha.toISOString());
console.log(fecha.toLocaleDateString());