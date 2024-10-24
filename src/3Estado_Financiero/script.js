// Almacenamiento de datos en el Local Storage
const estadoFinanciero = {
    ingresos: JSON.parse(localStorage.getItem('ingresos')) || [],
    gastos: JSON.parse(localStorage.getItem('gastos')) || [],
    presupuesto: 0 // Presupuesto inicial de 0
};

// Función para calcular el porcentaje de gastos
function calcularPorcentajeGastado() {
    const totalIngresos = estadoFinanciero.ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
    const totalGastos = estadoFinanciero.gastos.reduce((total, gasto) => total + gasto.monto, 0);
    return totalIngresos > 0 ? (totalGastos / totalIngresos) * 100 : 0;
}

// Función para mostrar datos en la página de Estado Financiero
function mostrarDatos() {
    const ingresosTableBody = document.getElementById('tabla-ingresos')?.querySelector('tbody');
    const gastosTableBody = document.getElementById('tabla-gastos')?.querySelector('tbody');
    const presupuestoSpan = document.getElementById('presupuesto');
    const porcentajeGastadoSpan = document.getElementById('porcentaje-gastado');

    // Mostrar ingresos
    estadoFinanciero.ingresos.forEach(ingreso => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${ingreso.fecha}</td><td>${ingreso.monto}</td><td>${ingreso.descripcion}</td>`;
        ingresosTableBody.appendChild(row);
    });

    // Mostrar gastos
    estadoFinanciero.gastos.forEach(gasto => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${gasto.fecha}</td><td>${gasto.monto}</td><td>${gasto.descripcion}</td>`;
        gastosTableBody.appendChild(row);
    });

    // Mostrar presupuesto y porcentaje
    presupuestoSpan.textContent = `$${estadoFinanciero.presupuesto}`;
    porcentajeGastadoSpan.textContent = calcularPorcentajeGastado().toFixed(2);
}

// Función para agregar ingresos o gastos
function agregarIngresoGasto(event) {
    event.preventDefault();
    const tipo = document.getElementById('tipo').value;
    const fecha = document.getElementById('fecha').value;
    const monto = parseFloat(document.getElementById('monto').value);
    const descripcion = document.getElementById('descripcion').value;

    if (tipo === 'ingreso') {
        estadoFinanciero.ingresos.push({ fecha, monto, descripcion });
    } else {
        estadoFinanciero.gastos.push({ fecha, monto, descripcion });
    }

    // Guardar los datos en el Local Storage
    localStorage.setItem('ingresos', JSON.stringify(estadoFinanciero.ingresos));
    localStorage.setItem('gastos', JSON.stringify(estadoFinanciero.gastos));

    // Reiniciar el formulario
    document.getElementById('formulario').reset();

    // Redireccionar a la página de Estado Financiero
    window.location.href = 'estado_financiero.html';
}

// Función para ir a la página de Estado Financiero
function irAEstadoFinanciero() {
    window.location.href = 'estado_financiero.html';
}

// Función para ir a la página de Ingresos
function irAIngresos() {
    window.location.href = 'index.html';
}

// Cargar datos si se está en la página de Estado Financiero
if (document.getElementById('tabla-ingresos')) {
    mostrarDatos();
}

// Agregar el evento al formulario si se está en la página de Ingresos
if (document.getElementById('formulario')) {
    document.getElementById('formulario').addEventListener('submit', agregarIngresoGasto);
}
