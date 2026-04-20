const abrirDialogo=document.getElementById('abrir-modal');
const cerrarDialogo=document.getElementById('Cerrar-modal');
const miDialogo=document.getElementById('mi-dialogo');

abrirDialogo.addEventListener('click',()=>{
    miDialogo.showModal()    
});
cerrarDialogo.addEventListener('click',()=>{
    miDialogo.close()
});