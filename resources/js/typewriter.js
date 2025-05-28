document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.getElementById("titulo-principal");

    titulo.classList.add("typewriter");

    let letras = titulo.textContent.trim().length;
    let i = 0;

    let intervalo = setInterval(() => {
        i++;
        if (i >= letras) {
            clearInterval(intervalo);
            titulo.style.animation = 'blink 0.7s step-end infinite';
        }
    }, 70);
});
