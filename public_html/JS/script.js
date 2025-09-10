// Ta funkcja dodaje nasłuchiwanie na zdarzenie scroll, które występuje, gdy użytkownik przewija stronę.
window.addEventListener('scroll', function() {
    // Pobieramy element o klasie "slider", który znajduje się na stronie.
    const slider = document.querySelector('.slider');
    // Pobieramy element o klasie "nav-buttons", który zawiera przyciski nawigacji.
    const navButtons = document.querySelector('.nav-buttons');
    
    // Sprawdzamy, czy istnieje element o klasie "slider" (czyli slider na stronie).
    // Jeśli nie, przypisujemy wysokość slidera jako 0.
    const sliderHeight = slider ? slider.offsetHeight : 0;

    // Sprawdzamy, czy odległość, o jaką przewinęliśmy stronę (window.scrollY), jest większa lub równa wysokości slidera.
    if (window.scrollY >= sliderHeight) {
        // Jeśli tak, dodajemy klasę "fixed-nav" do elementu o klasie "nav-buttons".
        // Klasa "fixed-nav" zmienia styl nawigacji, aby była widoczna nawet podczas przewijania strony.
        navButtons.classList.add('fixed-nav');
    } else {
        // Jeśli nie, usuwamy klasę "fixed-nav" z elementu o klasie "nav-buttons".
        navButtons.classList.remove('fixed-nav');
    }
});

// Ta funkcja służy do sprawdzenia pozycji slidera przy załadowaniu strony.
function checkSliderPosition() {
    // Pobieramy element o klasie "slider", który znajduje się na stronie.
    const slider = document.querySelector('.slider');
    // Pobieramy element o klasie "nav-buttons", który zawiera przyciski nawigacji.
    const navButtons = document.querySelector('.nav-buttons');
    
    // Sprawdzamy, czy istnieje element o klasie "slider" (czyli slider na stronie).
    // Jeśli nie, przypisujemy wysokość slidera jako 0.
    const sliderHeight = slider ? slider.offsetHeight : 0;

    // Sprawdzamy, czy odległość, o jaką przewinęliśmy stronę (window.scrollY), jest większa lub równa wysokości slidera.
    if (window.scrollY >= sliderHeight) {
        // Jeśli tak, dodajemy klasę "fixed-nav" do elementu o klasie "nav-buttons".
        // Klasa "fixed-nav" zmienia styl nawigacji, aby była widoczna nawet podczas przewijania strony.
        navButtons.classList.add('fixed-nav');
    } else {
        // Jeśli nie, usuwamy klasę "fixed-nav" z elementu o klasie "nav-buttons".
        navButtons.classList.remove('fixed-nav');
    }
}

// Wywołanie funkcji "checkSliderPosition" od razu po załadowaniu strony.
window.onload = function() {
    checkSliderPosition();
};

// Poniżej znajduje się obsługa kliknięcia przycisków nawigacji.

// Po kliknięciu przycisku o id "home-btn" przekierowuje użytkownika na stronę główną "index.html".
document.getElementById("home-btn").onclick = function() {
    window.location.href = "index.html";
};

// Po kliknięciu przycisku o id "questions-btn" przekierowuje użytkownika na stronę z pytaniami "pytania.html".
document.getElementById("questions-btn").onclick = function() {
    window.location.href = "pytania.html";
};

// Po kliknięciu przycisku o id "gallery-btn" przekierowuje użytkownika na stronę galerii "galeria.html".
document.getElementById("gallery-btn").onclick = function() {
    window.location.href = "galeria.html";
};

// Po kliknięciu przycisku o id "sources-btn" przekierowuje użytkownika na stronę źródeł "zrodla.html".
document.getElementById("sources-btn").onclick = function() {
    window.location.href = "zrodla.html";
};
