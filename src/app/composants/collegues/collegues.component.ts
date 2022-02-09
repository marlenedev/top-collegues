import { Component, Input, OnInit } from '@angular/core';
import { Collegues } from 'src/app/motels';

@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.scss']
})
export class ColleguesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() col?:Collegues;

}
