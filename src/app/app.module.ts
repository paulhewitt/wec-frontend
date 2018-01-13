import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService} from './services/user.service';
import { NoteService } from './services/note.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { FeatureSelectorComponent } from './components/feature-selector/feature-selector.component';

import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material.module';
import { ClockTimerComponent } from './components/clock-timer/clock-timer.component';
import { TaskListComponent } from './components/task-list/task-list.component';

import { NoteComponent } from './components/note/note.component'
import { NewNoteComponent } from './components/note/new-note/new-note.component';
import { NoteListComponent } from './components/note-list/note-list.component';

import { TodoService } from './services/todo.service';
import { TodoComponent } from './components/todo/todo.component'
import { NewTodoComponent } from './components/todo/new-todo/new-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { ClockTimerService } from './services/clockTimer.service';
import { CalendarService } from './services/calendar.service';
import { TaskListService } from './services/taskList.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
    path: 'notes',
    component: NoteListComponent
  },
  {
    path: 'todos',
    component: TodoListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeatureSelectorComponent,
    LoginComponent,
    ClockTimerComponent,
    NoteComponent,
    NewNoteComponent,
    NoteListComponent,
    TodoComponent,
    NewTodoComponent,
    TodoListComponent,
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
    UserService,
    NoteService,
    TodoService,
    TaskListService,
    ClockTimerService,
    CalendarService
	 ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
