import ManejoDeDatos from "../ManejoDeDatos.js";
let manejoDeDatos = new ManejoDeDatos
const NombreClaveIngresos = "datos-De-Gastos-diarios-Ingresos";
const NombreClaveIngresosFechas="Fecha-Ingresos"
const NombreClaveIngresosHoras="Hora-Ingresos"

const NombreClave = "datos-De-Gastos-diarios-Gastos";
const NombreClaveFechas="Fecha-Gastos"
const NombreClaveHoras="Hora-Gastos"




GuardarDatos("form-datos-Ingresos",NombreClaveIngresos,NombreClaveIngresosFechas,NombreClaveIngresosHoras,"dato-Ingresos")
EliminarDatos("form-eliminar-Ingresos","dato-a-eliminar-Ingresos",NombreClaveIngresos,NombreClaveIngresosFechas,NombreClaveIngresosHoras)


GuardarDatos("form-datos-Gastos",NombreClave,NombreClaveFechas,NombreClaveHoras,"dato")
EliminarDatos("form-eliminar-Gastos","dato-a-eliminar",NombreClave,NombreClaveFechas,NombreClaveHoras)


function GuardarDatos(NomcreFormulario,NombreClaveDatos,NombreClaveFechas,NombreClaveHoras,NombreElementoAguardar)
{
  document.getElementById(NomcreFormulario).addEventListener("submit", function (event) {
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
    Datos.push(document.getElementById(NombreElementoAguardar).value);
    fechas.push(fechaMesDiaActual)
    horas.push(horaActual)
  
    localStorage.setItem(NombreClaveDatos, Datos);
    localStorage.setItem(NombreClaveFechas,fechas);
    localStorage.setItem(NombreClaveHoras, horas);
    alert("El Gasto fue guardado correctamente")
  });  
}


function EliminarDatos(FormularioEliminar,IdElementoAEliminar,NombreClaveDatos,NombreClaveFechas,NombreClaveHoras)
{
  document.getElementById(FormularioEliminar).addEventListener("submit", function (event) {
    event.preventDefault();
      let Numero_a_eliminar = Number(document.getElementById(IdElementoAEliminar).value);
      let Fechas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveFechas);
      let Horas=manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveHoras);
      let Datos = manejoDeDatos.OptenerDatosLocalStoreCorrectamente(NombreClaveDatos);
      Datos = manejoDeDatos.convertirArrayAEnteros(Datos);
      let posNumeroAEliminar = Datos.indexOf(Numero_a_eliminar);
  
  
  
  
      if (posNumeroAEliminar >= 0) {
        Datos.splice(posNumeroAEliminar, 1);
        Fechas.splice(posNumeroAEliminar,1);
        Horas.splice(posNumeroAEliminar,1)
        alert("El Gasto fue eliminado correctamente")
      } else {
        alert("No existe el numero que quiere eliminar");
      }
      localStorage.setItem(NombreClaveDatos, Datos);
      localStorage.setItem(NombreClaveFechas,Fechas);
      localStorage.setItem(NombreClaveHoras,Horas);
  
  });
}

