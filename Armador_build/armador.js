document.addEventListener('DOMContentLoaded', () => {
    const selects = {
        cpu: document.getElementById('select-cpu'),
        gpu: document.getElementById('select-gpu'),
        mb: document.getElementById('select-mb'),
        ram: document.getElementById('select-ram'),
        psu: document.getElementById('select-psu')
    };
    
    const spanWatts = document.getElementById('watts-total');
    const spanPrecio = document.getElementById('precio-total');
    const btnValidar = document.querySelector('.resumen-build .btn-primario');


    Object.keys(selects).forEach(tipo => {
        const opciones = componentes.filter(c => c.tipo === tipo && c.estado === 'activo');
        opciones.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt.id;
            option.textContent = `${opt.marca} ${opt.modelo} - ${formatearDinero(opt.precio)}`;
            selects[tipo].appendChild(option);
        });
        
        selects[tipo].addEventListener('change', actualizarResumen);
    });

    function actualizarResumen() {
        let totalPrecio = 0;
        let totalTdp = 50;

        const seleccionActual = {};

        Object.keys(selects).forEach(tipo => {
            const idSeleccionado = selects[tipo].value;
            if (idSeleccionado) {
                const componente = componentes.find(c => c.id === idSeleccionado);
                totalPrecio += componente.precio;
                if (componente.tdp) totalTdp += componente.tdp;
                seleccionActual[tipo] = componente;
            }
        });

        spanWatts.textContent = totalTdp;
        spanPrecio.textContent = formatearDinero(totalPrecio).replace('$', '');
        
        sessionStorage.setItem('buildActual', JSON.stringify({
            componentes: seleccionActual,
            precioTotal: totalPrecio,
            consumo: totalTdp
        }));
    }

    btnValidar.addEventListener('click', (e) => {
        const seleccionCompleta = Object.values(selects).every(select => select.value !== "");
        if (!seleccionCompleta) {
            e.preventDefault();
            alert('Debes seleccionar todos los componentes antes de validar.');
        }
    });
});