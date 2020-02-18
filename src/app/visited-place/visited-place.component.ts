import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-visited-place',
  templateUrl: './visited-place.component.html',
  styleUrls: ['./visited-place.component.css']
})
export class VisitedPlaceComponent implements OnInit {
  @Input()
  placesVisited: Array<string> = [];
  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }


  remove(place: string) {
    this.emitRemove.emit(place);
  }
}
