import { Component, OnInit } from '@angular/core';
import { UserViewModel } from '../../../ViewModels/UserViewModel';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService : UserService) { }

  users : Array<UserViewModel> = new Array<UserViewModel>();

  ngOnInit() {
    var getAllUsers = this.userService.getAllUsers();
    getAllUsers.subscribe(
      result => {this.users = result.json()},
      error => { console.error(error);}
    ); this.users
  }

}
