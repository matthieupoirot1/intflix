import { Component, OnInit } from '@angular/core';
import {Season} from '../../../seasons/model/season.model';
import {SeasonsService} from '../../../seasons/service/seasons.service';
import {ActivatedRoute} from '@angular/router';
import {Serie} from '../../model/serie.model';
import {SeriesService} from '../../service/series.service';

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
    this.serie = this.seriesService.getById(this.id);
  }
}
