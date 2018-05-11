import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  IsLoggedIn : boolean;

constructor(public userService : UserService, public router : Router){

  this.IsLoggedIn = !this.userService.loginRequired();

  if(!this.IsLoggedIn)
  {
    this.router.navigate['/login'];
  }
}
}
