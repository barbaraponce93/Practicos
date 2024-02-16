var num1=prompt("Ingrese el primer número");
var num2=prompt("Ingrese el segundo número");
var resta=num1-num2;


if(resta>0){
    console.log("El resultado es mayor a 0"+" " );
    if(resta%2==0){
        console.log("El resultado es par"+"" );
    }else{
        console.log("El resultado es impar"+"" );
    }
    
}else{
    console.log("Es menor o igual a cero");
}