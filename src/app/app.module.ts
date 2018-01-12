import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { AppRoutingModule } from './app.routing';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';
import { ComponentModule } from './components/components.module';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule
		MaterialModule
	 ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavigationComponent,
    FeatureSelectorComponent
  ]
})
export class AppModule { }
