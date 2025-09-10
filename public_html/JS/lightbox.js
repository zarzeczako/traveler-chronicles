// Ta funkcja jest wywoływana, gdy zawartość strony została w pełni załadowana.
document.addEventListener("DOMContentLoaded", function() {
    // Pobranie referencji do elementów HTML, które będą używane w obsłudze lightboxa.
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    // Dodanie nasłuchiwacza zdarzeń dla każdego elementu, który uruchamia lightbox.
    triggers.forEach(trigger => {
        trigger.addEventListener('click', function() {
            // Wyświetlenie lightboxa i ustawienie obrazu na podstawie klikniętego elementu.
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    // Nasłuchiwanie zdarzenia kliknięcia na przycisk zamknięcia lightboxa.
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none'; // Ukrycie lightboxa.
    });

    // Nasłuchiwanie zdarzenia kliknięcia na obszar lightboxa.
    lightbox.addEventListener('click', function(event) {
        // Jeśli kliknięto na sam lightbox (a nie na jego zawartość), to ukryj lightbox.
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Obsługa wyboru galerii zdjęć dla różnych miast.
    const citySelect = document.getElementById('city-select'); // Pobranie elementu select.
    const galleries = document.querySelectorAll('.gallery'); // Pobranie wszystkich galerii.

    // Nasłuchiwanie zdarzenia zmiany wartości w elemencie select.
    citySelect.addEventListener('change', function() {
        const selectedCity = this.value; // Pobranie wybranej wartości.

        // Ukrycie lub wyświetlenie odpowiednich galerii na podstawie wybranej wartości.
        galleries.forEach(gallery => {
            if (gallery.id === selectedCity + '-gallery') {
                gallery.style.display = 'flex';
            } else {
                gallery.style.display = 'none';
            }
        });
    });
});
