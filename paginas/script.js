const estadoFinanciero = {
    ingresos: [
        { fecha: '2024-01-01', monto: 1000, descripcion: 'Ingreso 1' },
        { fecha: '2024-01-10', monto: 500, descripcion: 'Ingreso 2' }
    ],
    gastos: [
        { fecha: '2024-01-02', monto: 300, descripcion: 'Gasto 1' },
        { fecha: '2024-01-15', monto: 200, descripcion: 'Gasto 2' }
    ],
    presupuesto: 1000
};

function calcularPorcentajeGastado() {
    const totalIngresos = estadoFinanciero.ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
    const totalGastos = estadoFinanciero.gastos.reduce((total, gasto) => total + gasto.monto, 0);
    return totalIngresos > 0 ? (totalGastos / totalIngresos) * 100 : 0;
}

function mostrarDatos() {
    const ingresosTableBody = document.getElementById('tabla-ingresos').querySelector('tbody');
    const gastosTableBody = document.getElementById('tabla-gastos').querySelector('tbody');
    const presupuestoSpan = document.getElementById('presupuesto');
    const porcentajeGastadoSpan = document.getElementById('porcentaje-gastado');

    // Limpiar tablas antes de mostrar datos
    ingresosTableBody.innerHTML = '';
    gastosTableBody.innerHTML = '';

    // Mostrar los ingresos en la tabla
    estadoFinanciero.ingresos.forEach(ingreso => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${ingreso.fecha}</td><td>${ingreso.monto}</td><td>${ingreso.descripcion}</td>`;
        ingresosTableBody.appendChild(row);
    });

    // Mostrar los gastos en la tabla
    estadoFinanciero.gastos.forEach(gasto => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${gasto.fecha}</td><td>${gasto.monto}</td><td>${gasto.descripcion}</td>`;
        gastosTableBody.appendChild(row);
    });

    presupuestoSpan.textContent = `$${estadoFinanciero.presupuesto}`;
    porcentajeGastadoSpan.textContent = calcularPorcentajeGastado().toFixed(2);
}

mostrarDatos();
