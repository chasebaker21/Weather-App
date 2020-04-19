import { Component, OnInit } from '@angular/core';
import { Weather } from '../../app.component';

@Component({
  selector: 'display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  weather: Weather = {
    city: "Los Angelas",
    conditions: "Sunny",
    temperature: 70,
    icon: ""
  }

  update(weather: Weather) {
    this.weather = weather;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
