import { Component, OnInit, ViewChild, Input, NgModule } from '@angular/core';
import { ClockTimer } from '../../models/clock-timer';
import { Timer } from 'timer.js'

@Component({
  selector: 'app-clock-timer',
  templateUrl: './clock-timer.component.html',
  styleUrls: ['./clock-timer.component.css']
})
export class ClockTimerComponent implements OnInit {

  DisplayState: boolean = false;
  SetState: boolean = false;
  EmptyState: boolean = true;

  clockTimer: ClockTimer;


  constructor() { }

  ngOnInit() {

  }
  //empty > set
  addTimer() {
    this.EmptyState = false;
    this.SetState = true;
    this.DisplayState = false;

    this.clockTimer.timer = new Timer();        
  }

  createTimer() {
    this.EmptyState = false;
    this.SetState = false;
    this.DisplayState = true;

    
  }

  deleteTimer() {
    this.EmptyState = true;
    this.SetState = false;
    this.DisplayState = false;
  }

  stopTimer() {

  }

  startTimer() {

  }

}
