import {Component, ElementRef, ViewChildren} from '@angular/core';
import {ChildComponent} from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  placesList = ['New York', 'Los Angeles', 'Tokyo'];

  @ViewChildren('childRef')
  childComponent: ChildComponent;

  @ViewChildren('inputText')
  input: ElementRef;

  selected(place: string): void {
    console.log(place);
  }

  add(input: HTMLInputElement) {
    this.placesList.push(input.value);
   /* this.childComponent.places = [];*/
  }
}


