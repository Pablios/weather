import React from 'react';
import styles from './WeatherInfo.module.css';

interface WeatherData {
	name: string;
	location: string;
	temperature: string;
	main: {
		temp: number;
		feels_like: number;
		temp_min: number;
		temp_max: number;
		pressure: number;
		humidity: number;
	};

	weather: {
		main: string;
		description: string;
		icon: string;
	}[];
	wind: {
		speed: number;
		deg: number;
	};
}

interface WeatherCardProps {
	weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
	const {
		name,
		main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
		weather,
		wind: { speed, deg },
	} = weatherData;

	const weatherIcon = weather[0].icon;

	return (
		<div className={styles.weatherInfo}>
			<h2>{name}</h2>
			<div className={styles.weatherIcon}>
				<img src={`http://openweathermap.org/img/w/${weatherIcon}.png`} alt="Weather Icon" />
			</div>
			<div className={styles.weatherDetails}>
				<p>Temperature: {temp}°C</p>
				<p>Feels like: {feels_like}°C</p>
				<p>Min Temperature: {temp_min}°C</p>
				<p>Max Temperature: {temp_max}°C</p>
				<p>Humidity: {humidity}%</p>
				<p>Pressure: {pressure} hPa</p>
			</div>
			<div className={styles.weatherDescription}>
				<p>{weather[0].description}</p>
			</div>
			<div className={styles.windDetails}>
				<p>Wind Speed: {speed} m/s</p>
				<p>Wind Direction: {deg}°</p>
			</div>
		</div>
	);
};

export default WeatherCard;
