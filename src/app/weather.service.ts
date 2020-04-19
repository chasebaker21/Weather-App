import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey: String = 'd24980fd6d82b359521f65dc8882b172';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  load(city: String) {
    return this.http.get(`${serviceUrl}?q=${city}&APPID${apiKey}`);
  }

  getIconUrl(icon: String) {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }
}
