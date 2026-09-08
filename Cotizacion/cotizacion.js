document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-cotizacion');
    const inputNombre = document.getElementById('nombre');
    const inputCorreo = document.getElementById('correo');
    const inputTelefono = document.getElementById('telefono');
    
    const buildGuardada = JSON.parse(sessionStorage.getItem('buildActual'));
    const esCompatible = sessionStorage.getItem('buildCompatible') === 'true';

    if (!esCompatible) {
        document.querySelector('.formulario-solicitud').innerHTML = `<p style="color: var(--color-error);">No puedes cotizar una build incompatible o vacía.</p>`;
        return;
    }

    const mostrarError = (input, mensajeID, mostrar) => {
        const mensaje = document.getElementById(mensajeID);
        if (mostrar) {
            mensaje.style.display = 'block';
            input.style.borderColor = 'var(--color-error)';
        } else {
            mensaje.style.display = 'none';
            input.style.borderColor = 'var(--color-primario)';
        }
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let hayErrores = false;

        if (inputNombre.value.trim().length < 3) {
            mostrarError(inputNombre, 'error-nombre', true);
            hayErrores = true;
        } else {
            mostrarError(inputNombre, 'error-nombre', false);
        }

        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexCorreo.test(inputCorreo.value)) {
            mostrarError(inputCorreo, 'error-correo', true);
            hayErrores = true;
        } else {
            mostrarError(inputCorreo, 'error-correo', false);
        }

        const regexTelefono = /^[0-9]{9}$/;
        if (!regexTelefono.test(inputTelefono.value)) {
            mostrarError(inputTelefono, 'error-telefono', true);
            hayErrores = true;
        } else {
            mostrarError(inputTelefono, 'error-telefono', false);
        }

        if (!hayErrores) {
            alert('Cotización enviada exitosamente. Nos contactaremos a la brevedad.');
            form.reset();
        }
    });

    inputNombre.addEventListener('input', () => mostrarError(inputNombre, 'error-nombre', inputNombre.value.trim().length < 3));
    inputCorreo.addEventListener('input', () => mostrarError(inputCorreo, 'error-correo', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputCorreo.value)));
    inputTelefono.addEventListener('input', () => mostrarError(inputTelefono, 'error-telefono', !/^[0-9]{9}$/.test(inputTelefono.value)));
});