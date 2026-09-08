document.addEventListener('DOMContentLoaded', () => {
    const contenedorVeredicto = document.querySelector('.veredicto');
    const listaReglas = document.querySelector('.reglas ul');
    const btnCotizar = document.querySelector('.rendimiento .btn-acento');
    
    const buildGuardada = JSON.parse(sessionStorage.getItem('buildActual'));

    if (!buildGuardada || Object.keys(buildGuardada.componentes).length < 5) {
        contenedorVeredicto.innerHTML = `<h1 style="color: var(--color-error);">Error</h1><p>No hay una build completa para evaluar.</p>`;
        return;
    }

    const { cpu, mb, ram, psu } = buildGuardada.componentes;
    const { consumo } = buildGuardada;
    
    listaReglas.innerHTML = '';
    let buildValida = true;

    const socketValido = cpu.socket === mb.socket;
    agregarReglaDOM(socketValido, 'Socket', socketValido ? 'Procesador y Placa Madre compatibles.' : `Incompatible: CPU es ${cpu.socket} y Placa es ${mb.socket}.`);
    if(!socketValido) buildValida = false;

    const ramValida = ram.tipoRam === mb.ramSoportada;
    agregarReglaDOM(ramValida, 'Memoria', ramValida ? 'Tipo de RAM soportado.' : `Incompatible: Placa requiere ${mb.ramSoportada}.`);
    if(!ramValida) buildValida = false;

    const capValida = ram.capacidad <= mb.maxRam;
    agregarReglaDOM(capValida, 'Capacidad RAM', capValida ? 'Capacidad dentro de los límites.' : `Excede límite: Placa soporta máximo ${mb.maxRam}GB.`);
    if(!capValida) buildValida = false;

    const margenConsumo = consumo * 1.20;
    const psuValida = psu.potencia >= margenConsumo;
    agregarReglaDOM(psuValida, 'Energía', psuValida ? `Fuente (${psu.potencia}W) supera el consumo con margen seguro.` : `Fuente insuficiente. Se requieren al menos ${Math.ceil(margenConsumo)}W.`);
    if(!psuValida) buildValida = false;

    if (buildValida) {
        contenedorVeredicto.innerHTML = `<h1 style="color: var(--color-exito);">¡Build Compatible! 🟢</h1><p>Todos los componentes funcionarán correctamente juntos.</p>`;
        sessionStorage.setItem('buildCompatible', 'true');
    } else {
        contenedorVeredicto.innerHTML = `<h1 style="color: var(--color-error);">Build Incompatible 🔴</h1><p>Revisa los errores en las reglas evaluadas antes de cotizar.</p>`;
        btnCotizar.style.display = 'none';
        sessionStorage.setItem('buildCompatible', 'false');
    }

    function agregarReglaDOM(esValido, titulo, mensaje) {
        const li = document.createElement('li');
        const icono = esValido ? '☑️' : '✖️';
        li.innerHTML = `${icono} <strong>${titulo}:</strong> ${mensaje}`;
        listaReglas.appendChild(li);
    }
});