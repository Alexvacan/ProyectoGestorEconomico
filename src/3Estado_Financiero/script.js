import Ingresos from "./ingresos.js";
import Gastos from "./gastos.js";
import EstadoFinanciero from "./EstadoFinanciero.js";

const ingresos = new Ingresos();
const gastos = new Gastos();
const estadoFinanciero = new EstadoFinanciero();

const formulario = document.querySelector("#formulario");
const tablaIngresos = document.querySelector("#tabla-ingresos tbody");
const tablaGastos = document.querySelector("#tabla-gastos tbody");
const presupuestoSpan = document.querySelector("#presupuesto");
const porcentajeGastadoSpan = document.querySelector("#porcentaje-gastado");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const tipo = document.querySelector("#tipo").value;
    const fecha = document.querySelector("#fecha").value;
    const monto = Number.parseInt(document.querySelector("#monto").value);
    const descripcion = document.querySelector("#descripcion").value;

    const registro = {
        fecha,
        monto,
        descripcion,
    };

    if (tipo === "ingreso") {
        ingresos.registrarIngreso(registro);
        estadoFinanciero.registrarIngreso(registro);
    } else {
        gastos.registrarGasto(registro);
        estadoFinanciero.registrarGasto(registro);
    }

    actualizarTablas();
    actualizarEstadoFinanciero();
    formulario.reset();
});

function actualizarTablas() {
    // Limpiar las tablas
    tablaIngresos.innerHTML = "";
    tablaGastos.innerHTML = "";

    // Actualizar ingresos
    ingresos.obtenerIngresos().forEach((ingreso) => {
        const fila = `<tr>
            <td>${ingreso.fecha}</td>
            <td>${ingreso.monto}</td>
            <td>${ingreso.descripcion}</td>
        </tr>`;
        tablaIngresos.innerHTML += fila;
    });

    // Actualizar gastos
    gastos.obtenerGastos().forEach((gasto) => {
        const fila = `<tr>
            <td>${gasto.fecha}</td>
            <td>${gasto.monto}</td>
            <td>${gasto.descripcion}</td>
        </tr>`;
        tablaGastos.innerHTML += fila;
    });
}

function actualizarEstadoFinanciero() {
    const totalIngresos = ingresos.obtenerIngresos().reduce((total, ingreso) => total + ingreso.monto, 0);
    const totalGastos = gastos.obtenerGastos().reduce((total, gasto) => total + gasto.monto, 0);
    
    estadoFinanciero.presupuesto = totalIngresos; // Considerar total ingresos como presupuesto total
    presupuestoSpan.innerText = estadoFinanciero.presupuesto;
    
    const porcentajeGastado = estadoFinanciero.calcularPorcentajeGastado();
    porcentajeGastadoSpan.innerText = porcentajeGastado.toFixed(2); // Mostrar 2 decimales
}
