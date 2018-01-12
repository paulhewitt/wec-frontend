import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Note } from '../models/note';
import { UserService } from './user.service'

const uri = 'https://wec-backend.herokuapp.com/notes';

@Injectable()
export class NoteService {
    constructor(
        private http: HttpClient, 
        private router: Router,
        private userService: UserService) { }

    getMine() {
        const userId = this.userService.getCookie();
        return this.http.get<Note[]>(uri+"/mine?userId="+userId);
    }

    getOne(noteId) {
        const userId = this.userService.getCookie();
        return this.http.get<Note>(uri + "/"+noteId+"?userId=" + userId);
    }

    create() {
        const userId = this.userService.getCookie();
        return this.http.post<Note>(uri + "?userId=" + userId, {
            title: "test",
            body: "test2"
        });
    }

    delete(noteId) {
        const userId = this.userService.getCookie();
        return this.http.delete(uri + "/"+noteId+ "?userId=" + userId);
    }
}