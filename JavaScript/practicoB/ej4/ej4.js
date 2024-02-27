/*4) Realice un formulario para la carga de datos de un CD. Realice las validaciones
correspondientes. Por medio de un botón agregar canción se debe habilitar una línea nueva
para cargar la canción (nombre, compositor, duración).*/






  function validaciones(){
  

    var nom= document.getElementById('nombre').value;
    var cantante = document.getElementById('compositor').value;
    var tiempo = document.getElementById('duracion').value;
    var album= document.getElementById('album').value;
   
    var cantCanciones = document.getElementById('cantCanciones').value;

    if (nom=='') {                          // Validaciones 
        alert('Por favor, ingrese un nombre');
        return false; 
    }
    if (cantante=='' || !/^[a-zA-Z\s]*$/.test(cantante)) {                         
        alert('Por favor, ingrese el compositor (solo letras)');
        return false; 
    }
    if (isNaN(tiempo)||tiempo==''  ) {                         
        alert('Por favor, ingrese la duracion');
        return false; 
    }
    if (album=='') {                        
      alert('Por favor, ingrese el nombre del álbum');
      return false; 
  }
 
  if (isNaN(cantCanciones)||cantCanciones==''  ) {                         
      alert('Por favor, ingrese la cantidad de canciones que tiene el album');
      return false; 
  }
    


     alert('Canción cargada correctamente');
    return true;
   

  }

  function habilitarCancion() {// cuando se hace click en agregar cancion esta funcion activa los campos para cargar los datos
    var cancion= document.getElementById('datos');
    cancion.style.display = 'block';

  }

  


 