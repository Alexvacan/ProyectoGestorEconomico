import ManejoDeDatos from "../ManejoDeDatos";
let manejoDeDatos = new ManejoDeDatos
const NombreClaveGastos = "datos-De-Gastos-diarios-Gastos";
const NombreClaveFechas="Fecha-Gastos"
const NombreClaveHoras="Hora-Gastos"

const NombreClaveIngresos = "datos-De-Gastos-diarios-Ingresos";
const NombreClaveIngresosFechas="Fecha-Ingresos"
const NombreClaveIngresosHoras="Hora-Ingresos"

let DatosGastos=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveGastos)
let fechasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveFechas)
let horasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveHoras)
MostrarDatos(DatosGastos,'Gasto','mostrar-Gastos',fechasGuardadas,horasGuardadas)


let DatosIngresos=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos)
let fechasGuardadasIngresos=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosFechas)
let horasGuardadasIngresos=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosHoras)
MostrarDatos(DatosIngresos,'Ingreso','mostrar-Ingresos',fechasGuardadasIngresos,horasGuardadasIngresos)


DatosGastos=manejoDeDatos.convertirArrayAEnteros(DatosGastos)
DatosIngresos=manejoDeDatos.convertirArrayAEnteros(DatosIngresos)
mostrarAhorro(DatosGastos,DatosIngresos)



function MostrarDatos(datos,NuevaClase,NombreElemento,fechas,horas)
{
    let mostrarDiv=document.getElementById(NombreElemento)
    if(datos.length>=0){
        for(let i=0;i<datos.length;i++)
        {
            let divElemento = document.createElement('div');
            divElemento.classList.add(NuevaClase)
            divElemento.textContent="Fecha del Gasto: "+fechas[i]+" Hora: "+horas[i]+" Monto: "+datos[i];
            mostrarDiv.appendChild(divElemento);
        }

    }
    else{
        mostrarDiv.textContent='No hay datos guardados.'
    }
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