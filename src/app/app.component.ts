import { Component } from '@angular/core';
import { Collegues } from './motels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  collegueFictif:Collegues={
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou",
    score:900
  }
 
}
