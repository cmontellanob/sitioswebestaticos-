// Selección de todas las imágenes dentro del slider
const images = document.querySelectorAll('.slider img');
let currentIndex = 0;

// Función para cambiar de imagen
function changeImage() {
    // Ocultar la imagen actual
    images[currentIndex].style.opacity = 0;

    // Calcular el índice de la siguiente imagen
    currentIndex = (currentIndex + 1) % images.length;

    // Mostrar la nueva imagen
    images[currentIndex].style.opacity = 1;
}

// Cambiar de imagen cada 3 segundos
setInterval(changeImage, 3000);
