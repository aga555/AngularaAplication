import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 proffesion = 'programista';
 skill = 'Angular';
  constructor() {
  }
inputP(event){
    this.proffesion = event.target.value;
}
inputS(event){
    this.skill = event.target.value;
}
}


