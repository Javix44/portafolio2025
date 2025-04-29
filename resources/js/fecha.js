document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const year = today.getFullYear();
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
                    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const month = months[today.getMonth()];
    const formattedDate = `${day} de ${month} de ${year}`;
    document.getElementById('current-date').textContent = formattedDate;
});
