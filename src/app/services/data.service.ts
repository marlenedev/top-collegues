import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Avis, Collegues } from '../motels';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //...

  //TODO configurer le module HTTP + injecter le client HTTP

  constructor(private http: HttpClient) {

   }

  listerCollegues(): Observable<Collegues[]> {
    // TODO GET API_URL/collegues
    return this.http.get<Collegues[]>("https://formation-angular-collegues.herokuapp.com/api/v1/collegues");
  }


   donnerUnAvis(collegue: Collegues, avis: Avis): Observable<Collegues> {
    // ...
    // TODO
    // POST API_URL/votes
    // {
    // "pseudo": "basmor",
    // "avis" : "AIMER"
    //
    console.log(collegue,avis.toString());

    return this.http.post<Collegues>("https://formation-angular-collegues.herokuapp.com/api/v1/votes", {
      "avis" : avis.toString(),
      "pseudo": collegue.pseudo
      
    }
    );
  }

  ajouterCollegues(collegue:Partial<Collegues>){
    return this.http.post<Collegues>("https://formation-angular-collegues.herokuapp.com/api/v1/collegues",{
      "pseudo":collegue.pseudo,
      "nom" : collegue.nom,
      "prenom":collegue.prenom,
      "photo" : collegue.photo
    })
  }

  detailCollegue(pseudo :string): Observable<Collegues>{
    return this.http.get<Collegues>("https://formation-angular-collegues.herokuapp.com/api/v1/collegues/"+pseudo);
  }


}
