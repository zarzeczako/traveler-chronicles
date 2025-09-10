// Ta funkcja jest wywoływana, gdy zawartość strony została w pełni załadowana.
document.addEventListener("DOMContentLoaded", function () {
    // Ta funkcja pobiera informacje o pogodzie dla podanego miasta i wyświetla je w określonym elemencie HTML.
    function fetchWeather(city, elementId) {
        // Klucz API do serwisu OpenWeatherMap.
        const apiKey = 'd41695e6e026ca67320b99492be3f3fe';
        // Adres URL do pobrania danych pogodowych dla danego miasta.
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        // Wywołanie API Fetch do pobrania danych pogodowych.
        fetch(weatherUrl)
            .then(response => response.json()) // Parsowanie odpowiedzi jako JSON.
            .then(data => {
                // Pobranie elementu HTML, do którego będziemy wstawiać informacje o pogodzie.
                const weatherInfoDiv = document.getElementById(elementId);
                // Tworzenie HTML zawierającego szczegóły pogodowe dla danego miasta.
                const weatherDetails = `
                    <p>Temperatura: ${data.main.temp} °C</p>
                    <p>Pogoda: ${data.weather[0].description}</p>
                    <p>Wilgotność: ${data.main.humidity}%</p>
                    <p>Wiatr: ${data.wind.speed} m/s</p>
                `;
                // Wstawienie szczegółów pogodowych do elementu HTML.
                weatherInfoDiv.innerHTML = weatherDetails;
            })
            .catch(error => {
                // Obsługa błędu w przypadku niepowodzenia pobrania danych pogodowych.
                console.error('Error fetching weather data:', error);
                // Wyświetlenie komunikatu o błędzie w elemencie HTML.
                document.getElementById(elementId).innerHTML = 'Nie udało się pobrać danych o pogodzie.';
            });
    }

    // Wywołanie funkcji fetchWeather dla różnych miast i przypisanie ich do odpowiednich elementów HTML.
    fetchWeather('London', 'weather-info-london');
    fetchWeather('Madrid', 'weather-info-madrid');
    fetchWeather('New York', 'weather-info-newyork');
    fetchWeather('Los Angeles', 'weather-info-losangeles');
    fetchWeather('Paris', 'weather-info-paris');
});
