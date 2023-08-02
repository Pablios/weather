"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons';
import WeatherCard from '../components/WeatherCard';
import styles from './App.module.css';

const App: React.FC = () => {
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
