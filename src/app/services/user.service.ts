import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { User } from '../models/user';

const uri = 'https://wec-backend.herokuapp.com';

@Injectable()
export class UserService {
    constructor(private http: HttpClient, private router: Router) { }

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
        if (this.getCookie() == "") {
            window.location.href=uri+'/login';
            return null
        }
        return this.http.get<User>(uri + '/users/'+this.getCookie());
    }
}