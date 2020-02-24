import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class PlacesService {
  private placesList: Array<string> = [];
  private placesVisited: Array<string> = [];

  private placesListObservable = new BehaviorSubject<Array<string>>([]);
  private placesVisitedListObservable = new BehaviorSubject<Array<string>>([]);

  constructor() {
    this.placesList = ['Słowenia', 'Włochy', 'Hiszpania'];
    this.placesVisited = ['Węgry', 'Rumunia', 'Bułgaria'];
    this.placesListObservable.next(this.placesList);
    this.placesVisitedListObservable.next(this.placesVisited);
  }

  add(place: string) {
    this.placesList.push(place);
    this.placesListObservable.next(this.placesList);
  }
  addVisited(place: string) {
    this.placesVisited.push(place);
    this.placesVisitedListObservable.next(this.placesVisited);
  }

  remove(place: string) {
    this.placesList = this.placesList.filter(e => e !== place);
    this.placesListObservable.next(this.placesList);
  }

  visited(place: string) {
    this.placesVisited.push(place);
    this.remove(place);
    this.placesVisitedListObservable.next(this.placesVisited);
    this.placesListObservable.next(this.placesList);
  }

  removeVisited(place: string) {
    this.placesVisited = this.placesVisited.filter(e => e !== place);
    this.placesVisitedListObservable.next(this.placesVisited);
  }

 getPlacesListObservable(): Observable<Array<string>> {
    return this.placesListObservable.asObservable();
 }
  getPlacesVisitedListObservable(): Observable<Array<string>> {
    return this.placesVisitedListObservable.asObservable();
  }
}
