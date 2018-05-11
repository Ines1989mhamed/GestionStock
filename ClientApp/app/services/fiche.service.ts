import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LoginViewModel } from '../../ViewModels/LoginViewModel';
import { UserViewModel } from '../../ViewModels/UserViewModel';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ProduitViewModel } from '../../ViewModels/ProduitViewModel';
import { UserService } from './user.service';
import { FicheRetourViewmodel } from '../../ViewModels/FicheRetourViewModel';
import { FicheViewModel } from '../../ViewModels/FicheViewModel';

@Injectable()
export class FicheService {

  constructor(protected http: Http, protected userService: UserService) { }

  protected ApiName: string;
  /////////////// Fiche Retour
  getAllFiches() {
    return this.http.get('/api/fichesRetour', {
      headers: new Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() })
    });
  }

  createFiche(ficheVM: FicheViewModel): Observable<FicheViewModel> {
    return this.http.post('/api/'+this.ApiName +'/', ficheVM, {
      headers: new Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() })
    })
      .map(response => {
        let fiche: FicheViewModel = new FicheViewModel();
        let resultObj = response.json();
        fiche = <FicheViewModel> resultObj;
        return fiche
      });
  }

  editfiche(ficheVM: FicheViewModel): Observable<any> {
    return this.http.put('/'+this.ApiName +'/', ficheVM, {
      headers: new Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() })
    })
      .map(response => {
        return true;
      });
  }

  deleteFiche(id: string): Observable<any> {
    return this.http.delete('/api/'+this.ApiName +'/' + id,
      { headers: new Headers({ 'Authorization': 'Bearer ' + this.userService.getToken() }) })
      .map(response => {
        return true;
      });
  }

}
