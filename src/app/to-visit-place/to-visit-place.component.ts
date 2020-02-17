import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-to-visit-place',
  templateUrl: './to-visit-place.component.html',
  styleUrls: ['./to-visit-place.component.css']
})
export class ToVisitPlaceComponent implements OnInit {
@Input()
  placesList = [];
@Output()
emitVisited = new EventEmitter<string>();
@Output()
emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  remove(place: string){
this.emitRemove.emit(place);
  }
 visited(place: string){
    this.emitVisited.emit(place)

 }
}
