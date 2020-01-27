import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newPlace: string;
  placesList: Array<string> = [];
  placesVisited: Array<string> = [];
  add() {
    this.placesList.push(this.newPlace);
    this.newPlace = '';
    console.log(this.placesList);
  }

  remove(place: string) {
    this.placesList = this.placesList.filter(e => e !== place);

  }

  done(place: string) {
    this.placesVisited.push(place);
    console.log(this.placesVisited);
  }

}


