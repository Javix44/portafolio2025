document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    const month = months[today.getMonth()];
    const formattedDate = `${day} de ${month} de ${year}`;
    document.getElementById('current-date').textContent = formattedDate;
});
