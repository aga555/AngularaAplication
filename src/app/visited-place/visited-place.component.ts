import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-visited-place',
  templateUrl: './visited-place.component.html',
  styleUrls: ['./visited-place.component.css']
})
export class VisitedPlaceComponent implements OnInit {
@Input()
placesVisited: Array<string> = [];
  constructor() { }

  ngOnInit() {
  }

}
