import {Component, OnInit} from '@angular/core';
import {PlacesService} from '../services/places.service';
import {Place} from '../../models/place';


@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {

  newPlace: string;


  constructor(private placesService: PlacesService) {
  }

  countries: Place[] = [
    {name: 'Poland'},
    {name: 'Germany'},
    {name: 'Great Britain'}
  ];

  ngOnInit() {
  }

  add() {
    const place: Place = {name: this.newPlace, created: new Date()};
    this.placesService.add(place);
    this.newPlace = '';
  }

}
