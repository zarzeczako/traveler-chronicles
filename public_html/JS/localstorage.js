// Ta funkcja jest wywoływana, gdy zawartość strony została w pełni załadowana.
document.addEventListener('DOMContentLoaded', function() {
    // Pobranie referencji do formularza, listy pytań, przycisków oraz elementów formularza.
    const form = document.querySelector('.question-form');
    const questionsList = document.getElementById('questions-list');
    const loadQuestionsBtn = document.getElementById('load-questions-btn');
    const resetDataBtn = document.getElementById('reset-data-btn');

    // Funkcja do wyświetlania pytań.
    function displayQuestions() {
        // Pobranie pytań z localStorage lub pusta tablica, jeśli nie ma żadnych pytań.
        const questions = JSON.parse(localStorage.getItem('questions')) || [];
        // Wyczyszczenie listy pytań.
        questionsList.innerHTML = '';
        // Iteracja przez pytania i ich wyświetlenie.
        questions.forEach(question => {
            const div = document.createElement('div');
            div.classList.add('question');
            div.innerHTML = `
                <p class="question-text">${question.type}: ${question.name} (${question.gender})</p>
                <p class="answer-text">${question.content}</p>
            `;
            questionsList.appendChild(div);
        });
    }

    // Obsługa zapisywania nowego pytania do localStorage po złożeniu formularza.
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Zatrzymanie domyślnej akcji przesyłania formularza.
        // Pobranie wartości z pól formularza.
        const name = document.getElementById('name').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
        const type = document.getElementById('question-type').value;
        const content = document.getElementById('question').value.trim();

        // Sprawdzenie, czy imię i nazwisko mają co najmniej 3 znaki.
        const nameParts = name.split(' ');
        if (nameParts.length < 2 || nameParts[0].length < 3 || nameParts[1].length < 3) {
            alert('Imię i nazwisko musi zawierać co najmniej 3 znaki każde.');
            return;
        }

        // Utworzenie nowego pytania i zapisanie go do localStorage.
        const newQuestion = { name, gender, type, content };
        let questions = JSON.parse(localStorage.getItem('questions')) || [];
        questions.push(newQuestion);
        localStorage.setItem('questions', JSON.stringify(questions));

        displayQuestions(); // Odświeżenie listy pytań.

        form.reset(); // Resetowanie formularza po złożeniu.
    });

    // Funkcja do wczytywania pytań z serwera.
    async function loadQuestionsFromServer() {
        try {
            const response = await fetch('questions.txt');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const serverQuestions = await response.json();
            let questions = JSON.parse(localStorage.getItem('questions')) || [];
            questions = questions.concat(serverQuestions);
            localStorage.setItem('questions', JSON.stringify(questions));
            displayQuestions();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    // Funkcja do resetowania danych w localStorage.
    function resetData() {
        localStorage.removeItem('questions');
        displayQuestions(); // Odświeżenie listy pytań po usunięciu danych.
    }

    // Dodanie nasłuchiwaczy zdarzeń do przycisków.
    loadQuestionsBtn.addEventListener('click', loadQuestionsFromServer); // Wczytanie pytań z serwera.
    resetDataBtn.addEventListener('click', resetData); // Resetowanie danych w localStorage.

    // Wyświetlenie pytań przy załadowaniu strony.
    displayQuestions();
});
