import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { AppRoutingModule } from './app.routing';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeatureSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavigationComponent,
    FeatureSelectorComponent
  ]
})
export class AppModule { }
