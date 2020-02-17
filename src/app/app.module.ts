import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { AddPlaceComponent } from './add-place/add-place.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MenuComponent,
    ItemComponent,
    WelcomeComponent,
    HeaderComponent,
    ChildComponent,
    AddPlaceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
