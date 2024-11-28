class ManejoDeDatos{
    EliminarDatoInicialSiEstaVacio(array) {
        return array;
    }

}

export default ManejoDeDatos;
/*
const NombreClave = "datos-De-Gastos-diarios-Gastos";
const NombreClaveFechas="Fecha-Gastos"
const NombreClaveHoras="Hora-Gastos"

function ControlarQueLocaStoreNoEsteVacio(nombreClave)
{
  if (localStorage.getItem(nombreClave) === null) {
    localStorage.setItem(nombreClave, [""]);
  }
}

function EliminarDatoInicialSiEstaVacio(array)
{
  if (array[0] === "") {
    array.shift();
  }
  return array;
}


function OptenerDatosLocalStoreCorrectamente(nombreClave)
{
  ControlarQueLocaStoreNoEsteVacio(nombreClave);
  let datosOptenidos=localStorage.getItem(nombreClave)
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

  let fechasGuardadas=OptenerDatosLocalStoreCorrectamente(NombreClaveFechas)
  let horasGuardadas=OptenerDatosLocalStoreCorrectamente(NombreClaveHoras)


  let DatosGastos = OptenerDatosLocalStoreCorrectamente(NombreClave);
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
    let fechasGuardadas=OptenerDatosLocalStoreCorrectamente(NombreClaveFechas);
    let horasGuardadas=OptenerDatosLocalStoreCorrectamente(NombreClaveHoras);
    let DatosGastos = OptenerDatosLocalStoreCorrectamente(NombreClave);
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
    localStorage.setItem(NombreClave, DatosGastos);
    localStorage.setItem(NombreClaveFechas,fechasGuardadas);
    localStorage.setItem(NombreClaveHoras,horasGuardadas);

  });*/