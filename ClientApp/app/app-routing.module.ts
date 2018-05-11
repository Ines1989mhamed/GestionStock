import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EntreestockComponent } from './entreestock/entreestock.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserComponent } from './users/user/user.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDefaultComponent } from './products/product-default/product-default.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import { UserDefaultComponent } from './users/user-default/user-default.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'entreeStock', component: EntreestockComponent },
  { path: 'users', component: UserDefaultComponent, children : [
    {path : '', component: UserListComponent},
    {path : 'add', component: UserComponent}
  ] }, { path: 'products', component: ProductDefaultComponent, children : [
        {path : '', component: ProductListComponent},
        {path : ':id', component: ProductDetailsComponent},
        {path : 'add', component: ProductAddComponent},
      ]},
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
