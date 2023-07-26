import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('forecast/:location/')
  async getWeatherForecast(
    @Param('location') location: string,
  ): Promise<any> {
    return this.weatherService.getWeatherForecast(location);
  }
}
