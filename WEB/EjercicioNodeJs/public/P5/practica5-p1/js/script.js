function habilitaBtn(){
    document.getElementById("agregar").disabled = false;
    document.getElementById("eliminar").disabled = false;
    document.getElementById("reemplazar").disabled = false; 
}

function removerNodos(){
    let div_formulario = document.getElementById('formulario');
    
    //Revisar hijos
    while(div_formulario.hasChildNodes()){
        div_formulario.removeChild(div_formulario.firstChild);
    }
}

function crearForm(){
    let addForm = confirm("Deseas agregar un nuevo formulario?");

    if(addForm){
        let nombreForm = prompt("INGRESA EL NOMBRE DEL FORMULARIO","Nombre Formulario");

        if(nombreForm === null){
            location.reload();
        }

        removerNodos();
        //agregar titulo
        habilitaBtn();

        let form = document.createElement("form");
        document.getElementById("formulario").appendChild(form);
        form.setAttribute("id", "newForm");

        let parrafo = document.createElement("p");
        parrafo.setAttribute("id", "nombreForm");
        form.appendChild(parrafo);
        parrafo.innerHTML = nombreForm;

        agregarEnviar();
    }
}

document.getElementById("crear").addEventListener('click', crearForm);

function addElemento(){
    let padreForm = document.getElementById('newForm');
    
    let newElemento;
    let typeElemento;
    let idElemento;
    let nombreLabel;
    let labelElemento
    
    while(true){
        
        let addElemento = confirm("DESEAS AGREGAR UN ELEMENTO?");

        if(addElemento == false){
            break;
        }

        let validacion = false;

        while(!validacion){
            typeElemento = prompt("INGRESE EL TIPO DE ELEMENTO","text");
            switch (typeElemento){
                case 'text':
                    validacion = true;
                break;
                case 'range':
                    validacion = true;
                break;
                case 'password':
                    validacion = true;
                break;
                case 'date':
                    validacion = true;
                break;
                case null:
                    validacion = true;
                break;
                default:
                    alert("Elemento invalido");
                break;
            }
        }
        if(typeElemento === null){
            continue;
        }

        idElemento = prompt("INGRESE EL ID DEL ELEMENTO", "idtxt");
        if(idElemento === null){
            continue;
        }

        nombreLabel = prompt("Ingrese la Etiqueta del elemento", "Texto");
        if(nombreLabel === null){
            continue;
        }
        labelElemento = document.createElement("label");
        labelElemento.innerHTML = nombreLabel;
        labelElemento.setAttribute("id", "label_" + idElemento);
        labelElemento.setAttribute("class", "cl_" + idElemento);

        padreForm.appendChild(labelElemento);
    
        newElemento = document.createElement("input");
        newElemento.setAttribute("type", typeElemento);
        newElemento.setAttribute("id", idElemento);
        newElemento.setAttribute("class", "cl_" + idElemento);
        newElemento.setAttribute("onclick", 'seleccionarElementos(event)');

        padreForm.appendChild(newElemento);
    }
}

document.getElementById('agregar').addEventListener('click', addElemento);

function seleccionarElementos(event){
    let idElementoSeleccionado = event.target.id;

    document.getElementById("idElemento").innerHTML = idElementoSeleccionado;
}

function eliminarElemento(){
    let idSel = document.getElementById('idElemento').textContent;

    if(idSel == 'ID de elementos'){
        alert("[!] No has Seleccionado ningún Elemento. Intenta de Nuevo");
    }
    else {
        let confirmarBorrado = confirm('¿Deseas borrar el elemento seleccionado?');
        if(confirmarBorrado){
            let arrayClase = document.getElementsByClassName('cl_' + idSel);
            //console.log(arrayClase);
            
            if(arrayClase.length != 0){
                for(let i = (arrayClase.length-1); i >= 0 ; i--){
                    arrayClase[i].remove();
                    //console.log(i);
                }
                document.getElementById("idElemento").innerHTML = "ID de elementos";
            }
            else{
                alert("NO HAY ELEMENTOS POR ELIMINAR");
            }
        }
        else{
            alert('[!] Haz decidido no borrar el elemento');
        }
        
    }
}

document.getElementById('eliminar').addEventListener('click', eliminarElemento);

