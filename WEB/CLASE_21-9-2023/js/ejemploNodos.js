function add(){
    let str = prompt('Escribe una cadena', 'Hello World');
    if(str != null){
        //Se crea el nodo hijo
        let newNode = document.createElement('p');
        //Seleccciona el nodo padre
        let fatherNode = document.getElementById('contenido');
        //Se añade al nodo padre
        fatherNode.appendChild(newNode);
        //Se cambia el contenido del nodo hijo
        newNode.innerHTML=str;
        //newNode.setAttribute('class', 'parrafo');
    }
}

// controlador de evento
document.getElementById('agregar').addEventListener('click', add);

function del(){
    let fatherNode = document.getElementById('contenido');
    /* MI FORMA
    let arrayP = fatherNode.getElementsByTagName('p');
    if(arrayP.length > 0){
        fatherNode.removeChild(fatherNode.lastElementChild);
    }
    else{
        alert('[!] No hay parrafos en el contenedor');
    }*/
    try{
        fatherNode.removeChild(fatherNode.lastElementChild);
    }
    catch(error){
        alert('[!] No hay parrafos en el contenedor');
    }
}

// controlador de evento
document.getElementById('elimina').addEventListener('click', del);

function mod(){
    let str = prompt('Escribe una cadena', 'Hello World');
    let fatherNode = document.getElementById('contenido');
    let newNode = document.createElement('button');
    try{
        fatherNode.replaceChild(newNode,fatherNode.firstElementChild);
        newNode.innerHTML=str;
    }
    catch(error){
        alert('[!] No hay elementos :c');
    }

}

// controlador de evento
document.getElementById('modifica').addEventListener('click', mod);
