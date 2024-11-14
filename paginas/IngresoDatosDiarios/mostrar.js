const NombreClave='datos-De-Gastos-diarios'
let DatosGastos=localStorage.getItem(NombreClave)

let mostrarDiv=document.getElementById('mostrar-Gastos')
DatosGastos=DatosGastos.split(',')


if(DatosGastos.length>=0){
    DatosGastos.forEach(function(Gasto)
    {
        let divElemento = document.createElement('div');
        divElemento.classList.add('Gasto')
        divElemento.textContent="Gasto: "+Gasto;
        mostrarDiv.appendChild(divElemento);
    })
}
else{
    mostrarDiv.textContent='No hay datos guardados.'
}