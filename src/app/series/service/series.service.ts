import { Injectable } from '@angular/core';
import {Serie} from '../model/serie.model';
import {ApiService} from '../../shared/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  public series: Serie[] = [
    {id: 1, title: 'Game of Thrones'},
    {id: 2, title: 'Dynasty'},
    {id: 3, title: 'The Last Kingdom'},
  ];
  constructor(private apiService: ApiService) {
    // this.refreshFromApi();
  }

  refreshFromApi(): void{
    this.apiService.getData('series.json').subscribe((series: Serie[]) => {
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
