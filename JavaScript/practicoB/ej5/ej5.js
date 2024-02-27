function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono1 = document.getElementById('telefono1').value;
    var telefono2 = document.getElementById('telefono2').value;
    var telefono3 = document.getElementById('telefono3').value;
   
   
    if (nombre== ''|| !/^[a-zA-Z\s]*$/.test(nombre)) {
        document.getElementById("resp").innerHTML = 'Por favor, ingrese un nombre válido.';
        return false;
    }

  
    var patronCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!patronCorreo.test(correo) || correo==="" ) {
        
        document.getElementById("resp").innerHTML = 'Por favor, ingrese una dirección de correo electrónico válida.';
        return false;
    }

    if (telefono1===""|| isNaN(telefono1)) {
       
        document.getElementById("resp").innerHTML = 'Por favor, ingrese al menos un número de teléfono .';
        return false;
    }
    if ( isNaN(telefono2)) {
       
        document.getElementById("resp").innerHTML ='Por favor, ingrese un número de teléfono  .';
        return false;
    }
    if ( isNaN(telefono3)) {
        document.getElementById("resp").innerHTML = 'Por favor, ingrese un número de teléfono.';

        return false;
    }
   
    alert('¡Contacto guardado correctamente!');
    return true;
} /*--Realice una página donde el usuario pueda cargar un contacto. El contacto de esa
persona debe tener al menos un teléfono y como máximo 3. Además debe ser obligatoria la
carga del mail. Realice las validaciones necesarias.-->*/