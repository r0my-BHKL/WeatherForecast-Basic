# WeatherForecast-Basic
The **Weather Forecast Web Application** provides real-time weather updates based on user input or geolocation. It displays temperature, conditions, and weather icons in a clean, responsive interface. Built with HTML, CSS, JavaScript (jQuery), and the **OpenWeatherMap API**, it allows users to search by city or get automatic location-based weather.

This web application provides real-time weather information for a city entered by the user or for the user's current location using the OpenWeatherMap API.

Frontend: The user interface is styled with CSS, creating a clean and modern layout with a blue sky background and an intuitive input field for users to enter the city name. The design is responsive and centers content both vertically and horizontally. The app also uses flexbox for layout adjustments and includes an interactive hover effect for buttons​(WeatherForecast).

Backend/Logic: The JavaScript code fetches weather data using the OpenWeatherMap API. The app provides two options:

City Search: Users can input a city name, and upon submission, the app retrieves and displays the city's weather.
Current Location: The app can also automatically detect and fetch weather data for the user’s current geographic location using the browser's geolocation feature​(WeatherForecast).
API Integration: The application uses jQuery's AJAX method to make HTTP requests to the OpenWeatherMap API, handling both city-based searches and geolocation-based requests. Error handling is implemented to notify users if their city is not found or if geolocation fails​(WeatherForecast).
