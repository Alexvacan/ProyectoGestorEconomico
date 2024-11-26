const NombreClaveIngresos = "datos-De-Ingresos";
const NombreClaveGastos = "datos-De-Gastos";
const NombreClaveFechas = "Fecha";
const NombreClaveHoras = "Hora";

let DatosIngresos = localStorage.getItem(NombreClaveIngresos);
let DatosGastos = localStorage.getItem(NombreClaveGastos);
let fechasGuardadas = localStorage.getItem(NombreClaveFechas);
let horasGuardadas = localStorage.getItem(NombreClaveHoras);

// Convertimos los datos a arrays si no están vacíos
if (DatosIngresos) {
    DatosIngresos = DatosIngresos.split(',');
} else {
    DatosIngresos = [];
}

if (DatosGastos) {
    DatosGastos = DatosGastos.split(',');
} else {
    DatosGastos = [];
}

if (fechasGuardadas) {
    fechasGuardadas = fechasGuardadas.split(',');
} else {
    fechasGuardadas = [];
}

if (horasGuardadas) {
    horasGuardadas = horasGuardadas.split(',');
} else {
    horasGuardadas = [];
}

let mostrarDivIngresos = document.getElementById('mostrar-Ingresos');
let mostrarDivGastos = document.getElementById('mostrar-Gastos');

// Mostrar ingresos
if (DatosIngresos.length > 0) {
    for (let i = 0; i < DatosIngresos.length; i++) {
        let divElemento = document.createElement('div');
        divElemento.classList.add('Ingreso');
        divElemento.textContent = "Fecha del Ingreso: " + fechasGuardadas[i] + " Hora: " + horasGuardadas[i] + " Monto: " + DatosIngresos[i];
        mostrarDivIngresos.appendChild(divElemento);
    }
} else {
    mostrarDivIngresos.textContent = 'No hay ingresos registrados.';
}

// Mostrar gastos
if (DatosGastos.length > 0) {
    for (let i = 0; i < DatosGastos.length; i++) {
        let divElemento = document.createElement('div');
        divElemento.classList.add('Gasto');
        divElemento.textContent = "Fecha del Gasto: " + fechasGuardadas[i] + " Hora: " + horasGuardadas[i] + " Monto: " + DatosGastos[i];
        mostrarDivGastos.appendChild(divElemento);
    }
} else {
    mostrarDivGastos.textContent = 'No hay gastos registrados.';
}
