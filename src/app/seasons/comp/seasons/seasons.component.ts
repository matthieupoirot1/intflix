import {Component, Input, OnInit} from '@angular/core';
import {Season} from '../../model/season.model';
import {SeasonsService} from '../../service/seasons.service';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.styl']
})
export class SeasonsComponent implements OnInit {

  public seasons: Season[] = [];
  @Input() idSerie?: number;

  constructor(private seasonsService: SeasonsService) { }

  ngOnInit(): void {

    if (!this.idSerie) {
      this.seasons = this.seasonsService.getAll();
    }else{
      this.seasons = this.seasonsService.getByIdSerie(this.idSerie);
    }
  }

}
