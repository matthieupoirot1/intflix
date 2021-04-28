import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../service/series.service';
import {Serie} from '../../model/serie.model';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.styl'],
})
export class SeriesComponent implements OnInit {

  public series: Serie[] = [];
  public dragItem: any;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(): void{
    this.series = this.seriesService.getAll();
  }

  clickRemoveSerie(id: number): void{
    this.seriesService.removeById(id);
    this.getSeries();
  }

  setDragItem(item: any): void{
    if (item !== null){
      this.dragItem = item;
    }
  }

  clickRemoveSerieFromDrag(): void {
    console.log(this.dragItem);
    // this.seriesService.removeById();
  }
}
