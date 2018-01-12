import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { AppRoutingModule } from './app.routing';
import { AddComponent } from './components/add-component/add-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
