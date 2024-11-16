const NombreClave = "datos-De-Gastos-diarios";
const NombreClaveFechas="Fecha"
const NombreClaveHoras="Hora"
let DatosGastos=localStorage.getItem(NombreClave)
let fechasGuardadas=localStorage.getItem(NombreClaveFechas)
let horasGuardadas=localStorage.getItem(NombreClaveHoras)


let mostrarDiv=document.getElementById('mostrar-Gastos')
DatosGastos=DatosGastos.split(',')
fechasGuardadas=fechasGuardadas.split(',')
horasGuardadas=horasGuardadas.split(',')

if(DatosGastos.length>=0){
    for(let i=0;i<DatosGastos.length;i++)
    {
        let divElemento = document.createElement('div');
        divElemento.classList.add('Gasto')
        divElemento.textContent="Fecha del Gasto: "+fechasGuardadas[i]+" Hora: "+horasGuardadas[i]+" Monto: "+DatosGastos[i];
        mostrarDiv.appendChild(divElemento);
    }

}
else{
    mostrarDiv.textContent='No hay datos guardados.'
}