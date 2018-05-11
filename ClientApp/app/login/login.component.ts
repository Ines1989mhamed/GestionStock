import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../../ViewModels/LoginViewModel';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginVM: LoginViewModel = new LoginViewModel();
  constructor(private userService: UserService, private router: Router) { }

  // tslint:disable-next-line:no-inferrable-types
  errorMessage: string = '';

  ngOnInit() {
  }
  seConnecter() {
    this.userService.login(this.loginVM)
    .subsribe(success => {
        if (success) {
          // if (this.userService.order.items.length == 0) {
          //   this.router.navigate(['']);
          // } else
          {
            this.router.navigate(['entreeStock']);
          }
        }
      }, err => this.errorMessage = 'Failed to login');
  }
}
