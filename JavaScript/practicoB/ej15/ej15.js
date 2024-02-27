function cambiar() {
    // let nuevaHojaStyle = document.createComment('link');
    // estilos.rel = "stylesheet";
    // estilos.type = "text/css";
    // estilos.href = "estilo2.css"
    

    let nuevaHojaStyle = document.getElementById('link')
    
     nuevaHojaStyle.href = "Ejercicio15-2.css"
     setTimeout(function() { nuevaHojaStyle.href = "Ejercicio15-1.css"}, 1200);


    // if(nuevaHojaStyle.getAttribute('href')=="Ejercicio15-1.css"){
    //     nuevaHojaStyle.href = "Ejercicio15-2.css"
    //     document.getElementById('button').innerHTML = 'volver'
    // } else {
    //     nuevaHojaStyle.href = "Ejercicio15-1.css"
    //     document.getElementById('button').innerHTML = "Quiero hacer zoom"
    // }

}