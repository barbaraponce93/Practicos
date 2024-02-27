//Realiza una página que capture las coordenadas del ratón y las muestre en el título del
//documento (title).


function coordenadas(evento) {
    x = evento.clientX;   //Obtiene la coordenada X (posicion horizontal) del mouse en relacion con el navegador
    y = evento.clientY; // coordenada Y (posicion vertical)

    //Tambien se puede usar pageX y pageY la diferencia es que calculan los valores de x e y desde el inicio de la página web hasta donde sea que termine
    //mientars que clientX y clientY calculan los valores basándose en la parte visible de la pantalla.


    let texto = "coords X: " + x + ",  coords Y: " + y;// contenemos ambas coordenadas en una cadena para despues pasarla al titulo
    document.title = texto;


}