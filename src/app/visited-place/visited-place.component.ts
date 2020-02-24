import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
  selector: 'app-visited-place',
  templateUrl: './visited-place.component.html',
  styleUrls: ['./visited-place.component.css']
})
export class VisitedPlaceComponent implements OnInit {

  placesVisited: Array<string> = [];


  constructor(private placeService: PlacesService) {
    this.placeService.getPlacesVisitedListObservable().subscribe((places: Array<string>) => {
      this.placesVisited = places;
    });
  }

  ngOnInit() {
  }


  removeVisited(place: string) {
    this.placeService.removeVisited(place);
  }
}
