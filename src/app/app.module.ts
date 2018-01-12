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
import { ComponentModule } from './components/components.module';
import { ClockTimerComponent } from './components/clock-timer/clock-timer.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'home',
    component: FeatureSelectorComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'timer',
    component: ClockTimerComponent
  },
  {
    path: 'tasklist',
    component: TaskListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeatureSelectorComponent,
    LoginComponent,
    ClockTimerComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    UserService
	 ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
