import React, { useState } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';

const WeatherPage: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/weather/forecast/${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
      setWeatherData(null);
    }
  };

  return (
    <div>
      <h1>Previsão do Tempo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o nome da cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Obter Previsão</button>
      </form>
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherPage;
