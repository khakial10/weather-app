async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = 'your-api-key'; // Замените 'your-api-key' на свой ключ API для OpenWeatherMap
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML =`
    <h3>${data.name}</h3>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Description: ${data.weather[0].description}</p>
  `;
}
