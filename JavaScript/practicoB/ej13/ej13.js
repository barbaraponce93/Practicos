  // vamos a acrear un contenedor de imganes
  var imagenes = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
  var indice = 0;

  //funciones para mostrar la anterior
  function anterior() {
      indice--;
      if (indice < 0) {
          indice = imagenes.length - 1; //del inicio voy al final del arreglo
     
      }
      mostrarImagen();
  }

  //funciones para mostrar la siguiente
  function siguiente() {
      indice++;
      if (indice >= imagenes.length) {
          indice = 0; //vuelve al inicio del arreglo
    
      }
      mostrarImagen();
  }

  function mostrarImagen(){
      var imagen = document.getElementById('imagen');
      // imagen.scr = imagenes[indice];
      imagen.src = 'img/'+imagenes[indice]
      // alert('img/'+imagenes[indice])
      // alert(indice)
      // alert(imagenes.length)
     
  }