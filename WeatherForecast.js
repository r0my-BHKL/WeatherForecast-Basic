const apiKey = '538e75a0fe6271db78df0e98b06f097d'; 


function getWeatherByCity() {
    const city = $('#cityInput').val().trim();
    if(city === '') {
        alert('Please enter a city name.');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=98fdce3644ff7cc3cb8ef703a974cc89&units=metric`;
    $.ajax({
        url: apiUrl,
        method: 'GET',
        success: function(data) {
            displayWeather(data, '#weatherInfo'); 
        },
        error: function(xhr) {
            alert('City not found. Please try again.');
            console.error('Error:', xhr);
        }
    });
}

function getWeatherByLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const { latitude, longitude } = position.coords;
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=98fdce3644ff7cc3cb8ef703a974cc89&units=metric`;

            $.ajax({
                url: apiUrl,
                method: 'GET',
                success: function(data) {
                    console.log(data);
                    displayWeather(data, '#locationWeatherInfo'); 
                },
                error: function(xhr) {
                    alert('Location not found. Please try again.');
                    console.error('Error:', xhr);
                }
            });
        }, function(error) {
            alert('Geolocation error: ' + error.message);
            console.error('Geolocation error:', error);
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}


function displayWeather(data, container) {
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    $(container).html(`
        <h2>${data.name}</h2>
        <img src="${iconUrl}" class="weather-icon" alt="Weather Icon">
        <p>Temperature: ${data.main.temp}Â°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `);
}


$(document).ready(function() {
    getWeatherByLocation(); 
});