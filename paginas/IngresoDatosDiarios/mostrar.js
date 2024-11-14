const NombreClave='datos-De-Gastos-diarios'
let datoGuardado=localStorage.getItem(NombreClave)

if(datoGuardado){
    document.getElementById('mostrar-dato').textContent='El dato ingresado fue: '+ datoGuardado;
}
else{
    document.getElementById('mostrar-dato').textContent='No hay datos guardados.'
}