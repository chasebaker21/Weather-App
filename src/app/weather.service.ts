import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey: String = '4535a29697cf2209efbaa46e58162b38';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  weatherIcons: [
    {sunny: "/assets/Weather-Icons/sunny.png"},
    {cloudy: "/assets/Weather-Icons/cloudy.png"},
    {partlyCloudy: "/assets/Weather-Icons/partlyCloudy.png"},
    {rain: "/assets/Weather-Icons/rain.png"},
    {heavyRain: "/assets/Weather-Icons/heavyRain.png"},
    {snow: "/assets/Weather-Icons/snow.png"},
    {snowstorm: "/assets/Weather-Icons/snowStorm.png"},
    {thunderstorm: "/assets/Weather-Icons/thunderStorm.png"},
    {windy: "/assets/Weather-Icons/windy.png"}
  ];

  load(city: String) {
    return this.http.get(`${serviceUrl}?q=${city}&APPID=${apiKey}`);
  }

  getIconUrl(icon: String) {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }
}
