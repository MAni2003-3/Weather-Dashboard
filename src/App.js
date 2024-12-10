import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import UnitToggle from './components/UnitToggle';
import SavedCities from './components/SavedCities';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [unit, setUnit] = useState('metric');
  const [savedCities, setSavedCities] = useState([]);
  const [error, setError] = useState('');

  const handleUnitToggle = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  const fetchWeatherData = async (cityName) => {
    try {
      setError('');
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&units=${unit}`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError('City not found or API error.');
    }
  };

  const handleCitySearch = (event) => {
    event.preventDefault();
    if (city) {
      fetchWeatherData(city);
    }
  };

  const saveCity = (cityName) => {
    if (!savedCities.includes(cityName)) {
      const updatedCities = [...savedCities, cityName];
      setSavedCities(updatedCities);
      localStorage.setItem('savedCities', JSON.stringify(updatedCities));
    }
  };

  const handleSavedCityClick = (cityName) => {
    setCity(cityName);
    fetchWeatherData(cityName);
  };

  useEffect(() => {
    const savedCitiesFromStorage = JSON.parse(localStorage.getItem('savedCities')) || [];
    setSavedCities(savedCitiesFromStorage);
  }, []);

  return (
    <div className="App">
      <h1>Weather Dashboard</h1>

      <SearchBar city={city} setCity={setCity} handleCitySearch={handleCitySearch} />
      {error && <p className="error">{error}</p>}

      {weatherData && (
        <WeatherCard weatherData={weatherData} unit={unit} saveCity={saveCity} city={city} />
      )}

      <UnitToggle handleUnitToggle={handleUnitToggle} unit={unit} />
      <SavedCities savedCities={savedCities} handleSavedCityClick={handleSavedCityClick} />
    </div>
  );
};

export default App;
