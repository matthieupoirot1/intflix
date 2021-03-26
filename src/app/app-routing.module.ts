import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SeriesComponent} from './series/series.component';
import {SeasonsComponent} from './seasons/seasons.component';
import {SerieDetailComponent} from './serie-detail/serie-detail.component';
import {SeasonDetailComponent} from './season-detail/season-detail.component';
import {AuthenticationService} from './auth/authentication.service';

const routes: Routes = [
  {path: 'series', component: SeriesComponent},
  {path: 'series/:id', component: SerieDetailComponent},
  {path: 'seasons', component: SeasonsComponent},
  {path: 'seasons/:id', component: SeasonDetailComponent, canActivate: [AuthenticationService]},
  {path: '', component: SeriesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
