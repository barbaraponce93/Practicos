function convertidor() {
    let montoingresado = document.getElementById('monto').value
    if (isNaN(montoingresado) || montoingresado == "") {
        alert("ingrese un monto");
        document.getElementById('monto').value = "";
        document.getElementById("monto").focus(); 
        return false;
    } else {
        var monto = parseFloat(montoingresado)
        // alert('pesos ' + monto)
    }




    //RESCATAMOS AMBOS RADIOS BUTTON LUEGO CON UN 'IF' VEMOS CUAL ESTA CLIQUEADO / OJO colocamos el '.value' para poder accederemos a el valor del objeto

    let d = document.getElementById('dolares');
    let p = document.getElementById('pesos');
    
    let montoConvertido = 0;
   
    let mensaje= "";




    if (d.checked == true) {
        montoConvertido = monto * 1370;
    

        document.getElementById('mensaje').innerHTML = monto +  ( monto=== 1 ? " dolar es ": " dolares son ") + (montoConvertido === 1 ? "1 peso" : montoConvertido + " pesos");
    }
    if (p.checked == true) {
        montoConvertido = monto / 1370;
      
        document.getElementById('mensaje').innerHTML = monto + (monto === 1 ? " peso es " : " pesos son ") + (montoConvertido === 1 ? "1 dólar" : montoConvertido + " dólares");
     
  
    }

}

