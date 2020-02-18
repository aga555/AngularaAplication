import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-visited-place',
  templateUrl: './add-visited-place.component.html',
  styleUrls: ['./add-visited-place.component.css']
})
export class AddVisitedPlaceComponent implements OnInit {
  visitedPlace: string;
  @Output()
  emitPlace = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    this.emitPlace.emit(this.visitedPlace);
    this.visitedPlace = '';
  }

}
