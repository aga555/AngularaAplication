import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AddPlaceComponent} from './add-place/add-place.component';
import {ToVisitPlaceComponent} from './to-visit-place/to-visit-place.component';
import {VisitedPlaceComponent} from './visited-place/visited-place.component';
import {AddVisitedPlaceComponent} from './add-visited-place/add-visited-place.component';
import {PlacesService} from './services/places.service';

@NgModule({
  declarations: [
    AppComponent,
    AddPlaceComponent,
    ToVisitPlaceComponent,
    VisitedPlaceComponent,
    AddVisitedPlaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
