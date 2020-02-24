import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
  selector: 'app-to-visit-place',
  templateUrl: './to-visit-place.component.html',
  styleUrls: ['./to-visit-place.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ToVisitPlaceComponent implements OnInit {

  placesList = [];


  constructor(private placesService: PlacesService) {
    this.placesService.getPlacesListObservable().subscribe((places: Array<string>) => {
      this.placesList = places ;
    });
  }

  ngOnInit() {
  }

  remove(place: string) {
    this.placesService.remove(place);
  }

  visited(place: string) {
    this.placesService.visited(place);
  }

  getColor(): string {
    return this.placesList.length >= 5 ? 'red' : 'green';

  }
}
