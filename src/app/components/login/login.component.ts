import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../services/user.service'

@Component({
    selector: 'app-root',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    constructor(
        private userService: UserService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        console.log('eh')
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            let userId = params['userId'];
            document.cookie = "userId=" + userId;
        });
    }

}