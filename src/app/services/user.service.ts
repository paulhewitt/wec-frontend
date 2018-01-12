import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

const uri = 'https://wec-backend.herokuapp.com';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getCookie() {
        var name = "userId=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    getAll() {
        return this.http.get<User[]>(uri+'/users');
    }

    getMe() {
        if (this.getCookie()) {
            console.log(this.getCookie())
        }
        return this.getCookie()
        //window.location.href = "http://localhost:3000/login";
    }

    // getById(id: number) {
    //     return this.http.get('/api/users/' + id);
    // }

    // create(user: User) {
    //     return this.http.post('/api/users', user);
    // }

    // update(user: User) {
    //     return this.http.put('/api/users/' + user.id, user);
    // }

    // delete(id: number) {
    //     return this.http.delete('/api/users/' + id);
    // }
}