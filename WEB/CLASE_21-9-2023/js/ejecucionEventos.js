
//Burbujeo (elementos hijos -> elemento padre)
document.getElementById('burbujeo').addEventListener('click', ()=>{
    document.getElementById('burbujeo').style.backgroundColor='yellow';
}, false);

document.getElementById('p1').addEventListener('click', ()=>alert('[info] Haz dado clic al parrafo'), false);

// Captura (Elemento padre -> elementos hijos)
document.getElementById('captura').addEventListener('click', ()=>alert('[info] Hola soy un DIV'), true);

document.getElementById('p2').addEventListener('click', ()=>{
    document.getElementById('p2').style.color='blue';
}, true);
