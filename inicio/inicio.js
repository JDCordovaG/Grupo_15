document.addEventListener('DOMContentLoaded', () => {
    const contenedorDestacados = document.getElementById('contenedor-destacados');
    
    if (contenedorDestacados) {
        contenedorDestacados.innerHTML = '';
        
        buildsDestacadas.forEach(build => {
            const article = document.createElement('article');
            article.className = 'tarjeta';
            
            article.innerHTML = `
                <h3>${build.nombre}</h3>
                <p>${build.desc}</p>
                <p class="precio">${formatearDinero(build.precio)}</p>
                <a href="../Armador_build/armador.html" class="btn-acento" style="margin-top: 1rem;">Usar como base</a>
            `;
            
            contenedorDestacados.appendChild(article);
        });
    }
});