import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { AppRoutingModule } from './app.routing';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeatureSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
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
