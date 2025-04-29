document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("titulo-principal");

    // Añadir la clase de la animación de máquina de escribir al cargar la página
    titulo.classList.add("typewriter");

    let letras = titulo.textContent.trim().length;
    let i = 0;

    // Usar un intervalo para simular el efecto de escritura
    let intervalo = setInterval(() => {
        i++;
        if (i >= letras) {
            clearInterval(intervalo); // Detener el intervalo cuando se termina de escribir
            // Iniciar una nueva animación para hacer desaparecer el cursor
            titulo.style.animation = 'finishCursor 0.5s forwards';
        }
    }, 70);
});
