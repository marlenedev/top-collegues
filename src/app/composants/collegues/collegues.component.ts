import { Component, Input, OnInit } from '@angular/core';
import { Avis, Collegues } from 'src/app/motels';

@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.scss']
})
export class ColleguesComponent implements OnInit {

  @Input() col?:Collegues;

  btnJaimeActif=false;
  btnJedetesteActif =false;


  constructor() { }

  ngOnInit(): void {

    //initialisation de la gestion des états boutons
    this.gererEtatBtns();
  }

 
  //traitement des avis

  traiterEvtAvis(avisEmis : Avis){
    // regarde la présence d'un collègue
    if(this.col){
      if(avisEmis === Avis.AIMER){
        this.col.score=this.col.score +100;
      }else if (avisEmis === Avis.DETESTER){
        this.col.score=this.col.score -100;
      }
    }

    //on appel la fonstion de gestion des états des boutons

    this.gererEtatBtns();

  }

  //gestion des etats des boutons

  gererEtatBtns(){
    //verifit si il y a en collègue
    if(this.col){
      //creation d'une constante score qui est le score du collègue
      const {score} = this.col;
      if(score <= -1000){
        this.btnJedetesteActif=false;
        this.btnJaimeActif=true;
      }else if( score >=1000){
        this.btnJaimeActif=false;
        this.btnJedetesteActif=true;
      }else{
        this.btnJaimeActif=true;
        this.btnJedetesteActif=true;
      }
    }



  }






}
