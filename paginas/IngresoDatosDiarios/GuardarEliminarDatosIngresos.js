const NombreClaveIngresos = "datos-De-Gastos-diarios-Ingresos";
const NombreClaveIngresosFechas="Fecha-Ingresos"
const NombreClaveIngresosHoras="Hora-Ingresos"

function ControlarQueLocaStoreNoEsteVacio(NombreClaveIngresos)
{
  if (localStorage.getItem(NombreClaveIngresos) === null) {
    localStorage.setItem(NombreClaveIngresos, [""]);
  }
}

function EliminarDatoInicialSiEstaVacio(array)
{
  if (array[0] === "") {
    array.shift();
  }
  return array;
}


function OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos)
{
  ControlarQueLocaStoreNoEsteVacio(NombreClaveIngresos);
  let datosOptenidos=localStorage.getItem(NombreClaveIngresos)
  datosOptenidos=datosOptenidos.split(",")

  datosOptenidos=EliminarDatoInicialSiEstaVacio(datosOptenidos);

  return datosOptenidos;
}


function convertirArrayAEnteros(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = Number(array[i]);
  }
  return array;
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

  let fechasGuardadas=OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosFechas)
  let horasGuardadas=OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosHoras)


  let DatosGastos = OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos);
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
    let fechasGuardadas=OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosFechas);
    let horasGuardadas=OptenerDatosLocalStoreCorrectamente(NombreClaveIngresosHoras);
    let DatosGastos = OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos);
    DatosGastos = convertirArrayAEnteros(DatosGastos);
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