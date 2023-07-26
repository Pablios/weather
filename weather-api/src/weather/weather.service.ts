import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private apiKey = '385da84a9c90ef912f070c1c7b37d4d7';

  async getWeatherForecast(location: string): Promise<any> {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${this.apiKey}`
      );

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch weather data from OpenWeatherMap API.');
    }
  }
}
