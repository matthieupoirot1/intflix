import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesComponent } from './series/comp/series/series.component';
import { SeasonsComponent } from './seasons/comp/seasons/seasons.component';
import { SerieDetailComponent } from './series/comp/serie-detail/serie-detail.component';
import { SeasonDetailComponent } from './seasons/comp/season-detail/season-detail.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageNotFoundComponent } from './layout/page-not-found/page-not-found.component';
import { EditEpisodeComponent } from './episodes/comp/edit-episode/edit-episode.component';
import { ReactEditEpisodeComponent } from './episodes/comp/react-edit-episode/react-edit-episode.component';
import { InscriptionPageComponent } from './users/comp/inscription-page/inscription-page.component';
import {HttpClientModule} from '@angular/common/http';
import { TestgetComponent } from './testget/testget.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeasonsComponent,
    SerieDetailComponent,
    SeasonDetailComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    EditEpisodeComponent,
    ReactEditEpisodeComponent,
    InscriptionPageComponent,
    TestgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
