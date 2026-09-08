document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid-componentes');
    const inputBuscar = document.getElementById('buscar');
    const selectCategoria = document.getElementById('categoria');
    const inputMin = document.getElementById('precio-min');
    const inputMax = document.getElementById('precio-max');
    const btnFiltrar = document.querySelector('.btn-acento');

    const renderizarCatalogo = (datos) => {
        grid.innerHTML = '';
        datos.forEach(comp => {
            const article = document.createElement('article');
            article.className = `tarjeta ${comp.estado === 'descontinuado' ? 'descontinuado' : ''}`;
            
            let html = `
                <img src="${comp.img}" alt="${comp.marca} ${comp.modelo}">
                <h3>${comp.marca} ${comp.modelo}</h3>
                <p>${comp.tipo.toUpperCase()} ${comp.estado === 'descontinuado' ? ' - <strong>Descontinuado</strong>' : ''}</p>
                <p><strong>${formatearDinero(comp.precio)}</strong></p>
            `;
            
            if (comp.estado !== 'descontinuado') {
                html += `<a href="../Detalle_componente/detalle.html?id=${comp.id}" class="btn-primario">Ver Detalle</a>`;
            }
            
            article.innerHTML = html;
            grid.appendChild(article);
        });
    };

    const filtrar = () => {
        const textoBusqueda = inputBuscar.value.trim().toLowerCase(); 
        const categoria = selectCategoria.value;
        const min = parseInt(inputMin.value) || 0;
        const max = parseInt(inputMax.value) || Infinity;

        if (min > max && max !== 0) {
            alert('El precio mínimo no puede ser mayor al precio máximo.');
            return;
        }

        const filtrados = componentes.filter(comp => {
            const coincideTexto = `${comp.marca} ${comp.modelo}`.toLowerCase().includes(textoBusqueda);
            const coincideCat = categoria === 'todos' || comp.tipo === categoria;
            const coincidePrecio = comp.precio >= min && comp.precio <= max;

            return coincideTexto && coincideCat && coincidePrecio;
        });

        renderizarCatalogo(filtrados);
    };

    btnFiltrar.addEventListener('click', filtrar);
    renderizarCatalogo(componentes);
});