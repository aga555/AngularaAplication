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
    {name: 'Austria', flag: 'assets/austria.png'},
    {name: 'Belgia'}, {name: 'Dania'}, {name: 'Estonia'}, {name: 'Finlandia'}, {name: 'Francja'}, {name: 'Grecja'}, {name: 'Hiszpania'},
    {name: 'Czechy'}, {name: 'Islandia'}, {name: 'Liechtenstein'}, {name: 'Litwa'}, {name: 'Luksemburg'},
    {name: 'Łotwa'},
    {name: 'Malta'},
    {name: 'Holandia'}, {name: 'Norwegia'}, {name: ' Szwajcaria'}, {name: 'Szwecja'},
    {name: 'Polska'},
    {name: 'Portugalia'},
    {name: 'Słowacja'},
    {name: 'Niemcy'}, {name: 'Słowenia'}, {name: ' Węgry'}, {name: 'Włochy'}
  ];


  ngOnInit() {
  }

  add() {
    const place: Place = {name: this.newPlace, created: new Date()};
    this.placesService.add(place);
    this.newPlace = '';
  }

}
