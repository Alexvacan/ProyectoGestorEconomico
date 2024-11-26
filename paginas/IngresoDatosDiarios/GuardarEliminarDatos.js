const NombreClaveIngresos = "datos-De-Ingresos";
const NombreClaveGastos = "datos-De-Gastos";
const NombreClaveFechas = "Fecha";
const NombreClaveHoras = "Hora";

// Función para asegurar que no esté vacío el localStorage
function ControlarQueLocaStoreNoEsteVacio(nombreClave) {
  if (localStorage.getItem(nombreClave) === null) {
    localStorage.setItem(nombreClave, [""]);
  }
}

// Eliminar dato vacío del principio
function EliminarDatoInicialSiEstaVacio(array) {
  if (array[0] === "") {
    array.shift();
  }
  return array;
}

// Obtener datos correctamente del localStorage
function OptenerDatosLocalStoreCorrectamente(nombreClave) {
  ControlarQueLocaStoreNoEsteVacio(nombreClave);
  let datosOptenidos = localStorage.getItem(nombreClave);
  datosOptenidos = datosOptenidos.split(",");
  datosOptenidos = EliminarDatoInicialSiEstaVacio(datosOptenidos);
  return datosOptenidos;
}

document.getElementById("form-ingreso").addEventListener("submit", function (e) {
  e.preventDefault();
  const fechaActual = new Date();
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1;
  let anio = fechaActual.getFullYear();
  let hora = fechaActual.getHours();
  let minuto = fechaActual.getMinutes();

  let fechaMesDiaActual = anio.toString() + "-" + mes.toString() + "-" + dia.toString();
  let horaActual = hora.toString() + ":" + minuto.toString();

  let ingresosGuardados = OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos);
  let gastosGuardados = OptenerDatosLocalStoreCorrectamente(NombreClaveGastos);
  let fechasGuardadas = OptenerDatosLocalStoreCorrectamente(NombreClaveFechas);
  let horasGuardadas = OptenerDatosLocalStoreCorrectamente(NombreClaveHoras);

  ingresosGuardados.push(document.getElementById("dato-ingreso").value);
  fechasGuardadas.push(fechaMesDiaActual);
  horasGuardadas.push(horaActual);

  localStorage.setItem(NombreClaveIngresos, ingresosGuardados);
  localStorage.setItem(NombreClaveFechas, fechasGuardadas);
  localStorage.setItem(NombreClaveHoras, horasGuardadas);

  alert("Ingreso guardado correctamente");
});

document.getElementById("form-gasto").addEventListener("submit", function (e) {
  e.preventDefault();
  const fechaActual = new Date();
  let dia = fechaActual.getDate();
  let mes = fechaActual.getMonth() + 1;
  let anio = fechaActual.getFullYear();
  let hora = fechaActual.getHours();
  let minuto = fechaActual.getMinutes();

  let fechaMesDiaActual = anio.toString() + "-" + mes.toString() + "-" + dia.toString();
  let horaActual = hora.toString() + ":" + minuto.toString();

  let ingresosGuardados = OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos);
  let gastosGuardados = OptenerDatosLocalStoreCorrectamente(NombreClaveGastos);
  let fechasGuardadas = OptenerDatosLocalStoreCorrectamente(NombreClaveFechas);
  let horasGuardadas = OptenerDatosLocalStoreCorrectamente(NombreClaveHoras);

  gastosGuardados.push(document.getElementById("dato-gasto").value);
  fechasGuardadas.push(fechaMesDiaActual);
  horasGuardadas.push(horaActual);

  localStorage.setItem(NombreClaveGastos, gastosGuardados);
  localStorage.setItem(NombreClaveFechas, fechasGuardadas);
  localStorage.setItem(NombreClaveHoras, horasGuardadas);

  alert("Gasto guardado correctamente");
});

document.getElementById("form-eliminar").addEventListener("submit", function (e) {
  e.preventDefault();
  let numeroAEliminar = Number(document.getElementById("dato-a-eliminar").value);
  let ingresosGuardados = OptenerDatosLocalStoreCorrectamente(NombreClaveIngresos);
  let gastosGuardados = OptenerDatosLocalStoreCorrectamente(NombreClaveGastos);
  let fechasGuardadas = OptenerDatosLocalStoreCorrectamente(NombreClaveFechas);
  let horasGuardadas = OptenerDatosLocalStoreCorrectamente(NombreClaveHoras);

  ingresosGuardados = convertirArrayAEnteros(ingresosGuardados);
  gastosGuardados = convertirArrayAEnteros(gastosGuardados);

  let posNumeroAEliminarIngresos = ingresosGuardados.indexOf(numeroAEliminar);
  let posNumeroAEliminarGastos = gastosGuardados.indexOf(numeroAEliminar);

  if (posNumeroAEliminarIngresos >= 0) {
    ingresosGuardados.splice(posNumeroAEliminarIngresos, 1);
    fechasGuardadas.splice(posNumeroAEliminarIngresos, 1);
    horasGuardadas.splice(posNumeroAEliminarIngresos, 1);
    alert("Ingreso eliminado correctamente");
  } else if (posNumeroAEliminarGastos >= 0) {
    gastosGuardados.splice(posNumeroAEliminarGastos, 1);
    fechasGuardadas.splice(posNumeroAEliminarGastos, 1);
    horasGuardadas.splice(posNumeroAEliminarGastos, 1);
    alert("Gasto eliminado correctamente");
  } else {
    alert("No existe el numero que quiere eliminar");
  }

  localStorage.setItem(NombreClaveIngresos, ingresosGuardados);
  localStorage.setItem(NombreClaveGastos, gastosGuardados);
  localStorage.setItem(NombreClaveFechas, fechasGuardadas);
  localStorage.setItem(NombreClaveHoras, horasGuardadas);
});
