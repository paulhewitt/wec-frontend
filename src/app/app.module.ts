import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService} from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';

import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'home',
    component: FeatureSelectorComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeatureSelectorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    UserService
	 ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
