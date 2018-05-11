import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './/app-routing.module';
import { EntreestockComponent } from './entreestock/entreestock.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { UserService } from './services/user.service';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductDefaultComponent } from './products/product-default/product-default.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { FournisseurComponent } from './fournisseurs/fournisseur/fournisseur.component';
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { UserDefaultComponent } from './users/user-default/user-default.component';
import { DataService } from './services/data.service';
import { TransporteurComponent } from './transporteur/transporteur.component';
import { VoitureComponent } from './voiture/voiture.component';

import { FicheSortieComponent } from './fiche-sortie/fiche-sortie.component';
import { FicheRetourComponent } from './fiche-retour/fiche-retour.component';
import { ReservationComponent } from './reservation/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    EntreestockComponent,
    HomeComponent,
    ClientComponent,
    FournisseurComponent,
    LoginComponent,
    UserComponent,
    UserListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductDefaultComponent,
    ProductAddComponent,
    UserDefaultComponent,
    TransporteurComponent,
    VoitureComponent,
    FicheSortieComponent,
    FicheRetourComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    UserService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
