import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlacesService} from '../services/places.service';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {

  newPlace: string;


  constructor(private placesService: PlacesService) {
  }

  ngOnInit() {
  }

  add() {
    this.placesService.add(this.newPlace);
    this.newPlace = '';
  }

}
