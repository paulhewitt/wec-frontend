import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Todo } from '../models/todo';
import { UserService } from './user.service'

const uri = 'https://wec-backend.herokuapp.com/todos';

@Injectable()
export class TodoService {
    constructor(
        private http: HttpClient, 
        private router: Router,
        private userService: UserService) { }

    getMine() {
        const userId = this.userService.getCookie();
        return this.http.get<Todo[]>(uri+"/mine?userId="+userId);
    }

    getOne(todoId) {
        const userId = this.userService.getCookie();
        return this.http.get<Todo>(uri + "/"+todoId+"?userId=" + userId);
    }

    create(body) {
        const userId = this.userService.getCookie();
        return this.http.post<Todo>(uri + "?userId=" + userId, body);
    }

    delete(todoId) {
        const userId = this.userService.getCookie();
        return this.http.delete(uri + "/" + todoId+ "?userId=" + userId);
    }
}