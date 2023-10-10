/*AUTORES*/
/*
 * Mostrar / Ocultar tabla
 */
// Al cargarse el DOM se ejecuta un evento
document.addEventListener('DOMContentLoaded', function(){
    /**
     * La funcion es la de obtener los enlaces de la clase .enlace-libros
     */
    //Obtener los elementos de la clase enlace-libros
    const enlaces = document.querySelectorAll('.enlace-libros');

    //Agregar evento clic a los enlaces
    enlaces.forEach(function(enlace){
        //A cada enlace se le añade un controlador de eventos que ejecuta una funcion
        enlace.addEventListener('click', function(){
            //Evitar la accion por default
            event.preventDefault();

            //Obtenemos el ID del enlace presionado
            const idEnlace = event.currentTarget.id;

            //Obtenemos solo el nombre del enlace
            const nombreAutor = idEnlace.replace('btn-', '');

            //Realizamos la accion que queremos
            /* DEBUG
            console.log(idEnlace);
            console.log(nombreAutor);*/

            //Cambiamos el titulo de la tabla
            document.getElementById('titulo-tabla').innerHTML='Libros del autor ' + nombreAutor;
            //Ocultamos las tarjetas de los autores
            document.getElementById('grid-autores').setAttribute('style', 'display: none;');
            //Mostramos la tabla con sus libros
            document.getElementById('tabla-libros-autores').setAttribute('style', 'display: block;');
            //Al boton de atrás le asignamos un controlador de eventos que ejecuta una funcion flecha
            document.getElementById('btn_Tabla_Atras').addEventListener('click', () => {
                //Se muestran las tarjetas de los autores
                document.getElementById('grid-autores').setAttribute('style', 'display: block;');
                //Se oculta la tabla
                document.getElementById('tabla-libros-autores').setAttribute('style', 'display: none;');
            });
        });
    });
});

// ¿Como puedo añadir un evento a todos los botones de las tarjetas de bootstrap al hacerles click?




