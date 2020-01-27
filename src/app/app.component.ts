import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputText = 'Tekst';
  colorClass = 'color';
  isDisable = true;

  constructor() {
  }

  onFocus() {
    this.colorClass = 'color2';
  }

  onClick(event) {
    console.log(event);
  }

  onMouseMove(event) {
    console.log('x:' + event.clentX + ', y:' + event.clientY);
  }

  onPaste() {
    this.inputText = 'Nie wklejaj wpisz';

  }

  change() {
    this.isDisable = false;
  }
}


