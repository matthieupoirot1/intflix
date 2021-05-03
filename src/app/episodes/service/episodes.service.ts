import {Injectable} from '@angular/core';
import {Episode} from '../model/episode.model';
import {Season} from '../../seasons/model/season.model';
import {ApiService} from '../../shared/api/api.service';
import {Observable} from 'rxjs';
import {find, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  public episodes: Episode[] = [];
  public loading = true;

  constructor(private api: ApiService) {
    this.loadFromApi();
  }

  private loadFromApi(): void {
    this.api.getData('/episodes.json').subscribe((episodes) => {
      episodes.forEach((episodeFromJSON: Episode) => {
        if (episodeFromJSON){
          this.episodes.push(new Episode(
            episodeFromJSON.id,
            episodeFromJSON.fkSeason,
            episodeFromJSON.num,
            episodeFromJSON.title,
            episodeFromJSON.seen
          ));
        }
      });

      console.log(this.episodes);
      this.loading = false;
    });
  }

  getAll(): Observable<Episode[]> {
    return this.api.getData('/episodes.json').pipe(
      map((episodesJSON) => {
        return episodesJSON.map((episodeJSON: Episode) => {
          return new Episode(episodeJSON.id, episodeJSON.fkSeason, episodeJSON.num, episodeJSON.title, episodeJSON.seen);
        });
      }),
    );
  }

  getById(id: number): Observable<Episode> {
    return this.api.getData('/episodes.json').pipe(
      map((response) => {
        return response.find((episode: Episode) => {
            return episode?.id === id;
        });
      }),
      map((episodeJSON) => {
        return new Episode(episodeJSON.id, episodeJSON.fkSeason, episodeJSON.num, episodeJSON.title, episodeJSON.seen);
      })
    );
  }

  getByIdSeason(fkSeason: number): Observable<Episode[]> {
    return this.api.getData('/episodes.json').pipe(
      map((response) => {
        return response.filter((episode: Episode) => {
          return episode?.fkSeason === fkSeason;
        });
      }),
      map((episodesJSON) => {
        return episodesJSON.map((episodeJSON: Episode) => {
          return new Episode(episodeJSON.id, episodeJSON.fkSeason, episodeJSON.num, episodeJSON.title, episodeJSON.seen);
        });
      }),
    );
  }

  toogleSeenStatus(episodeId: number): void {
    this.episodes[episodeId - 1].seen = !(this.episodes[episodeId - 1].seen);
  }

  pushToDB(): void {
    const episodes = [
      new Episode(1, 1, 1, 'L\'hiver vient', true),
      new Episode(2, 1, 2, 'La route royale', true),
      new Episode(3, 1, 3, 'Lord Snow', true),
      new Episode(4, 1, 4, 'Infirmes, Bâtards et Choses brisées', true),
      new Episode(5, 1, 5, 'Le Loup et le Lion', true),
      new Episode(6, 1, 6, 'Une couronne dorée', true),
      new Episode(7, 1, 7, 'Gagner ou mourir', true),
      new Episode(8, 1, 8, 'Frapper d\'estoc', true),
      new Episode(9, 1, 9, 'Baelor', true),
      new Episode(10, 1, 10, 'Le Nord se souvient', true),
      new Episode(11, 2, 1, 'Les Contrées nocturnes', true),
      new Episode(12, 2, 2, 'Ce qui est mort ne saurait mourir', false),
      new Episode(13, 2, 3, 'Le Jardin des os', false),
      new Episode(14, 2, 4, 'Le fantôme d\'Harrenhal', false),
      new Episode(15, 2, 5, 'Les Anciens et les Nouveaux Dieux', false),
      new Episode(16, 7, 1, 'Quelle élégance', true),
      new Episode(17, 7, 2, 'Dire, enterrer et passer à autre chose', true),
      new Episode(18, 7, 3, 'Coupable', true),
      new Episode(19, 7, 4, 'Relations privées', false),
      new Episode(20, 8, 1, 'Les bonnes choses ont une fin', false),
      new Episode(21, 8, 2, 'Nid de vipères', false),
      new Episode(22, 8, 3, 'Le Coup du majordome', false),
      new Episode(23, 10, 1, 'Uthred, fils d\'Uthred', true),
      new Episode(24, 10, 2, 'Le royaume de Wessex', true),
      new Episode(25, 10, 3, 'Serment d\'allégeance', false),
      new Episode(26, 10, 4, 'Gages de loyauté', false),
      new Episode(27, 10, 5, 'La justice de Dieu', false),
    ];
    console.log('beginning foreach');
    episodes.forEach((episode) => {
      console.log('in foreach');
      this.api.putData('episodes/' + episode.id + '.json', episode.toJson()).subscribe((value) => {
        console.log(value);
      });
    });
  }
}

// "layout/header"
// "layout/footer"
// (season) si vous l'avez pas
// "season-detail"
// (serie) si vous l'avez pas
// "serie-detail"
// vous créez ces components
// ex : ng g c layout/header
// ex 2 : ng g c season-detail
