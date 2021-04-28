import { Injectable } from '@angular/core';
import {Serie} from '../model/serie.model';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  public series: Serie[] = [
    new Serie(1, 'Games of Thrones'),
    new Serie(2, 'Dynastie'),
    new Serie(3, 'The Last Kingdom')
  ];
  constructor() { }

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
