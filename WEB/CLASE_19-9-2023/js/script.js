function seleccionaID(){
    //Obtenemos el contenido del input
    const entrada = document.getElementById('entrada').value;
    //Se lo agregamos al parrafo con id parrafo
    document.getElementById('parrafo').innerHTML=entrada;
    //Seleccionamos el parrafo al que le queremos ingresar lo siguiente con el metodo innerHTML
    document.getElementById('mensajeBoton').innerHTML='Se selecciono el boton de ID';
}

//Controlador de eventos
document.querySelector('#id').addEventListener('click', seleccionaID);

function seleccionaEtiqueta(){
    //obtener el nodo padre
    let contenido = document.getElementById('contenido');
    // traer elementos de etiqueta input (un array) nodos hijos de contenido
    const entrada = contenido.getElementsByTagName('input');
    //Definimos el contenido del inner con el objeto del array 0 y extraemos el valor
    document.getElementById('parrafo').innerHTML=entrada[0].value;
    //Seleccionamos el parrafo al que le queremos ingresar lo siguiente con el metodo innerHTML
    document.getElementById('mensajeBoton').innerHTML='Se selecciono el boton de Etiqueta';
}

//Controlador de eventos
document.querySelector('#etiqueta').addEventListener('click', seleccionaEtiqueta);

function seleccionaClase(){
    //obtener el nodo padre
    let contenido = document.getElementById('contenido');
    // traer elementos de clase datos (un array) nodos hijos de contenido
    const entrada = contenido.getElementsByClassName('datos');
    //Definimos el contenido del inner con el objeto del array 0 y extraemos el valor
    document.getElementById('parrafo').innerHTML=entrada[0].value;
    /*OTRA FORMA
    contenido.getElementsByClassName('p1')[0].innerHTML=entrada[0].value;
    */
    //Seleccionamos el parrafo al que le queremos ingresar lo siguiente con el metodo innerHTML
    document.getElementById('mensajeBoton').innerHTML='Se selecciono el boton de Clase';
}

//Controlador de eventos
document.querySelector('#clase').addEventListener('click', seleccionaClase);

function seleccionaSelector(){
    //obtener el nodo padre
    let contenido = document.getElementById('contenido');
    // seleccionamos el selector que cumpla con la condicion y le colocamos lo del input
    contenido.querySelector('div p').innerHTML=document.getElementById('entrada').value;
    //Seleccionamos el parrafo al que le queremos ingresar lo siguiente con el metodo innerHTML
    document.getElementById('mensajeBoton').innerHTML='Se selecciono el boton de Selector';
}

//Controlador de eventos
document.querySelector('#selector').addEventListener('click', seleccionaSelector);
