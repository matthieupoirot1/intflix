import { Component, OnInit } from '@angular/core';
import {SeasonsService} from '../../service/seasons.service';
import {SeriesService} from '../../../series/service/series.service';
import {ActivatedRoute} from '@angular/router';
import {Serie} from '../../../series/model/serie.model';
import {Season} from '../../model/season.model';
import {EpisodesService} from '../../../episodes/service/episodes.service';
import {Episode} from '../../../episodes/model/episode.model';

@Component({
  selector: 'app-season-detail',
  templateUrl: './season-detail.component.html',
  styleUrls: ['./season-detail.component.styl']
})
export class SeasonDetailComponent implements OnInit {
  public serie!: Serie;
  public season!: Season;
  public id!: number;
  public episodes!: Episode[];

  constructor(
    private seriesService: SeriesService,
    private seasonsService: SeasonsService,
    private episodesService: EpisodesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params.id);
      this.season = this.seasonsService.getById(this.id);
      this.serie = this.seriesService.getById(this.season.fkSerie);
      this.episodesService.getByIdSeason(this.id).subscribe((episodes) => {
        this.episodes = episodes;
      });
    });
  }

  changeSeenState(episodeId: number): void{
    this.episodesService.toogleSeenStatus(episodeId);
  }

  clickToPushEp(): void {
    this.episodesService.pushToDB();
  }
}
