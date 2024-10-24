const estadoFinanciero = {
    ingresos: JSON.parse(localStorage.getItem('ingresos')) || [],
    gastos: JSON.parse(localStorage.getItem('gastos')) || [],
    presupuesto: 0 
};

function calcularPorcentajeGastado() {
    const totalIngresos = estadoFinanciero.ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
    const totalGastos = estadoFinanciero.gastos.reduce((total, gasto) => total + gasto.monto, 0);
    return totalIngresos > 0 ? (totalGastos / totalIngresos) * 100 : 0;
}

function mostrarDatos() {
    const ingresosTableBody = document.getElementById('tabla-ingresos')?.querySelector('tbody');
    const gastosTableBody = document.getElementById('tabla-gastos')?.querySelector('tbody');
    const presupuestoSpan = document.getElementById('presupuesto');
    const porcentajeGastadoSpan = document.getElementById('porcentaje-gastado');

    estadoFinanciero.ingresos.forEach(ingreso => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${ingreso.fecha}</td><td>${ingreso.monto}</td><td>${ingreso.descripcion}</td>`;
        ingresosTableBody.appendChild(row);
    });

    estadoFinanciero.gastos.forEach(gasto => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${gasto.fecha}</td><td>${gasto.monto}</td><td>${gasto.descripcion}</td>`;
        gastosTableBody.appendChild(row);
    });

    presupuestoSpan.textContent = `$${estadoFinanciero.presupuesto}`;
    porcentajeGastadoSpan.textContent = calcularPorcentajeGastado().toFixed(2);
}

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

    localStorage.setItem('ingresos', JSON.stringify(estadoFinanciero.ingresos));
    localStorage.setItem('gastos', JSON.stringify(estadoFinanciero.gastos));

    document.getElementById('formulario').reset();

    window.location.href = 'estado_financiero.html';
}

function irAEstadoFinanciero() {
    window.location.href = 'estado_financiero.html';
}

function irAIngresos() {
    window.location.href = 'index.html';
}

if (document.getElementById('tabla-ingresos')) {
    mostrarDatos();
}

if (document.getElementById('formulario')) {
    document.getElementById('formulario').addEventListener('submit', agregarIngresoGasto);
}
