import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ListeColleguesComponent } from '../liste-collegues/liste-collegues.component';
import { Collegues } from '../motels';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {


  @ViewChild(ListeColleguesComponent)
  composantListeCollegues?: ListeColleguesComponent;
  

  constructor() { }

  ngOnInit(): void {
   
  }
  actualiser(){
    this.composantListeCollegues?.rafraichir();
  }
  

}
