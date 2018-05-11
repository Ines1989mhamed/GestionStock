import { Component, OnInit } from '@angular/core';

import { UserViewModel } from '../../../ViewModels/UserViewModel';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userVm: UserViewModel = new UserViewModel();

  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit() {
  }

  addUser() {
    // tslint:disable-next-line:prefer-const
    var addUser = this.userService.createUser(this.userVm);
    addUser.subscribe(() => { this.router.navigate(['/users'])}, error => console.warn(error));
    }
}
