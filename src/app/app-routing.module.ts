import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeriesComponent} from './series/comp/series/series.component';
import {SeasonsComponent} from './seasons/comp/seasons/seasons.component';
import {SerieDetailComponent} from './series/comp/serie-detail/serie-detail.component';
import {SeasonDetailComponent} from './seasons/comp/season-detail/season-detail.component';
import {AuthenticationService} from './auth/authentication.service';
import {PageNotFoundComponent} from './layout/page-not-found/page-not-found.component';
import {EditEpisodeComponent} from './episodes/comp/edit-episode/edit-episode.component';
import {ReactEditEpisodeComponent} from './episodes/comp/react-edit-episode/react-edit-episode.component';
import {InscriptionPageComponent} from './users/comp/inscription-page/inscription-page.component';
import {TestgetComponent} from './testget/testget.component';

const routes: Routes = [
  {path: 'episodes/:id', component: EditEpisodeComponent},
  {path: 'episodes/:id/react', component: ReactEditEpisodeComponent},
  {path: 'series', component: SeriesComponent},
  // localhost:4000/series/10
  {path: 'series/:id', component: SerieDetailComponent},
  {path: 'seasons', component: SeasonsComponent},
  {path: 'seasons/:id', component: SeasonDetailComponent, canActivate: [AuthenticationService]},
  {path: 'signup', component: InscriptionPageComponent},
  {path: 'apitest', component: TestgetComponent},
  // "localhost:4000/" === "localhost:4000"
  {path: '', component: SeriesComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
