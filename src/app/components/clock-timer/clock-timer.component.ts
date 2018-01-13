import { Component, OnInit, ViewChild, Input, NgModule } from '@angular/core';
import { ClockTimer } from '../../models/clock-timer';
import * as Timer from 'timer.js'
import { setInterval } from 'timers';

@Component({
  selector: 'app-clock-timer',
  templateUrl: './clock-timer.component.html',
  styleUrls: ['./clock-timer.component.css']
})
export class ClockTimerComponent implements OnInit {

  DisplayState: boolean = false;
  SetState: boolean = false;
  EmptyState: boolean = true;
  StartState: boolean = true;
  StopState: boolean = false;


  clockTimer: ClockTimer;
  timer: any;
  time: number;

  constructor() { }
  ngOnInit() {
  }
  //empty > set
  addTimer() {
    this.EmptyState = false;
    this.SetState = true;
    this.DisplayState = false;
    this.clockTimer = new ClockTimer();
  }

  createTimer() {
    this.EmptyState = false;
    this.SetState = false;
    this.DisplayState = true;

    this.time = this.clockTimer.Remainingtime;

  }

  deleteTimer() {
    this.EmptyState = true;
    this.SetState = false;
    this.DisplayState = false;
  }

  stopTimer() {

    this.StartState = true;
    this.StopState = false;
    this.deleteTimer();
  }

  startTimer() {
    this.StartState = false;
    this.StopState = true;

    this.timer = new Timer({
      tick: 1,
      ontick: (ms) => {
        this.time = (ms / 1000);
      }
    });

    this.timer.start(this.clockTimer.Remainingtime)
      .on('end', function() {
        clearInterval(this.tick);
      })
  }

}
