import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../shared/series/series.service';
import {Serie} from '../shared/series/serie.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.styl']
})
export class SeriesComponent implements OnInit {

  public series: Serie[] = [];
  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void{
    this.series = this.seriesService.getAll();
  }

}
