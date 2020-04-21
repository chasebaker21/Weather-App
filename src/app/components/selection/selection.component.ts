import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from '../../weather.service';
import { Weather } from '../../app.component';

@Component({
  selector: 'selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>();
  weather: Weather = new Weather();
  city: String = "";

  constructor(private weatherData: WeatherService) { }

  submit() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15) * 1.8 + 32)
      this.weather.high = Math.round((data['main']['temp_max'] - 273.15) * 1.8 + 32)
      this.weather.low = Math.round((data['main']['temp_min'] - 273.15) * 1.8 + 32)
      // this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])

      // if(this.weather.conditions == "Clouds") {
      //   this.weather.icon = "/assets/Weather-Icons/cloudy.png";
      // } if(this.weather.conditions == "Rain") {
      //   this.weather.icon = "/assets/Weather-Icons/rain.png";
      // }

      switch (this.weather.conditions) {
        case "Clouds":
          this.weather.icon = "/assets/Weather-Icons/cloudy.png";
          break;
        case "Rain":
          this.weather.icon = "/assets/Weather-Icons/rain.png";
          break;
        case "Thunderstorm":
          this.weather.icon = "/assets/Weather-Icons/thunderStorm.png";
          break;
        case "Snow":
          this.weather.icon = "/assets/Weather-Icons/snow.png";
          break;
        case "Clear":
          this.weather.icon = "/assets/Weather-Icons/sunny.png";
          break;
        case "Drizzle":
          this.weather.icon = "/assets/Weather-Icons/drizzle.png";
          break;
        case "Mist":
          this.weather.icon = "/assets/Weather-Icons/mist.png";
          break;
        case "Smoke":
          this.weather.icon = "/assets/Weather-Icons/smoke.png";
          break;
        case "Haze":
          this.weather.icon = "/assets/Weather-Icons/haze.png";
          break;
        case "Dust":
          this.weather.icon = "/assets/Weather-Icons/dust.png";
          break;
        case "Fog":
          this.weather.icon = "/assets/Weather-Icons/haze.png";
          break;
        case "Sand":
          this.weather.icon = "/assets/Weather-Icons/dust.png";
          break;
        case "Ash":
          this.weather.icon = "/assets/Weather-Icons/smoke.png";
          break;
        case "Squall":
          this.weather.icon = "/assets/Weather-Icons/windy.png";
          break;
        case "Tornado":
          this.weather.icon = "/assets/Weather-Icons/tornado.png";
          break;
      }


      this.onSelection.emit(this.weather);
    })
  }

  ngOnInit(): void {
  }

}
