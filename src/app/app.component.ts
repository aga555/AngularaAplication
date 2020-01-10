import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  city = 'Warszawa';
  days = ['Poniedzialek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
  poems = new Array<Poem>();

  constructor() {
    this.poems.push(new Poem('Szymborska', 'Poezja'), new Poem('Miłosz', 'Miłość'));
  }


}

class Poem {
  constructor(public author: string, public title: string) {

  }

}
