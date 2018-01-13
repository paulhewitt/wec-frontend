import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserService } from "./user.service";
import { ClockTimer } from "../models/clock-timer";

@Injectable()
export class ClockTimerService {

    constructor(private http: HttpClient,
        private userService: UserService) { }

    public postTaskList(clockTimer: ClockTimer): Observable<ClockTimer> {
        return this.http.post<ClockTimer>('http://localhost:3000', clockTimer)
    }

    public getTaskList(clockTimerId: number): Observable<ClockTimer> {
        return this.http.get<ClockTimer>('http://localhost:3000')
    }

    public putTaskList(clockTimerId: number, clockTimer: ClockTimer) : Observable<ClockTimer> {
        return this.http.put<ClockTimer>('http://localhost:3000', clockTimer);   
    }

    public deleteTaskList(clockTimerId: number): Observable<any>  {
        return this.http.delete<any>('http://localhost:3000')
    }

}