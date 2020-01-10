import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  date = new Date();
  city = 'Warszawa';
  poem = new Poem('Szymborska', 'Niektórzy lubią poezję');

  showPoem() {
    return'Wiersz to ' + this.poem.title + ' napisany przez noblistkę ' + this.poem.author;
  }
}

class Poem {
  constructor(public author: string, public title: string) {

  }

}
