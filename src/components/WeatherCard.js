import React from 'react';

const WeatherCard = ({ weatherData, unit, saveCity, city }) => {
  return (
    <div className="weather-card">
      <h2>{weatherData.location.name}, {weatherData.location.country}</h2>
      <p>
        Temperature: {unit === 'metric' ? weatherData.current.temp_c : weatherData.current.temp_f}°{unit === 'metric' ? 'C' : 'F'}
      </p>
      <p>Condition: {weatherData.current.condition.text}</p>
      <p>Humidity: {weatherData.current.humidity}%</p>
      <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
      <button onClick={() => saveCity(city)}>Save this city</button>
    </div>
  );
};

export default WeatherCard;

