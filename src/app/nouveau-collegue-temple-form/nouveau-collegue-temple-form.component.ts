import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Collegues } from '../motels';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-nouveau-collegue-temple-form',
  templateUrl: './nouveau-collegue-temple-form.component.html',
  styleUrls: ['./nouveau-collegue-temple-form.component.scss']
})
export class NouveauCollegueTempleFormComponent implements OnInit {

  collegues:Partial<Collegues> = {
    
  };

  


  constructor(private dataSrv: DataService) {
    
   }

   submit (){
    console.log(this.collegues);
    this.dataSrv.ajouterCollegues(this.collegues).subscribe();
    this.collegues={};
  }
  ngOnInit(): void {
  }

}
