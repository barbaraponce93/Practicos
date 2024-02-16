/*3) Analice y repare el código para que se impriman todos los valores excepto los números.
var lista = new Array ('a','b','c','1','x','9',’d’,’4);
var item ;
for (item in lista)
{
if (lista[item] == "1" or “9”)
break;
console.log(lista[item]);
}*/

var lista = new Array ('a','b','c','1','x','9','d','4');//creamos el array
var item ;// se usa como indice en la iteracion
for (item in lista){//recorre todos los índices, mientras que item toma el valor de cada índice en cada iteración.
if (lista[item] == 1 || lista[item] ==9 |lista[item] ==4){// si encuentra alguno de estos números continua con la siguiente iteracion
    continue;
}
console.log(lista[item]);//imprime todo lo que no se encuentre en el if(1.9.4)
}


