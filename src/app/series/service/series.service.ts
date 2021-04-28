import { Injectable } from '@angular/core';
import {Serie} from '../model/serie.model';
import {ApiService} from '../../shared/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  public series: Serie[] = [];
  constructor(private apiService: ApiService) {
    this.refreshFromApi();
  }

  refreshFromApi(): void{
    this.apiService.getData('/series').subscribe((series: Serie[]) => {
      this.series = series;
    });
  }

  getAll(): Serie[] {
    return this.series;
  }

  getById(id: number): Serie {
    // return this.series[id - 1];
    return this.series.find((serie) => {
      return serie.id === id;
    }) ?? this.series[0];
  }

  removeById(id: number): void{
    this.series = this.series.filter((serie) => {
      return serie.id !== id;
    });
  }
}
