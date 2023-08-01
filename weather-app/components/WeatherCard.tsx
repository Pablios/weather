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

type Traducoes = {
	[key: string]: string;
};

function traduzirTempo(descricaoEmIngles: string): string {
	const traducoes: Traducoes = {
		"clear sky": "Céu limpo",
		"few clouds": "Poucas nuvens",
		"scattered clouds": "Nuvens dispersas",
		"broken clouds": "Nuvens quebradas",
		"shower rain": "Chuva rápida",
		"rain": "Chuva",
		"thunderstorm": "Trovoadas",
		"snow": "Neve",
		"mist": "Névoa",
	};

	return traducoes[descricaoEmIngles] || descricaoEmIngles;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
	const {
		name,
		main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
		weather,
		wind: { speed, deg },
	} = weatherData;

	const weatherIcon = weather[0].icon;
	const weatherDescription = traduzirTempo(weather[0].description); // Traduzindo a descrição do tempo

	return (
		<section>
			<div className={styles.banner}>
				<div className={styles.weatherInfo}>
					<div className={styles.display}>
						<h1 className={styles.name}>{name}</h1>

						<div className={styles.cardTemp}>
							<div className={styles.cardImgTemp}>
								<img src={`https://wecast.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsun_cloud.922efd42.png&w=384&q=75`} alt="Weather Icon" />
							</div>


							<h2 className={styles.temp}>{weatherDescription}</h2>
							<h2 className={styles.temp}>Temperatura: {temp}°C</h2>
							<h4 className={styles.temp}>{temp_min}°C - {temp_max}°C</h4>
						</div>
					</div>
		

					<div className={styles.weatherDetails}>
						<div className={styles.cardDiv}>
							<div className={styles.card}>
								<div className={styles.cardWeather}>
									<div className={styles.cardImg}>
										<img src={`https://wecast.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fw-cloud.8bbc4b77.png&w=64&q=75`} alt="Weather Icon" />
									</div>

									<p>Velocidade do Vento: {speed} m/s</p>

								</div>

								<div className={styles.cardWeather}>
									<div className={styles.cardImg}>
										<img src={`https://wecast.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fw-cloud.8bbc4b77.png&w=64&q=75`} alt="Weather Icon" />
									</div>

									<p>Direção do Vento: {deg}°</p>
								</div>
							</div>

							<div className={styles.card}>
								<div className={styles.cardWeather}>
									<div className={styles.cardImg}>
										<img src={`https://wecast.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fw-rain.a18ac56f.png&w=64&q=75`} alt="Weather Icon" />
									</div>

									<p>Umidade: {humidity}%</p>
								</div>

								<div className={styles.cardWeather}>
									<div className={styles.cardImg}>
										<img src={`https://wecast.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fw-rain.a18ac56f.png&w=64&q=75`} alt="Weather Icon" />
									</div>

									<p>Pressão: {pressure} hPa</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WeatherCard;