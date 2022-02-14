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
import { RouterModule, Routes } from '@angular/router';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { DetailCollegueComponent } from './detail-collegue/detail-collegue.component';


const routerConfig:Routes =[
  {
   path : 'forms', component : NouveauCollegueTempleFormComponent
  },
  {
   path : 'accueil', component : AccueilComponent
  },
  {
    path : 'accueil/:pseudo', component : DetailCollegueComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    ColleguesComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    NouveauCollegueTempleFormComponent,
    MenuComponentComponent,
    DetailCollegueComponent
  ],
  imports: [
    BrowserModule,
    //import du module HTTP
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routerConfig)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
