import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user:User = new User();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getMe().subscribe(res => {
      this.user = res;
      console.log(this.user);
    })
  }

}
