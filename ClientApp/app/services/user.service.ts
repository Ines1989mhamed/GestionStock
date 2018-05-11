import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LoginViewModel } from '../../ViewModels/LoginViewModel';
import { UserViewModel } from '../../ViewModels/UserViewModel';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  private token: String = null;
  private tokenExpiration: Date;

  getToken() {
    return this.token;
  }
  public loginRequired(): boolean {
    // tslint:disable-next-line:triple-equals
    return this.token != null || this.tokenExpiration > new Date();
  }

  logout() 
  {
    this.token = null;
  }
  login(loginVM: LoginViewModel) {
    return (<any>this.http.post('/api/account/createtoken', loginVM))
      .map(response => {
        // tslint:disable-next-line:prefer-const
        let tokenInfo = response.json();
        this.token = tokenInfo.token;
        this.tokenExpiration = tokenInfo.expiration;
        return true;
      });
  }

  getAllUsers() {
    return this.http.get('/api/account/GetAllUsers');
  }

  // tslint:disable-next-line:typedef-whitespace
  createUser(userVM : UserViewModel): Observable<any> {
    return this.http.post('/api/account/CreateUser', userVM)
    .map(response => {
      return true;
    });
  }

  isLoggedIn()
  {
    return this.token != null;
  }
}
