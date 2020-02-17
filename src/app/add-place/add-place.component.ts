import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-place',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.css']
})
export class AddPlaceComponent implements OnInit {

  newPlace: string;
  @Output()
  emitPlace = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    this.emitPlace.emit(this.newPlace);
    this.newPlace = '';
  }

}
