import Gastos from "./gastos.js";
import Ingresos from "./ingresos.js";
import EstadoFinanciero from "./EstadoFinanciero.js";

const fecha = document.querySelector("#fecha");
const monto = document.querySelector("#monto");
const descripcion = document.querySelector("#descripcion");

const formGastos = document.querySelector("#gastos-form");
const formIngresos = document.querySelector("#ingresos-form");
const gastosDiv = document.querySelector("#gastos-div");
const ingresosDiv = document.querySelector("#ingresos-div");
const estadoFinanciero = new EstadoFinanciero();

formGastos.addEventListener("submit", (event) => {
    event.preventDefault();
    const gasto = {
        fecha: fecha.value,
        monto: Number.parseInt(monto.value),
        descripcion: descripcion.value,
    };
    try {
        estadoFinanciero.registrarGasto(gasto);
        actualizarGastos();
    } catch (error) {
        console.error(error.message);
    }
});

formIngresos.addEventListener("submit", (event) => {
    event.preventDefault();
    const ingreso = {
        fecha: fecha.value,
        monto: Number.parseInt(monto.value),
        descripcion: descripcion.value,
    };
    try {
        estadoFinanciero.registrarIngreso(ingreso);
        actualizarIngresos();
    } catch (error) {
        console.error(error.message);
    }
});

function actualizarGastos() {
    const gastosRegistrados = estadoFinanciero.gastos;
    gastosDiv.innerHTML = "<ul>";  
    gastosRegistrados.forEach((gastoRegistrado) => {
        gastosDiv.innerHTML += `<li>${gastoRegistrado.fecha}  ${gastoRegistrado.monto}  ${gastoRegistrado.descripcion}</li>`;
    });
    gastosDiv.innerHTML += "</ul>";
}

function actualizarIngresos() {
    const ingresosRegistrados = estadoFinanciero.ingresos;
    ingresosDiv.innerHTML = "<ul>";  
    ingresosRegistrados.forEach((ingresoRegistrado) => {
        ingresosDiv.innerHTML += `<li>${ingresoRegistrado.fecha}  ${ingresoRegistrado.monto}  ${ingresoRegistrado.descripcion}</li>`;
    });
    ingresosDiv.innerHTML += "</ul>";
}
