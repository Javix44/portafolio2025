document.addEventListener("DOMContentLoaded", function () {
    // Navegación con desplazamiento suave
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            const offset = 100;

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth"
            });
        });
    });

    // Animaciones al hacer scroll (Intersection Observer)
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.pagina').forEach(section => {
        observer.observe(section);
    });
});
