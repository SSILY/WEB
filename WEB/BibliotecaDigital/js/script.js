// Obtener datos del formulario
function obtenerDatosDelFormulario() {
    let nombre = document.getElementById('validationDefault01').value;
    let correo = document.getElementById('validationDefault02').value;
    let comentario = document.getElementById('validationDefault03').value;
    return { nombre, correo, comentario };
}

// Validar el nombre (que sea correcto)
function validarNombre(nombre) {
    // Usamos una expresión regular para permitir solo letras y espacios
    let validChars = /^[A-Za-z\s]+$/;
    return validChars.test(nombre);
}

// Validar el correo (que sea un correo electrónico válido)
function validarCorreo(correo) {
    // Usamos una expresión regular para validar el formato de correo electrónico
    let validExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validExpression.test(correo);
}

// Validar el comentario
function validarComentario(comentario) {
    // verificamos que no esté vacío
    return comentario.trim() !== '';
}

// Función para manejar el envío del formulario
function enviarFormulario(event) {
    event.preventDefault(); // Detener el envío del formulario

    // Obtener los datos del formulario
    let { nombre, correo, comentario } = obtenerDatosDelFormulario();

    // Validar los datos
    let esNombreValido = validarNombre(nombre);
    let esCorreoValido = validarCorreo(correo);
    let esComentarioValido = validarComentario(comentario);

    // Verificar si todos los campos son válidos
    if (esNombreValido && esCorreoValido && esComentarioValido) {
      // Todos los datos son válidos, puedes enviar el formulario aquí
        alert('[INFO] Formulario válido, se puede enviar.');
      // agregar el código para enviar el formulario al servidor.
        console.log(nombre);
        console.log(correo);
        console.log(comentario);
    }
    else {
      // Algunos datos no son válidos, muestra mensajes de error
        if (!esNombreValido) {
            alert('[!] Por favor, ingresa un nombre válido sin caracteres numéricos ni raros.');
        }
        if (!esCorreoValido) {
            alert('[!] Por favor, ingresa un correo electrónico válido.');
        }
        if (!esComentarioValido) {
            alert('[!] Por favor, ingresa un comentario válido.');
        }
    }
}

// Agregar un evento para manejar el envío del formulario
let formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', enviarFormulario);

function cambioBusqueda (){ 
    let genB = document.getElementById('div_generalBus');
    let espB = document.getElementById('div_espBus');
    
    if(this.id == 'btn_general'){
        //Muestra div_generalBus
        genB.setAttribute('style', 'display: "";');
        //Esconde div_espBus
        espB.setAttribute('style', 'display: none;');

    } else if(this.id == 'btn_esp'){
        //Muestra div_espBus
        espB.setAttribute('style', 'display: "";');
        //Esconde div_generalBus
        genB.setAttribute('style', 'display: none;');
    }
}

//Botones de busqueda
document.getElementById('btn_general').addEventListener('click', cambioBusqueda);
document.getElementById('btn_esp').addEventListener('click', cambioBusqueda);

//acerca De
document.getElementById('nav_AcercaDe').addEventListener('click', () => {
    document.getElementById('carouselExampleDark').setAttribute('style', 'display: none;');
    document.getElementById('card_acerca').setAttribute('style', 'display: "block";');
});

document.getElementById('btn_AcercaDe_Atras').addEventListener('click', () => {
    document.getElementById('carouselExampleDark').setAttribute('style', 'display: "block";');
    document.getElementById('card_acerca').setAttribute('style', 'display: none;');
});
