import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ColleguesComponent } from '../composants/collegues/collegues.component';
import { Collegues } from '../motels';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-detail-collegue',
  templateUrl: './detail-collegue.component.html',
  styleUrls: ['./detail-collegue.component.scss']
})
export class DetailCollegueComponent implements OnInit {

  collegues?:Collegues;
  
  constructor(private aRoute: ActivatedRoute, private dataSrv: DataService) {
    
    this.aRoute.paramMap.pipe(
      map(paramMap => paramMap.get('pseudo'))
    ).subscribe(pseudo =>{
      if(pseudo){
        this.dataSrv.detailCollegue(pseudo).subscribe(collegueRecup => {
          this.collegues=collegueRecup;
        });
      }
     
    })

   }

  ngOnInit(): void {
    
  }

}
