import { Injectable } from '@angular/core';
import {Serie} from './serie.model';
import {ApiService} from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  public series: Serie[] = [];
  constructor(private apiService: ApiService) {
    this.refreshFromApi();
  }

  refreshFromApi(): void{
    this.apiService.getData('/series').subscribe((series) => {
      this.series = series;
    });
  }

  getAll(): Serie[] {
    return this.series;
  }

  getSerieById(id: number): Serie{
    return this.series.find((serie) => {
      return serie.id === id;
    }) ?? this.series[0];
  }
}
