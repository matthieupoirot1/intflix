import {Component, Input, OnInit} from '@angular/core';
import {Episode} from '../../model/episode.model';
import {ActivatedRoute, Route} from '@angular/router';
import {EpisodesService} from '../../service/episodes.service';
import {Observable, of, timer} from 'rxjs';

@Component({
  selector: 'app-edit-episode',
  templateUrl: './edit-episode.component.html',
  styleUrls: ['./edit-episode.component.styl']
})
export class EditEpisodeComponent implements OnInit {
  public id!: number;
  public episodeModel !: Observable<Episode>;
  public nbSecondes = 1;

  constructor(private route: ActivatedRoute, private episodeService: EpisodesService) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') ?? '1', 10);
    this.episodeModel = this.episodeService.getById(this.id);
    const myObservable = timer(0, 1000);

    const mySubscription = myObservable.subscribe({
      next: (value) => {
        this.nbSecondes = value + 1;
      },
      complete: () => {
        console.log('Stream end');
      },
      error: () => {
        console.log('bug');
      }
    });

    setTimeout(() => {
      mySubscription.unsubscribe();
    }, 10000);
  }

  onSubmit(): void {
  }

}
