import { Component, OnInit } from '@angular/core';
import {Season} from '../shared/seasons/season.model';
import {SeasonsService} from '../shared/seasons/seasons.service';
import {ActivatedRoute} from '@angular/router';
import {Serie} from '../shared/series/serie.model';
import {SeriesService} from '../shared/series/series.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.styl']
})
export class SerieDetailComponent implements OnInit {

  public serie!: Serie;
  public id!: number;
  constructor(private seasonsService: SeasonsService, private seriesService: SeriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '1', 10);
    this.serie = this.seriesService.getSerieById(this.id);
  }
}
