import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../services/places.service';
import {Place} from '../../models/place';

@Component({
  selector: 'app-visited-place',
  templateUrl: './visited-place.component.html',
  styleUrls: ['./visited-place.component.css']
})
export class VisitedPlaceComponent implements OnInit {

  placesVisited: Array<Place> = [];


  constructor(private placeService: PlacesService) {
    this.placeService.getPlacesVisitedListObservable().subscribe((places: Array<Place>) => {
      this.placesVisited = places;
    });
  }

  ngOnInit() {
  }


  removeVisited(place: Place) {
    this.placeService.removeVisited(place);
  }
}
