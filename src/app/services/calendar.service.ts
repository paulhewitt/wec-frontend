import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserService } from "./user.service";
import { Calendar } from "../models/calendar";

@Injectable()
export class CalendarService {

    constructor(private http: HttpClient,
        private userService: UserService) { }

    public postCalendar(calendar: Calendar): Observable<Calendar> {
        return this.http.post<Calendar>('http://localhost:3000', calendar)
    }

    public getCalendar(calendarId: number): Observable<Calendar> {
        return this.http.get<Calendar>('http://localhost:3000')
    }

    public putCalendar(calendarId: number, calendar: Calendar) : Observable<Calendar> {
        return this.http.put<Calendar>('http://localhost:3000', calendar);   
    }

    public deleteCalendar(calendarId: number): Observable<any>  {
        return this.http.delete<any>('http://localhost:3000')
    }

}