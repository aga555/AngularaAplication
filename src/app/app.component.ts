import {Component, ElementRef, ViewChildren} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  placesList: Array<string> = [];
  placesVisited: Array<string> = [];

  add(place: string) {
    this.placesList.push(place);
  }

  remove(place: string) {
    this.placesList = this.placesList.filter(e => e !== place);
  }

  visited(place: string) {
    this.placesVisited.push(place);
    this.remove(place);
  }

  removeVisited(place: string) {
    this.placesVisited = this.placesVisited.filter(e => e !== place);
  }

}