function modificarElemento(){
    let idSel = document.getElementById('idElemento').textContent;

    if(idSel != "ID de elementos"){

        let form = document.getElementById('newForm');
        let arrayForm = form.elements;

        let index;

        for(let i = 0; i < arrayForm.length ; i++){
            if(arrayForm[i].id == idSel){
                index = i;
                break;
            }
        }
        
        //crear
        let padreForm = document.getElementById('newForm');
        
        let newElemento;
        let typeElemento;
        let idElemento;
        let nombreLabel;
        let labelElemento
        
        let addElemento = confirm("DESEAS REEMPLAZAR EL ELEMENTO?");

        if(addElemento){
            
            let validacion = false;
            while(!validacion){
                typeElemento = prompt("INGRESE EL TIPO DE ELEMENTO","text");
                switch (typeElemento){
                    case 'text':
                        validacion = true;
                    break;
                    case 'range':
                        validacion = true;
                    break;
                    case 'password':
                        validacion = true;
                    break;
                    case 'date':
                        validacion = true;
                    break;
                    case null:
                        validacion = true;
                    break;
                    default:
                        alert("[!] Elemento invalido");
                    break;
                }
            }
            if(typeElemento != null){
                idElemento = prompt("INGRESE EL ID DEL ELEMENTO", "idtxt");
                if(idElemento != null){
                    nombreLabel = prompt("Ingrese la Etiqueta del elemento", "Texto");
                    
                    if(nombreLabel != null){
                        let oldLabelElemento = document.getElementById('label_' + idSel);
                        //Creamos Nueva Etiqueta
                        labelElemento = document.createElement("label");
                        labelElemento.innerHTML = nombreLabel;
                        labelElemento.setAttribute("id", "label_" + idElemento);
                        labelElemento.setAttribute("class", "cl_" + idElemento);

                        //Creamos Nuevo Elemento
                        newElemento = document.createElement("input");
                        newElemento.setAttribute("type", typeElemento);
                        newElemento.setAttribute("id", idElemento);
                        newElemento.setAttribute("class", "cl_" + idElemento);
                        newElemento.setAttribute("onclick", 'seleccionarElementos(event)');

                        //Reemplazamos etiqueta
                        padreForm.replaceChild(newElemento, arrayForm[index]);
                        padreForm.replaceChild(labelElemento, oldLabelElemento);

                        document.getElementById("idElemento").innerHTML="ID de elementos";
                    }
                }
            }
        }
    }
    else{
        alert("[!] NO HAY ELEMENTO POR MODIFICAR");
    }
}

document.getElementById('reemplazar').addEventListener('click', modificarElemento);

function agregarEnviar(){
    let enviar = document.createElement("button");
    enviar.setAttribute("id", 'btnEnviar');

    document.getElementById("formulario").appendChild(enviar).innerHTML = "Enviar";
}

//Formulario por defecto
function defaultForm(){
    removerNodos();

    let form = document.createElement("form");
    document.getElementById("formulario").appendChild(form);
    form.setAttribute("id", "newForm");

    let nombreForm = 'Formulario por Defecto';
    let parrafo = document.createElement("p");
    parrafo.setAttribute("id", "nombreForm");
    form.appendChild(parrafo);
    parrafo.innerHTML = nombreForm;

    let newNombre;
    let labelNombre;
    let newCorreo;
    let labelCorreo;

    labelNombre = document.createElement("label");
    labelNombre.innerHTML = 'Nombre';
    labelNombre.setAttribute("id", "label_nombre");
    labelNombre.setAttribute("class", "cl_nombre");

    form.appendChild(labelNombre);
    
    newNombre = document.createElement("input");
    newNombre.setAttribute("type", "text");
    newNombre.setAttribute("id", 'nombreDefault');
    newNombre.setAttribute("class", "cl_nombreDefault");
    newNombre.setAttribute("onclick", 'seleccionarElementos(event)');

    form.appendChild(newNombre);

    labelCorreo = document.createElement("label");
    labelCorreo.innerHTML = 'Correo';
    labelCorreo.setAttribute("id", "label_correo");
    labelCorreo.setAttribute("class", "cl_correo");

    form.appendChild(labelCorreo);
    
    newCorreo = document.createElement("input");
    newCorreo.setAttribute("type", "email");
    newCorreo.setAttribute("id", 'correoDefault');
    newCorreo.setAttribute("class", "cl_correoDefault");
    newCorreo.setAttribute("onclick", 'seleccionarElementos(event)');

    form.appendChild(newCorreo);

    agregarEnviar();
}

document.getElementById('default').addEventListener('click', defaultForm);
