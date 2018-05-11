import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LoginViewModel } from '../../ViewModels/LoginViewModel';
import { UserViewModel } from '../../ViewModels/UserViewModel';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ProduitViewModel } from '../../ViewModels/ProduitViewModel';
import { UserService } from './user.service';

@Injectable()
export class DataService {

  constructor(private http: Http, private userService: UserService) { }

  /////////////// Produits
  getAllProducts() {
    return this.http.get('/api/produits', {
      headers: new Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() })
    });
  }

  createProduit(produitVM: ProduitViewModel): Observable<any> {
    return this.http.post('/api/produits/', produitVM, {
      headers: new Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() })
    })
      .map(response => {
        return true;
      });
  }

  editProduit(produitVM: ProduitViewModel): Observable<any> {
    return this.http.put('/produits/', produitVM, {
      headers: new Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() })
    })
      .map(response => {
        return true;
      });
  }

  deleteProduit(Designation: string): Observable<any> {
    return this.http.delete('/api/produits/' + Designation,
      { headers: new Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() }) })
      .map(response => {
        return true;
      });
  }

}
