import ManejoDeDatos from "../ManejoDeDatos.js";
let manejoDeDatos = new ManejoDeDatos
const NombreClaveIngresos = "datos-De-Gastos-diarios-Ingresos";
const NombreClaveIngresosFechas="Fecha-Ingresos"
const NombreClaveIngresosHoras="Hora-Ingresos"

const NombreClave = "datos-De-Gastos-diarios-Gastos";
const NombreClaveFechas="Fecha-Gastos"
const NombreClaveHoras="Hora-Gastos"


function GuardarDatos(NomcreFormulario,NombreClaveDatos,NombreClaveFechas,NombreClaveHoras)
{
  document.getElementById(formulario).addEventListener("submit", function (event) {
    event.preventDefault();
    const fechaActual = new Date();
    let dia = fechaActual.getDate();
    let mes = fechaActual.getMonth() + 1;
    let anio = fechaActual.getFullYear();
    let hora = fechaActual.getHours();
    let minuto = fechaActual.getMinutes();
  
    let fechaMesDiaActual = anio.toString() + "-" + mes.toString() + "-" + dia.toString();
    let horaActual = hora.toString() + ":" + minuto.toString();
  
    let fechas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveFechas)
    let horas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveHoras)
  
  
    let Datos = manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveDatos);
    Datos.push(document.getElementById("dato-Ingresos").value);
    fechas.push(fechaMesDiaActual)
    horas.push(horaActual)
  
    localStorage.setItem(NombreClaveDatos, Datos);
    localStorage.setItem(NombreClaveFechas,fechas);
    localStorage.setItem(NombreClaveHoras, horas);
    alert("El Gasto fue guardado correctamente")
  });  
}


document.getElementById("form-datos-Ingresos").addEventListener("submit", function (event) {
  event.preventDefault();
  const fechaActual = new Date();
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1;
  let anio = fechaActual.getFullYear();
  let hora = fechaActual.getHours();
  let minuto = fechaActual.getMinutes();

  let fechaMesDiaActual = anio.toString() + "-" + mes.toString() + "-" + dia.toString();
  let horaActual = hora.toString() + ":" + minuto.toString();

  let fechasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosFechas)
  let horasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosHoras)


  let DatosGastos = manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos);
  DatosGastos.push(document.getElementById("dato-Ingresos").value);
  fechasGuardadas.push(fechaMesDiaActual)
  horasGuardadas.push(horaActual)

  localStorage.setItem(NombreClaveIngresos, DatosGastos);
  localStorage.setItem(NombreClaveIngresosFechas,fechasGuardadas);
  localStorage.setItem(NombreClaveIngresosHoras, horasGuardadas);
  alert("El Gasto fue guardado correctamente")
});

document.getElementById("form-eliminar-Ingresos").addEventListener("submit", function (event) {
  event.preventDefault();
    let Numero_a_eliminar = Number(document.getElementById("dato-a-eliminar-Ingresos").value);
    let fechasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosFechas);
    let horasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosHoras);
    let DatosGastos = manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos);
    DatosGastos = manejoDeDatos.convertirArrayAEnteros(DatosGastos);
    let posNumeroAEliminar = DatosGastos.indexOf(Numero_a_eliminar);




    if (posNumeroAEliminar >= 0) {
      DatosGastos.splice(posNumeroAEliminar, 1);
      fechasGuardadas.splice(posNumeroAEliminar,1);
      horasGuardadas.splice(posNumeroAEliminar,1)
      alert("El Gasto fue eliminado correctamente")
    } else {
      alert("No existe el numero que quiere eliminar");
    }
    localStorage.setItem(NombreClaveIngresos, DatosGastos);
    localStorage.setItem(NombreClaveIngresosFechas,fechasGuardadas);
    localStorage.setItem(NombreClaveIngresosHoras,horasGuardadas);

  });

document.getElementById("form-datos-Gastos").addEventListener("submit", function (e) {
  e.preventDefault();
  const fechaActual = new Date();
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1;
  let anio = fechaActual.getFullYear();
  let hora = fechaActual.getHours();
  let minuto = fechaActual.getMinutes();

  let fechaMesDiaActual = anio.toString() + "-" + mes.toString() + "-" + dia.toString();
  let horaActual = hora.toString() + ":" + minuto.toString();

  let fechasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveFechas)
  let horasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveHoras)


  let DatosGastos = manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClave);
  DatosGastos.push(document.getElementById("dato").value);
  fechasGuardadas.push(fechaMesDiaActual)
  horasGuardadas.push(horaActual)

  localStorage.setItem(NombreClave, DatosGastos);
  localStorage.setItem(NombreClaveFechas,fechasGuardadas);
  localStorage.setItem(NombreClaveHoras, horasGuardadas);
  alert("El Gasto fue guardado correctamente")
});

document.getElementById("form-eliminar-Gastos").addEventListener("submit", function (e) {
    e.preventDefault();
    let Numero_a_eliminar = Number(document.getElementById("dato-a-eliminar").value);
    let fechasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveFechas);
    let horasGuardadas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveHoras);
    let DatosGastos = manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClave);
    DatosGastos = manejoDeDatos.convertirArrayAEnteros(DatosGastos);
    let posNumeroAEliminar = DatosGastos.indexOf(Numero_a_eliminar);




    if (posNumeroAEliminar >= 0) {
      DatosGastos.splice(posNumeroAEliminar, 1);
      fechasGuardadas.splice(posNumeroAEliminar,1);
      horasGuardadas.splice(posNumeroAEliminar,1)
      alert("El Gasto fue eliminado correctamente")
    } else {
      alert("No existe el numero que quiere eliminar");
    }
    localStorage.setItem(NombreClave, DatosGastos);
    localStorage.setItem(NombreClaveFechas,fechasGuardadas);
    localStorage.setItem(NombreClaveHoras,horasGuardadas);

  });