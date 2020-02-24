import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Place} from '../../models/place';

@Injectable()
export class PlacesService {
  private placesList: Array<Place> = [];
  private placesVisited: Array<Place> = [];

  private placesListObservable = new BehaviorSubject<Array<Place>>([]);
  private placesVisitedListObservable = new BehaviorSubject<Array<Place>>([]);

  constructor() {
    this.placesList = [
      {name: 'Słowenia', created: new Date()}, {name: 'Włochy', created: new Date()}, {name: 'Hiszpania', created: new Date()}];
    this.placesVisited = [{name: 'Węgry', created: new Date()}, {name: 'Rumunia', created: new Date()}, {
      name: 'Bułgaria',
      created: new Date()
    }];
    this.placesListObservable.next(this.placesList);
    this.placesVisitedListObservable.next(this.placesVisited);
  }

  add(place: Place) {
    this.placesList.push(place);
    this.placesListObservable.next(this.placesList);
  }

  addVisited(place: Place) {
    this.placesVisited.push(place);
    this.placesVisitedListObservable.next(this.placesVisited);
  }

  remove(place: Place) {
    this.placesList = this.placesList.filter(e => e !== place);
    this.placesListObservable.next(this.placesList);
  }

  visited(place: Place) {
    this.placesVisited.push(place);
    this.remove(place);
    this.placesVisitedListObservable.next(this.placesVisited);
    this.placesListObservable.next(this.placesList);
  }

  removeVisited(place: Place) {
    this.placesVisited = this.placesVisited.filter(e => e !== place);
    this.placesVisitedListObservable.next(this.placesVisited);
  }

  getPlacesListObservable(): Observable<Array<Place>> {
    return this.placesListObservable.asObservable();
  }

  getPlacesVisitedListObservable(): Observable<Array<Place>> {
    return this.placesVisitedListObservable.asObservable();
  }
}
