import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddComponentComponent } from './components/add-component/add-component.component';
import { NavigationComponentComponent } from './layouts/navigation-component/navigation-component.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponentComponent,
    NavigationComponentComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
