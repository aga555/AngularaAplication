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
    {name: 'Great Britain'},
    {name: ' Austria'},
    {name: 'Belgium'},
    {name: ' Bulgaria'},
    {name: 'Croatia'},
    {name: 'Cyprus'},
    {name: ' Czech Republic'},
    {name: ' Denmark'},
    {name: 'Estonia'},
    {name: ' Finland'}, {name: 'France'},
    {name: 'Germany'},
    {name: ' Greece'}, {name: 'Hungary'}, {name: ' Ireland'}, {name: ' Italy'},
    {name: 'Latvia'}, {name: ' Lithuania'}, {name: 'Luxembourg'}, {name: ' Malta'}, {name: 'Netherlands'}, {name: 'Poland'},
    {name: 'Portugal'},
    {name: 'Romania'}, {name: ' Slovakia'}, {name: 'Slovenia'}, {name: ' Spain'}, {name: 'Sweden'}, {name: 'Tirana'},
    {name: 'Andorra'},
    {name: ' Belarus'},
    {name: 'Bosnia and Herzegovina '},
    {name: 'Montenegro'},
    {name: 'Iceland '}, {name: 'Kazakhstan'}, {name: ' Liechtenstein'}, {name: 'Macedonia'}, {name: 'Monaco'}, {name: 'Norway'},
    {name: 'Russia '}, {name: 'Serbia '},
    {name: 'Switzerland'}, {name: 'San Marino'}, {name: 'Ukraine'}, {name: 'Vatican'}
  ];


  ngOnInit() {
  }

  add() {
    const place: Place = {name: this.newPlace, created: new Date()};
    this.placesService.add(place);
    this.newPlace = '';
  }

}
