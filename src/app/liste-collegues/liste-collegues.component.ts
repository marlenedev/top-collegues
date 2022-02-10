import { Component, OnInit } from '@angular/core';
import { Collegues } from '../motels';

//creation d'un tableau contenant une liste de collegue
const tableauColleguesFictifs = [
  {
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou1",
    score:900
  },
  {
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou2",
    score:900
  },
  {
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou3",
    score:900
  },
  {
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou1",
    score:900
  },
  {
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou2",
    score:900
  },
  {
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou3",
    score:900
  },
  {
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou1",
    score:900
  },
  {
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou2",
    score:900
  },
  {
    photoUrl:"https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    pseudo:"Miaou3",
    score:900
  }
];

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {


  collegues : Collegues[];

  constructor() { 

    //jeu de données provisoire 
    this.collegues=tableauColleguesFictifs;
  }

  ngOnInit(): void {
  }

}
