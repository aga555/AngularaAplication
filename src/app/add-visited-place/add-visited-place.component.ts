import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlacesService} from '../services/places.service';
import {Place} from '../../models/place';

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
    const place: Place = {name: this.visitedPlace, created: new Date()};
    this.placesService.addVisited(place);
    this.visitedPlace = '';
  }

}
