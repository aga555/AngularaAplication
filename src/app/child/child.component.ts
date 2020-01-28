import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  places;
  @Output()
  eventPlace = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  select(place) {
    this.eventPlace.emit(place);
  }
}
