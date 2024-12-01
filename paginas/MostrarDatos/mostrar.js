import ManejoDeDatos from "../ManejoDeDatos";
let manejoDeDatos = new ManejoDeDatos
const NombreClave = "datos-De-Gastos-diarios-Gastos";
const NombreClaveFechas="Fecha-Gastos"
const NombreClaveHoras="Hora-Gastos"


const NombreClaveIngresos = "datos-De-Gastos-diarios-Ingresos";
const NombreClaveIngresosFechas="Fecha-Ingresos"
const NombreClaveIngresosHoras="Hora-Ingresos"


let DatosGastos=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClave)
let fechasGuardadas=localStorage.getItem(NombreClaveFechas)
let horasGuardadas=localStorage.getItem(NombreClaveHoras)


let mostrarDiv=document.getElementById('mostrar-Gastos')
fechasGuardadas=fechasGuardadas.split(',')
horasGuardadas=horasGuardadas.split(',')



function MostrarDatos(datos,idElemento)
{
    if(datos.length>=0){
        for(let i=0;i<datos.length;i++)
        {
            let divElemento = document.createElement('div');
            divElemento.classList.add(idElemento)
            divElemento.textContent="Fecha del Gasto: "+fechasGuardadas[i]+" Hora: "+horasGuardadas[i]+" Monto: "+DatosGastos[i];
            mostrarDiv.appendChild(divElemento);
        }

    }
    else{
        mostrarDiv.textContent='No hay datos guardados.'
    }
}

MostrarDatos(DatosGastos,'Gasto')

let DatosIngresos=localStorage.getItem(NombreClaveIngresos)
let fechasGuardadasIngresos=localStorage.getItem(NombreClaveIngresosFechas)
let horasGuardadasIngresos=localStorage.getItem(NombreClaveIngresosHoras)


let mostrarDivIngresos=document.getElementById('mostrar-Ingresos')
DatosIngresos=DatosIngresos.split(',')
fechasGuardadasIngresos=fechasGuardadasIngresos.split(',')
horasGuardadasIngresos=horasGuardadasIngresos.split(',')

if(DatosIngresos.length >= 0) {
    for(let i = 0; i < DatosIngresos.length; i++) {
        let divElemento = document.createElement('div');
        divElemento.classList.add('Ingreso');
        divElemento.textContent = "Fecha del Ingreso: " + fechasGuardadasIngresos[i] + " Hora: " + horasGuardadasIngresos[i] + " Monto: " + DatosIngresos[i];
        mostrarDivIngresos.appendChild(divElemento); // Usamos mostrarDivIngresos aquí
    }
} else {
    mostrarDivIngresos.textContent = 'No hay datos guardados.';
}


function mostrarAhorro(arrayGastos,arrayIngresos){

    let totalGastos = manejoDeDatos.sumaArray(arrayGastos);
    let totalIngresos = manejoDeDatos.sumaArray(arrayIngresos);
    let ahorroDiv = document.getElementById("mostrar-ahorro")
    ahorroDiv.innerHTML = "";

    // Crea y agrega los elementos de ahorro total, ingresos y gastos
    let ahorroTotalElemento = document.createElement("p");
    ahorroTotalElemento.textContent = `Ahorro total: ${totalIngresos - totalGastos}`;
    ahorroDiv.appendChild(ahorroTotalElemento);

    let totalGastosElemento = document.createElement("p");
    totalGastosElemento.textContent = `Total gastos: ${totalGastos}`;
    ahorroDiv.appendChild(totalGastosElemento);

    let totalIngresosElemento = document.createElement("p");
    totalIngresosElemento.textContent = `Total ingresos: ${totalIngresos}`;
    ahorroDiv.appendChild(totalIngresosElemento);

}
DatosGastos=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClave)
DatosGastos=manejoDeDatos.convertirArrayAEnteros(DatosGastos)

DatosIngresos=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos)
DatosIngresos=manejoDeDatos.convertirArrayAEnteros(DatosIngresos)
mostrarAhorro(DatosGastos,DatosIngresos)



