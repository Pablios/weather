'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import styles from './App.module.css';

const App: React.FC = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "https://weather-eosin-beta.vercel.app";
  const apiKey = '385da84a9c90ef912f070c1c7b37d4d7';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error(error); 
      setWeatherData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.search}>
        <div className={styles.searchcontainer}>
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faCloudSunRain} />
          </button>
        </div>
      </form>
      {weatherData ? (
        <WeatherCard weatherData={weatherData} />
      ) : (
        <p className={styles['no-results']}>Nenhum registro encontrado.</p>
      )}
    </div>
  );
};

export default App;
