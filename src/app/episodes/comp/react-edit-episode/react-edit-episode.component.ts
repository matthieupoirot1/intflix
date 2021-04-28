import { Component, OnInit } from '@angular/core';
import {Episode} from '../../model/episode.model';
import {ActivatedRoute} from '@angular/router';
import {EpisodesService} from '../../service/episodes.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-react-edit-episode',
  templateUrl: './react-edit-episode.component.html',
  styleUrls: ['./react-edit-episode.component.styl']
})
export class ReactEditEpisodeComponent implements OnInit {

  public id!: number;
  public episodeModel !: Episode;
  public formTitle!: FormControl;

  constructor(private route: ActivatedRoute, private episodeService: EpisodesService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '1', 10);
    this.episodeModel = this.episodeService.getById(this.id);
    this.formTitle = new FormControl(this.episodeModel.title);

    this.formTitle.valueChanges.subscribe((value: string) => {
      console.log(this.formTitle.value);
    });
  }
}
