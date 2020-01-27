import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  inputText = 'Tekst';
  maxLenght = 9;
  colorClass = 'color';
  logoUrl = '';
  isDisable = true;

  constructor() {
    setTimeout(() => {
      this.isDisable = false;
    }, 30000);
  }
    change() {
      this.inputText = 'Zmiana teksut i koloru';
      this.maxLenght = 30;
      this.colorClass = 'color2'
      this.logoUrl = 'https://angular.io/assets/images/logos/angular/angular.png';
    }
  }



