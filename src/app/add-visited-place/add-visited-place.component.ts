import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
  selector: 'app-add-visited-place',
  templateUrl: './add-visited-place.component.html',
  styleUrls: ['./add-visited-place.component.css']
})
export class AddVisitedPlaceComponent implements OnInit {
  visitedPlace: string;

  constructor(private placesService: PlacesService) {
  }

  ngOnInit() {
  }

  add() {
    this.placesService.addVisited(this.visitedPlace);
    this.visitedPlace = '';
  }

}
