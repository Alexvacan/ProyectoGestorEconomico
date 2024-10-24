import EstadoFinanciero from './EstadoFinanciero.js';

const ingresosForm = document.querySelector("#ingresos-form");
const gastosForm = document.querySelector("#gastos-form");
const gastosDiv = document.querySelector("#gastos-div");
const ingresosDiv = document.querySelector("#ingresos-div");
const resultadoFinanciero = document.querySelector("#resultado-financiero");

const estadoFinanciero = new EstadoFinanciero();

ingresosForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fecha = document.querySelector("#fecha-ingreso").value;
    const monto = Number.parseInt(document.querySelector("#monto-ingreso").value);
    const descripcion = document.querySelector("#descripcion-ingreso").value;

    const ingreso = { fecha, monto, descripcion };
    estadoFinanciero.registrarIngreso(ingreso);
    mostrarIngresos();
    mostrarEstadoFinanciero();
});

gastosForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const fecha = document.querySelector("#fecha-gasto").value;
    const monto = Number.parseInt(document.querySelector("#monto-gasto").value);
    const descripcion = document.querySelector("#descripcion-gasto").value;

    const gasto = { fecha, monto, descripcion };
    estadoFinanciero.registrarGasto(gasto);
    mostrarGastos();
    mostrarEstadoFinanciero();
});

function mostrarGastos() {
    const gastosRegistrados = estadoFinanciero.gastos;
    gastosDiv.innerHTML = "<h3>Gastos Registrados:</h3><ul>";
    gastosRegistrados.forEach((gasto) => {
        gastosDiv.innerHTML += `<li>${gasto.fecha} - ${gasto.monto} - ${gasto.descripcion}</li>`;
    });
    gastosDiv.innerHTML += "</ul>";
}

function mostrarIngresos() {
    const ingresosRegistrados = estadoFinanciero.ingresos;
    ingresosDiv.innerHTML = "<h3>Ingresos Registrados:</h3><ul>";
    ingresosRegistrados.forEach((ingreso) => {
        ingresosDiv.innerHTML += `<li>${ingreso.fecha} - ${ingreso.monto} - ${ingreso.descripcion}</li>`;
    });
    ingresosDiv.innerHTML += "</ul>";
}

function mostrarEstadoFinanciero() {
    const estado = estadoFinanciero.obtenerEstadoFinanciero();
    resultadoFinanciero.innerHTML = `
        <h3>Estado Financiero</h3>
        <p>Total Ingresos: ${estado.totalIngresos}</p>
        <p>Total Gastos: ${estado.totalGastos}</p>
        <p>Porcentaje Gastado: ${estado.porcentajeGastado.toFixed(2)}%</p>
        <p>Presupuesto Restante: ${estado.presupuestoRestante}</p>
    `;
}
