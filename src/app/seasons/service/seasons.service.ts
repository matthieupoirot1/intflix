import { Injectable } from '@angular/core';
import {Season} from '../model/season.model';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  public seasons: Season[] = [
    new Season(1, 1, 'Saison 1'),
    new Season(2, 1, 'Saison 2'),
    new Season(3, 1, 'Saison 3'),
    new Season(4, 1, 'Saison 4'),
    new Season(5, 1, 'Saison 5'),
    new Season(6, 1, 'Saison 6'),
    new Season(7, 2, 'Saison 1'),
    new Season(8, 2, 'Saison 2'),
    new Season(9, 2, 'Saison 3'),
    new Season(10, 3, 'Saison 1'),
    new Season(11, 3, 'Saison 2'),
    new Season(12, 3, 'Saison 3'),
    new Season(13, 3, 'Saison 4'),
  ];
  constructor() { }

  getAll(): Season[] {
    return this.seasons;
  }

  getById(id: number): Season {
    return this.seasons.find((season) => {
      return season.id === id;
    }) ?? this.seasons[0];
  }

  getByIdSerie(fkSerie: number): Season[]{
    return this.seasons.filter((season) => {
      return season.fkSerie === fkSerie;
    });
  }
}
