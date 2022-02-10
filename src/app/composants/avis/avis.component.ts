import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from 'src/app/motels';


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss'],
})
export class AvisComponent implements OnInit {



  //capacité d'émetteur un évènement
  @Output() avis = new EventEmitter<Avis>();
  
  //capacité de recevoir
  @Input() jaimeActif =true;
  @Input() jedetesteActif =true;


  constructor() { }

  ngOnInit(): void {
  }


  jaime(){
    //déclencher l'évènement "avis" avec "$event"="Avis.DETESTER"
      this.avis.emit(Avis.AIMER);
  }

  jedeteste(){
    this.avis.emit(Avis.DETESTER);
  }

}
