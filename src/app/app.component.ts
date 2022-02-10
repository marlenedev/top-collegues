import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Collegues } from './motels';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //injection du service HTTP
  /*constructor (private _http:DataService){

  }
   lorsDeLaListe (valeur: Collegues){
     this._http.listerCollegues();
   }*/
 
}
