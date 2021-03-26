import { Component, OnInit } from '@angular/core';
import {SeasonsService} from '../shared/seasons/seasons.service';
import {SeriesService} from '../shared/series/series.service';
import {ActivatedRoute} from '@angular/router';
import {Serie} from '../shared/series/serie.model';
import {Season} from '../shared/seasons/season.model';
import {EpisodesService} from '../shared/episodes/episodes.service';
import {Episode} from '../shared/episodes/episode.model';

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
      this.season = this.seasonsService.getSeasonById(this.id);
      this.serie = this.seriesService.getSerieById(this.season.fkSerie);
      this.episodes = this.episodesService.getEpisodesBySeasonId(this.id);
    });
  }

  changeSeenState(episodeId: number): void{
    this.episodesService.toogleSeenStatus(episodeId);
  }

}
