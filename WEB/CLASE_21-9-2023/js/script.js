document.getElementById('alerta').addEventListener('dblclick',()=>alert('hola'));

function mensajeEntrada(){
    let valor = prompt('Escribe tu nombre', 'Daniel');
    if(valor != null){
        document.getElementById('mensaje').innerHTML=valor;
    }
    
}

document.getElementById('prompt').addEventListener('click', mensajeEntrada());

document.getElementById('confirm').addEventListener('click', ()=>{
    let flag = confirm('Oprime un boton');
    if(flag){
        document.getElementById('mensaje').innerHTML='You pressed yes';
    }
    else{
        document.getElementById('mensaje').innerHTML='You pressed no';
    }
});


