// Pobranie wszystkich elementów z klasą "slide" do zmiennej slides
const slides = document.querySelectorAll(".slide");

// Zmienna przechowująca aktualny indeks slajdu
let slideIndex = 0;

// Zmienna przechowująca ID interwału do automatycznej zmiany slajdów
let intervalId = null;

// Dodanie nasłuchiwania zdarzenia "DOMContentLoaded", które uruchomi funkcję initializeSlider po załadowaniu całej zawartości DOM
document.addEventListener("DOMContentLoaded", initializeSlider);

// Funkcja inicjalizująca slider
function initializeSlider() {
    if (slides.length > 0) {
        // Dodanie klasy "displaySlide" do aktualnego slajdu
        slides[slideIndex].classList.add("displaySlide");
        // Ustawienie interwału na automatyczną zmianę slajdów co 6 sekund
        intervalId = setInterval(nextSlide, 6000);
    }
}

// Funkcja pokazująca slajd o podanym indeksie
function showSlide(index) {
    // Reset indeksu jeśli jest poza zakresem (jeśli indeks jest większy lub równy liczbie slajdów, ustaw na 0; jeśli mniejszy od 0, ustaw na ostatni slajd)
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Usunięcie klasy "displaySlide" ze wszystkich slajdów i dodanie jej tylko do aktualnego slajdu
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");

    // Aktualizacja aktywnego wskaźnika slajdu (kropki)
    updateActiveIndicator(slideIndex);
}

// Funkcja zmieniająca slajd na poprzedni
function prevSlide() {
    // Zatrzymanie automatycznego interwału
    clearInterval(intervalId);
    // Zmniejszenie indeksu slajdu
    slideIndex--;
    // Pokazanie poprzedniego slajdu
    showSlide(slideIndex);
    // Ponowne ustawienie interwału na automatyczną zmianę slajdów co 6 sekund
    intervalId = setInterval(nextSlide, 6000);
}

// Funkcja zmieniająca slajd na następny
function nextSlide() {
    // Zatrzymanie automatycznego interwału
    clearInterval(intervalId);
    // Zwiększenie indeksu slajdu
    slideIndex++;
    // Pokazanie następnego slajdu
    showSlide(slideIndex);
    // Ponowne ustawienie interwału na automatyczną zmianę slajdów co 6 sekund
    intervalId = setInterval(nextSlide, 6000);
}

// Funkcja aktualizująca aktywny wskaźnik slajdu (kropki)
function updateActiveIndicator(index) {
    document.querySelectorAll(".slide-btn").forEach((btn, i) => {
        // Jeśli indeks jest równy aktualnemu indeksowi slajdu, dodaj klasę "active"; w przeciwnym razie usuń ją
        if (i === index) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });
}

// Dodanie nasłuchiwania zdarzeń na przyciski nawigacyjne do zmiany slajdów
document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);

// Dodanie nasłuchiwania zdarzeń na wskaźniki slajdów (kropki)
document.querySelectorAll(".slide-btn").forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
        // Zatrzymanie automatycznego interwału
        clearInterval(intervalId);
        // Pokazanie slajdu o klikniętym indeksie
        showSlide(index);
        // Ponowne ustawienie interwału na automatyczną zmianę slajdów co 6 sekund
        intervalId = setInterval(nextSlide, 6000);
    });
});

// Po załadowaniu strony, zaktualizuj wskaźnik aktywnego slajdu
document.addEventListener("DOMContentLoaded", () => {
    // Dodanie klasy "active" do pierwszego wskaźnika slajdu
    updateActiveIndicator(slideIndex);
});

// Funkcja sprawdzająca pozycję slidera i aktualizująca klasę nawigacji
function checkSliderPosition() {
    const slider = document.querySelector('.slider');
    const navButtons = document.querySelector('.nav-buttons');
    
    const sliderHeight = slider ? slider.offsetHeight : 0;

    // Dodanie klasy 'fixed-nav' do przycisków nawigacyjnych jeśli slider jest przescrollowany
    if (window.scrollY >= sliderHeight) {
        navButtons.classList.add('fixed-nav');
    } else {
        navButtons.classList.remove('fixed-nav');
    }
}

// Dodanie nasłuchiwania zdarzeń na przewijanie strony
window.addEventListener('scroll', checkSliderPosition);

// Dodanie funkcji do przycisków nawigacyjnych, aby przenosiły do odpowiednich stron
document.getElementById("home-btn").onclick = function() {
    window.location.href = "index.html";
};

document.getElementById("questions-btn").onclick = function() {
    window.location.href = "pytania.html";
};

document.getElementById("gallery-btn").onclick = function() {
    window.location.href = "galeria.html";
};

document.getElementById("sources-btn").onclick = function() {
    window.location.href = "zrodla.html";
};
