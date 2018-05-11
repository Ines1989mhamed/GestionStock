import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LoginViewModel } from '../../ViewModels/LoginViewModel';
import { UserViewModel } from '../../ViewModels/UserViewModel';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ProduitViewModel } from '../../ViewModels/ProduitViewModel';
import { UserService } from './user.service';
import { FicheRetourViewmodel } from '../../ViewModels/FicheRetourViewModel';
import { FicheService } from './fiche.service';

@Injectable()
export class FicheRetourService extends FicheService {

  constructor( http: Http,  userService: UserService) { 
    super(http, userService);
    this.ApiName = "FicheRetour";
  } 
  
  addFicheRetour(fiche : FicheRetourViewmodel){
    return this.createFiche(fiche);
  }

}
