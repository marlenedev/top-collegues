import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvisComponent } from './composants/avis/avis.component';
import { ColleguesComponent } from './composants/collegues/collegues.component';
import { ListeColleguesComponent } from './liste-collegues/liste-collegues.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import {HttpClientModule} from '@angular/common/http';
import { NouveauCollegueTempleFormComponent } from './nouveau-collegue-temple-form/nouveau-collegue-temple-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    ColleguesComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    NouveauCollegueTempleFormComponent
  ],
  imports: [
    BrowserModule,
    //import du module HTTP
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
