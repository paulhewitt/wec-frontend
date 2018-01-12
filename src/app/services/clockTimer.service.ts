import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserService } from "./user.service";
import { ClockTimer } from "../models/clock-timer";

const uri = 'https://wec-backend.herokuapp.com/timers';

@Injectable()
export class ClockTimerService {
    cookie;
    constructor(private http: HttpClient,
        private userService: UserService) {
            this.cookie = this.userService.getCookie();
         }

    public postTimer(clockTimer: ClockTimer): Observable<ClockTimer> {
        return this.http.post<ClockTimer>(uri+"?userId="+this.cookie, clockTimer)
    }

    public getTimer(clockTimerId: number): Observable<ClockTimer> {
        return this.http.get<ClockTimer>(uri+"/"+clockTimerId+"?userId="+this.cookie)
    }

    public getAllTimers(clockTimerId: number): Observable<ClockTimer[]> {
        return this.http.get<ClockTimer[]>(uri + "?userId=" + this.cookie)
    }

    public deleteTimer(clockTimerId: number): Observable<any>  {
        return this.http.delete<any>(uri + "/" + clockTimerId + "?userId=" + this.cookie)
    }

}