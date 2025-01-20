import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { WeatherService } from '../../services/weather.service';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: [],
})
export class WeatherHomeComponent implements OnInit, OnDestroy {
  private readonly destroy$: Subject<void> = new Subject();
  initialCityName = 'São Paulo';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWheatherDatas(this.initialCityName);
  }

  getWheatherDatas(cityName: string): void {
    this.weatherService
      .getWeatherDatas(cityName)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response);
          console.log(this.weatherDatas);
        },
        error: (error) => console.log(error),
      });
  }

  onSubmit(): void {
    this.getWheatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
