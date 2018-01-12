import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { UserService } from "./user.service";
import { Notes } from "../models/notes";

@Injectable()
export class NotesService {

    constructor(private http: HttpClient,
        private userService: UserService) { }

    public postNotes(notes: Notes): Observable<Notes> {
        return this.http.post<Notes>('http://localhost:3000', notes)
    }

    public getNotes(notesId: number): Observable<Notes> {
        return this.http.get<Notes>('http://localhost:3000')
    }

    public putNotes(notesId: number, notes: Notes) : Observable<Notes> {
        return this.http.put<Notes>('http://localhost:3000', notes);   
    }

    public deleteNotes(notesId: number): Observable<any>  {
        return this.http.delete<any>('http://localhost:3000')
    }

}