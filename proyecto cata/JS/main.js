function selectImage(frame) {
    // Mostrar capa de opacidad
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';

    // Si la imagen ya está seleccionada, no hacer nada
    if (!frame.classList.contains('selected')) {
        // Agregar la clase 'selected' para mostrar el texto
        frame.classList.add('selected');
    } else {
        // Si la imagen ya está seleccionada, no hacer nada
        frame.classList.remove('selected');
        overlay.style.display = 'none';  // Ocultar la capa de opacidad si se deselecciona
    }
}

// Opcional: Función para cerrar la capa de opacidad cuando se hace clic en ella
document.getElementById('overlay').addEventListener('click', function () {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';

    // Eliminar la clase 'selected' de las imágenes
    const frames = document.querySelectorAll('.frame');
    frames.forEach(frame => {
        frame.classList.remove('selected');
    });
});

