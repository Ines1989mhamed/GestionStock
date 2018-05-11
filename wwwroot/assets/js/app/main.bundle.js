webpackJsonp(["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/ViewModels/LoginViewModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginViewModel; });
var LoginViewModel = /** @class */ (function () {
    function LoginViewModel() {
        this.Username = '';
        this.Password = '';
        this.RememberMe = '';
    }
    return LoginViewModel;
}());



/***/ }),

/***/ "./ClientApp/ViewModels/ProduitViewModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProduitViewModel; });
var ProduitViewModel = /** @class */ (function () {
    function ProduitViewModel() {
        this.Designation = '';
    }
    return ProduitViewModel;
}());



/***/ }),

/***/ "./ClientApp/ViewModels/UserViewModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserViewModel; });
var UserViewModel = /** @class */ (function () {
    function UserViewModel() {
    }
    return UserViewModel;
}());



/***/ }),

/***/ "./ClientApp/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entreestock_entreestock_component__ = __webpack_require__("./ClientApp/app/entreestock/entreestock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./ClientApp/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./ClientApp/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_user_list_user_list_component__ = __webpack_require__("./ClientApp/app/users/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__users_user_user_component__ = __webpack_require__("./ClientApp/app/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_product_list_product_list_component__ = __webpack_require__("./ClientApp/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_product_default_product_default_component__ = __webpack_require__("./ClientApp/app/products/product-default/product-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__products_product_details_product_details_component__ = __webpack_require__("./ClientApp/app/products/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_product_add_product_add_component__ = __webpack_require__("./ClientApp/app/products/product-add/product-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__users_user_default_user_default_component__ = __webpack_require__("./ClientApp/app/users/user-default/user-default.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'entreeStock', component: __WEBPACK_IMPORTED_MODULE_3__entreestock_entreestock_component__["a" /* EntreestockComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_12__users_user_default_user_default_component__["a" /* UserDefaultComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_6__users_user_list_user_list_component__["a" /* UserListComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_7__users_user_user_component__["a" /* UserComponent */] }
        ] }, { path: 'products', component: __WEBPACK_IMPORTED_MODULE_9__products_product_default_product_default_component__["a" /* ProductDefaultComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__products_product_list_product_list_component__["a" /* ProductListComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_10__products_product_details_product_details_component__["a" /* ProductDetailsComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_11__products_product_add_product_add_component__["a" /* ProductAddComponent */] },
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n  <nav class=\"navbar navbar-default navbar-cls-top \" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n\n      <a class=\"navbar-brand\" href=\"index.html\" text=\"tim\">PPT admin</a>\n    </div>\n    <div style=\"color: white;\npadding: 15px 50px 5px 50px;\nfloat: right;\nfont-size: 16px;\"> Dernier accès :\n      <a *ngIf=\"!IsLoggedIn\" routerLink=\"/login\" class=\"btn btn-danger square-btn-adjust\">Se connecter</a>\n      <a *ngIf=\"IsLoggedIn\" (click)=\"userService.logout()\" class=\"btn btn-danger square-btn-adjust\">Se déconnecter</a>\n    </div>\n  </nav>\n  <!-- /. NAV TOP  -->\n  <nav class=\"navbar-default navbar-side\" role=\"navigation\" *ngIf=\"IsLoggedIn\">\n    <div class=\"sidebar-collapse\">\n      <ul class=\"nav\" id=\"main-menu\">\n        <li class=\"text-center\">\n          <img src=\"/assets/img/find_user.png\" class=\"user-image img-responsive\" />\n        </li>\n\n\n        <li>\n          <a routerLink=\"/\">\n            <i class=\"fa fa-home fa-2x\"></i> Accueil</a>\n        </li>\n        <li>\n          <a href=\"#\">\n            <i class=\"fa fa-file-pdf-o fa-2x\"></i>Fiches\n            <span class=\"fa arrow\"></span>\n          </a>\n          <ul class=\"nav nav-second-level\">\n            <li>\n              <a href=\"#\">Fiches d'entrée</a>\n            </li>\n            <li>\n              <a href=\"#\">Fiches de sortie</a>\n            </li>\n            <li>\n              <a href=\"#\">Fiches de retour</a>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <a routerLink=\"/users\">\n            <i class=\"fa fa-users fa-2x\"></i>Utilisateurs</a>\n        </li>\n        <li>\n          <a routerLink=\"/products\">\n            <i class=\"fa fa-shopping-cart fa-2x\"></i>Produits</a>\n        </li>\n        <li>\n          <a href=\"table.html\">\n            <i class=\"fa fa-user fa-2x\"></i>Transporteurs</a>\n        </li>\n        <li>\n          <a href=\"form.html\">\n            <i class=\"fa fa-car fa-2x\"></i> Voitures </a>\n        </li>\n        <li>\n          <a href=\"login.html\">\n            <i class=\"fa fa-bolt fa-2x\"></i> Clients</a>\n        </li>\n      </ul>\n    </div>\n\n  </nav>\n  <!-- /. NAV SIDE  -->\n  <div id=\"page-wrapper\">\n    <div id=\"page-inner\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <router-outlet></router-outlet>\n\n        </div>\n      </div>\n      <!-- /. ROW  -->\n      <hr />\n\n    </div>\n    <!-- /. PAGE INNER  -->\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./ClientApp/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'app';
        this.IsLoggedIn = !this.userService.loginRequired();
        if (!this.IsLoggedIn) {
            this.router.navigate['/login'];
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./ClientApp/app/app.component.html"),
            styles: [__webpack_require__("./ClientApp/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./ClientApp/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entreestock_entreestock_component__ = __webpack_require__("./ClientApp/app/entreestock/entreestock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./ClientApp/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__client_client_component__ = __webpack_require__("./ClientApp/app/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./ClientApp/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_user_service__ = __webpack_require__("./ClientApp/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__products_product_details_product_details_component__ = __webpack_require__("./ClientApp/app/products/product-details/product-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__products_product_default_product_default_component__ = __webpack_require__("./ClientApp/app/products/product-default/product-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_product_add_product_add_component__ = __webpack_require__("./ClientApp/app/products/product-add/product-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__fournisseurs_fournisseur_fournisseur_component__ = __webpack_require__("./ClientApp/app/fournisseurs/fournisseur/fournisseur.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__users_user_user_component__ = __webpack_require__("./ClientApp/app/users/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users_user_list_user_list_component__ = __webpack_require__("./ClientApp/app/users/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__products_product_list_product_list_component__ = __webpack_require__("./ClientApp/app/products/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_user_default_user_default_component__ = __webpack_require__("./ClientApp/app/users/user-default/user-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_data_service__ = __webpack_require__("./ClientApp/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__transporteur_transporteur_component__ = __webpack_require__("./ClientApp/app/transporteur/transporteur.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__voiture_voiture_component__ = __webpack_require__("./ClientApp/app/voiture/voiture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__fiche_sortie_fiche_sortie_component__ = __webpack_require__("./ClientApp/app/fiche-sortie/fiche-sortie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__fiche_retour_fiche_retour_component__ = __webpack_require__("./ClientApp/app/fiche-retour/fiche-retour.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reservation_reservation_component__ = __webpack_require__("./ClientApp/app/reservation/reservation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__entreestock_entreestock_component__["a" /* EntreestockComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__client_client_component__["a" /* ClientComponent */],
                __WEBPACK_IMPORTED_MODULE_14__fournisseurs_fournisseur_fournisseur_component__["a" /* FournisseurComponent */],
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_15__users_user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_16__users_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__products_product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__products_product_details_product_details_component__["a" /* ProductDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__products_product_default_product_default_component__["a" /* ProductDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_13__products_product_add_product_add_component__["a" /* ProductAddComponent */],
                __WEBPACK_IMPORTED_MODULE_18__users_user_default_user_default_component__["a" /* UserDefaultComponent */],
                __WEBPACK_IMPORTED_MODULE_20__transporteur_transporteur_component__["a" /* TransporteurComponent */],
                __WEBPACK_IMPORTED_MODULE_21__voiture_voiture_component__["a" /* VoitureComponent */],
                __WEBPACK_IMPORTED_MODULE_22__fiche_sortie_fiche_sortie_component__["a" /* FicheSortieComponent */],
                __WEBPACK_IMPORTED_MODULE_23__fiche_retour_fiche_retour_component__["a" /* FicheRetourComponent */],
                __WEBPACK_IMPORTED_MODULE_24__reservation_reservation_component__["a" /* ReservationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_19__services_data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/client/client.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n   <h2>Gestion des Clients</h2>   \n      <h5>Ici ! Vous pouvez ajouter, modifier ou supprimer les listes des clients ! </h5>\n  </div>\n</div>\n\n<form role=\"form\">\n  <div class=\"form-group\">\n    <input class=\"form-control\" placeholder=\"Nom du client\" />\n  </div>\n  <div class=\"form-group\">\n    <input class=\"form-control\" placeholder=\"Prénom du client\" />\n  </div>\n  <div class=\"form-group\">\n    <input class=\"form-control\" placeholder=\"Adresse du client\" />\n  </div>\n  <div class=\"form-group\">\n    <input class=\"form-control\" placeholder=\"Numero de son téléphone\" />\n  </div>\n  <button type=\"submit\" class=\"btn btn-default\">Enregister</button>\n  <button type=\"reset\" class=\"btn btn-primary\">Annuler</button>\n</form>\n\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n       Liste des clients\n  </div>\n  <div class=\"panel-body\">\n      <div class=\"table-responsive\">\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"dataTables_length\" id=\"dataTables-example_length\">\n                <label><select name=\"dataTables-example_length\" aria-controls=\"dataTables-example\" class=\"form-control input-sm\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option></select> Enregistrements par page</label>\n              </div>\n            </div>\n            <div class=\"col-sm-6\">\n            <div id=\"dataTables-example_filter\" class=\"dataTables_filter\">\n              <label>Rechercher:<input type=\"search\" class=\"form-control input-sm\" aria-controls=\"dataTables-example\"></label>\n            </div>\n          </div>\n        </div>\n          <table class=\"table table-striped table-bordered table-hover\" id=\"dataTables-example\">\n              <thead>\n                  <tr>\n                      <th>Nom</th>\n                      <th>Prenom</th>\n                      <th>Adresse</th>\n                      <th>Telephone</th>\n                      <th>Action</th>\n                  </tr>\n              </thead>\n              <tbody>\n                <tr class=\"odd gradeX\"></tr>\n              </tbody>\n          </table>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./ClientApp/app/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client',
            template: __webpack_require__("./ClientApp/app/client/client.component.html"),
            styles: [__webpack_require__("./ClientApp/app/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./ClientApp/app/entreestock/entreestock.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/entreestock/entreestock.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  entreestock works!\n</p>\n\n<a routerLink=\"/entreeStock\" class=\"btn btn-primary\">Entree stock</a>"

/***/ }),

/***/ "./ClientApp/app/entreestock/entreestock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntreestockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EntreestockComponent = /** @class */ (function () {
    function EntreestockComponent() {
    }
    EntreestockComponent.prototype.ngOnInit = function () {
    };
    EntreestockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-entreestock',
            template: __webpack_require__("./ClientApp/app/entreestock/entreestock.component.html"),
            styles: [__webpack_require__("./ClientApp/app/entreestock/entreestock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EntreestockComponent);
    return EntreestockComponent;
}());



/***/ }),

/***/ "./ClientApp/app/fiche-retour/fiche-retour.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/fiche-retour/fiche-retour.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n      <!-- Advanced Tables -->\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n               Gestion des fiches de Retour\n          </div>\n          <div class=\"panel-body\">\n              <button routerLink=\"add\" class=\"btn btn-primary\">Ajouter </button>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-bordered table-hover\" id=\"dataTables-example\">\n                      <thead>\n                          <tr>\n                              <th>N° Fiche</th>\n                              <th>Employee</th>\n                              <th>Client</th>\n                              \n                              <th>Date d'entree</th>\n                              <th>Date de retour</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr class=\"odd gradeX\" *ngFor=\"let produit of produits\" >\n                              <td> </td>\n                              <td> </td>\n                              <td></td>\n                              <td> </td>\n                              <td></td>\n                              <td>\n                                <button class=\"btn btn-primary\" (click)=\"\"> <i class=\"fa fa-edit\"></i>Détails</button>\n                                <button class=\"btn btn-danger\"(click)=\"\"> <i class=\"fa fa-trash\"></i>Supprimer</button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n              \n          </div>\n      </div>\n      <!--End Advanced Tables -->\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/fiche-retour/fiche-retour.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FicheRetourComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FicheRetourComponent = /** @class */ (function () {
    function FicheRetourComponent() {
    }
    FicheRetourComponent.prototype.ngOnInit = function () {
    };
    FicheRetourComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fiche-retour',
            template: __webpack_require__("./ClientApp/app/fiche-retour/fiche-retour.component.html"),
            styles: [__webpack_require__("./ClientApp/app/fiche-retour/fiche-retour.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FicheRetourComponent);
    return FicheRetourComponent;
}());



/***/ }),

/***/ "./ClientApp/app/fiche-sortie/fiche-sortie.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/fiche-sortie/fiche-sortie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n      <!-- Advanced Tables -->\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n               Gestion des fiches de sortie\n          </div>\n          <div class=\"panel-body\">\n              <button routerLink=\"add\" class=\"btn btn-primary\">Ajouter </button>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-bordered table-hover\" id=\"dataTables-example\">\n                      <thead>\n                          <tr>\n                              <th>N° Fiche</th>\n                              <th>Employee</th>\n                              <th>Client</th>\n                              \n                              <th>Date Sortie</th>\n                              <th>Date de retour</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr class=\"odd gradeX\" *ngFor=\"let produit of produits\" >\n                              <td> </td>\n                              <td> </td>\n                              <td></td>\n                              <td> </td>\n                              <td></td>\n                              <td>\n                                <button class=\"btn btn-primary\" (click)=\"\"> <i class=\"fa fa-edit\"></i>Détails</button>\n                                <button class=\"btn btn-danger\"(click)=\"\"> <i class=\"fa fa-trash\"></i>Supprimer</button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n              \n          </div>\n      </div>\n      <!--End Advanced Tables -->\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/fiche-sortie/fiche-sortie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FicheSortieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FicheSortieComponent = /** @class */ (function () {
    function FicheSortieComponent() {
    }
    FicheSortieComponent.prototype.ngOnInit = function () {
    };
    FicheSortieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fiche-sortie',
            template: __webpack_require__("./ClientApp/app/fiche-sortie/fiche-sortie.component.html"),
            styles: [__webpack_require__("./ClientApp/app/fiche-sortie/fiche-sortie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FicheSortieComponent);
    return FicheSortieComponent;
}());



/***/ }),

/***/ "./ClientApp/app/fournisseurs/fournisseur/fournisseur.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/fournisseurs/fournisseur/fournisseur.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  fournisseur works!\n</p>\n<app-fournisseur></app-fournisseur>\n"

/***/ }),

/***/ "./ClientApp/app/fournisseurs/fournisseur/fournisseur.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FournisseurComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FournisseurComponent = /** @class */ (function () {
    function FournisseurComponent() {
    }
    FournisseurComponent.prototype.ngOnInit = function () {
    };
    FournisseurComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fournisseur',
            template: __webpack_require__("./ClientApp/app/fournisseurs/fournisseur/fournisseur.component.html"),
            styles: [__webpack_require__("./ClientApp/app/fournisseurs/fournisseur/fournisseur.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FournisseurComponent);
    return FournisseurComponent;
}());



/***/ }),

/***/ "./ClientApp/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-12\">\n        <h2>Bienvenue Admin</h2>\n        <h4>Ici la liste des nouvelles reservations de vos clients, bon travail ! </h4>\n\n    </div>\n</hr>\n</div>\n<!-- /. ROW  -->\n\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        Table de reservations\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"table-responsive\">\n            <div id=\"dataTables-example_wrapper\" class=\"dataTables_wrapper form-inline\" role=\"grid\">\n\n            </div>\n            <table class=\"table table-striped table-bordered table-hover dataTable no-footer\" id=\"dataTables-example\" aria-describedby=\"dataTables-example_info\">\n                <thead>\n                    <tr>\n                        <th>Client</th>\n                        <th>Produit</th>\n                        <th>Quantité</th>\n                        <th>Date debut</th>\n                        <th>Date fin</th>\n                        <th>Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr class=\"odd gradeX\" *ngFor=\"let reservation of reservations\">\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td>\n                            <a href=\"#\" class=\"btn btn-primary\">Accepter</a>\n                            <a href=\"#\" class=\"btn btn-danger\">Refuser</a>\n                        </td>\n\n                    </tr>\n\n                </tbody>\n            </table>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./ClientApp/app/home/home.component.html"),
            styles: [__webpack_require__("./ClientApp/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./ClientApp/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-center \">\n    <div class=\"col-md-12\">\n      <br />\n      <br />\n      <h2>Authentification</h2>\n\n      <h5>( Login yourself to get access )</h5>\n      <br />\n    </div>\n  </div>\n  <div class=\"row \">\n    <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <strong> Entrer les détails pour se connecter! </strong>\n        </div>\n        <div class=\"panel-body\">\n          <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\n          <form (submit)=\"seConnecter()\" #theForm=\"ngForm\" novalidate>\n            <br />\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-tag\"></i>\n              </span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Identifiant\" id=\"username\" name=\"username\" [(ngModel)]=\"loginVM.Username\"  required #username=\"ngModel\" />\n              <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\" >L'identifiant est requis!</div>\n            </div>\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-lock\"></i>\n              </span>\n              <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"loginVM.Password\" placeholder=\"Mot de passe\"  required #password=\"ngModel\" />\n              <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Le mot de passe est requis!</div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"checkbox-inline\">\n                <input type=\"checkbox\" /> Se souvenir de moi\n              </label>\n              <span class=\"pull-right\">\n                <a href=\"#\">Mot de passe oublié ? </a>\n              </span>\n            </div>\n            <button class=\"btn btn-primary \" (click)=\"seConnecter()\" [disabled]=\"theForm.invalid\">Se connecter</button>\n              <!-- <hr /> Non enregistré ?\n              <a (click)=\"goBack()\" >Cliquer ici </a> -->\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModels_LoginViewModel__ = __webpack_require__("./ClientApp/ViewModels/LoginViewModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./ClientApp/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.loginVM = new __WEBPACK_IMPORTED_MODULE_1__ViewModels_LoginViewModel__["a" /* LoginViewModel */]();
        // tslint:disable-next-line:no-inferrable-types
        this.errorMessage = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.seConnecter = function () {
        var _this = this;
        this.userService.login(this.loginVM)
            .subsribe(function (success) {
            if (success) {
                // if (this.userService.order.items.length == 0) {
                //   this.router.navigate(['']);
                // } else
                {
                    _this.router.navigate(['entreeStock']);
                }
            }
        }, function (err) { return _this.errorMessage = 'Failed to login'; });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./ClientApp/app/login/login.component.html"),
            styles: [__webpack_require__("./ClientApp/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./ClientApp/app/products/product-add/product-add.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/products/product-add/product-add.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Ajout de produit!\n</p>\n\n<form ng-submit=\"valider()\" novalidate>\n\n  <div class=\"form-group\">\n    <label for=\"codeAbarr\">Désignation</label>\n    <input type=\"text\" name=\"codeAbarr\" id=\"codeAbarr\" [(ngModel)]=\"produit.Designation\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"designation\">Quantite en Stock</label>\n    <input type=\"number\" name=\"designation\" id=\"designation\" [(ngModel)]=\"produit.Quantite\">\n  </div>\n\n  <div class=\"form-buttons\">\n    <button class=\"btn btn-primary\" (click)=\"valider()\">valider</button>\n    <button class=\"btn btn-primary\" (click)=\"goBack()\">Annuler</button>\n  </div>\n\n</form>"

/***/ }),

/***/ "./ClientApp/app/products/product-add/product-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModels_ProduitViewModel__ = __webpack_require__("./ClientApp/ViewModels/ProduitViewModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_service__ = __webpack_require__("./ClientApp/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductAddComponent = /** @class */ (function () {
    function ProductAddComponent(data, router) {
        this.data = data;
        this.router = router;
        this.produit = new __WEBPACK_IMPORTED_MODULE_2__ViewModels_ProduitViewModel__["a" /* ProduitViewModel */]();
    }
    ProductAddComponent.prototype.valider = function () {
        var _this = this;
        if (this.produit && this.produit.Designation && this.produit.Designation) {
            // tslint:disable-next-line:prefer-const
            var createProduct = this.data.createProduit(this.produit);
            createProduct.subscribe(function () { _this.router.navigate(['/produits']); }, function (err) { console.error('Echec de l"ajout du produit!'); });
            ;
        }
    };
    ProductAddComponent.prototype.ngOnInit = function () {
    };
    ProductAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-add',
            template: __webpack_require__("./ClientApp/app/products/product-add/product-add.component.html"),
            styles: [__webpack_require__("./ClientApp/app/products/product-add/product-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./ClientApp/app/products/product-default/product-default.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/products/product-default/product-default.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Gestion des produits\n</p>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/products/product-default/product-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDefaultComponent = /** @class */ (function () {
    function ProductDefaultComponent() {
    }
    ProductDefaultComponent.prototype.ngOnInit = function () {
    };
    ProductDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-default',
            template: __webpack_require__("./ClientApp/app/products/product-default/product-default.component.html"),
            styles: [__webpack_require__("./ClientApp/app/products/product-default/product-default.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDefaultComponent);
    return ProductDefaultComponent;
}());



/***/ }),

/***/ "./ClientApp/app/products/product-details/product-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/products/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  product-details works!\n</p>\n"

/***/ }),

/***/ "./ClientApp/app/products/product-details/product-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent() {
    }
    ProductDetailsComponent.prototype.ngOnInit = function () {
    };
    ProductDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-details',
            template: __webpack_require__("./ClientApp/app/products/product-details/product-details.component.html"),
            styles: [__webpack_require__("./ClientApp/app/products/product-details/product-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/products/product-list/product-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/products/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n      <!-- Advanced Tables -->\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n               Gestion des produits\n          </div>\n          <div class=\"panel-body\">\n              <button routerLink=\"add\" class=\"btn btn-primary\">Ajouter </button>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-bordered table-hover\" id=\"dataTables-example\">\n                      <thead>\n                          <tr>\n                              <th>Désignation</th>\n                              <th>Quantité en stock</th>\n                              <td>Actions</td>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr class=\"odd gradeX\" *ngFor=\"let produit of produits\" >\n                              <td>{{produit.Designation}}</td>\n                              <td>{{produit.Quantite}}</td>\n                              <td>.\n                                <button class=\"btn btn-primary\" (click)=\"edit(produit.CodeABarre)\"> <i class=\"fa fa-edit\"></i></button>\n                                <button class=\"btn btn-danger\"(click)=\"delete(produit.CodeABarre)\"> <i class=\"fa fa-trash\"></i></button>\n                              </td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n              \n          </div>\n      </div>\n      <!--End Advanced Tables -->\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/products/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("./ClientApp/app/products/product-list/product-list.component.html"),
            styles: [__webpack_require__("./ClientApp/app/products/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./ClientApp/app/reservation/reservation.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/reservation/reservation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h2>Bienvenue Admin</h2>\n    <h4>Ici la liste des nouvelles reservations de vos clients, bon travail ! </h4>\n\n  </div>\n  </hr>\n</div>\n<!-- /. ROW  -->\n<hr />\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">\n    Table de reservations\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"table-responsive\">\n      <div id=\"dataTables-example_wrapper\" class=\"dataTables_wrapper form-inline\" role=\"grid\">\n\n      </div>\n      <table class=\"table table-striped table-bordered table-hover dataTable no-footer\" id=\"dataTables-example\" aria-describedby=\"dataTables-example_info\">\n        <thead>\n          <tr>\n            <th>Client</th>\n            <th>Produit</th>\n            <th>Date debut</th>\n            <th>Date fin</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr class=\"odd gradeX\" *ngFor=\"let reservation of reservations\">\n            <td></td>\n            <td></td>\n            <td></td>\n            <td></td>\n            <td>\n              <a href=\"#\" class=\"btn btn-primary\">Accepter</a>\n              <a href=\"#\" class=\"btn btn-danger\">Refuser</a>\n            </td>\n\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/reservation/reservation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReservationComponent = /** @class */ (function () {
    function ReservationComponent() {
    }
    ReservationComponent.prototype.ngOnInit = function () {
    };
    ReservationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reservation',
            template: __webpack_require__("./ClientApp/app/reservation/reservation.component.html"),
            styles: [__webpack_require__("./ClientApp/app/reservation/reservation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReservationComponent);
    return ReservationComponent;
}());



/***/ }),

/***/ "./ClientApp/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./ClientApp/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = /** @class */ (function () {
    function DataService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    /////////////// Produits
    DataService.prototype.getAllProducts = function () {
        return this.http.get('/api/produits', {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.userService.getToken() })
        });
    };
    DataService.prototype.createProduit = function (produitVM) {
        return this.http.post('/api/produits/', produitVM, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.userService.getToken() })
        })
            .map(function (response) {
            return true;
        });
    };
    DataService.prototype.editProduit = function (produitVM) {
        return this.http.put('/produits/', produitVM, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.userService.getToken() })
        })
            .map(function (response) {
            return true;
        });
    };
    DataService.prototype.deleteProduit = function (Designation) {
        return this.http.delete('/api/produits/' + Designation, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Authorization': 'Bearer ' + this.userService.getToken() }) })
            .map(function (response) {
            return true;
        });
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./ClientApp/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.token = null;
    }
    UserService.prototype.getToken = function () {
        return this.token;
    };
    UserService.prototype.loginRequired = function () {
        // tslint:disable-next-line:triple-equals
        return this.token != null || this.tokenExpiration > new Date();
    };
    UserService.prototype.logout = function () {
        this.token = null;
    };
    UserService.prototype.login = function (loginVM) {
        var _this = this;
        return this.http.post('/api/account/createtoken', loginVM)
            .map(function (response) {
            // tslint:disable-next-line:prefer-const
            var tokenInfo = response.json();
            _this.token = tokenInfo.token;
            _this.tokenExpiration = tokenInfo.expiration;
            return true;
        });
    };
    UserService.prototype.getAllUsers = function () {
        return this.http.get('/api/account/GetAllUsers');
    };
    // tslint:disable-next-line:typedef-whitespace
    UserService.prototype.createUser = function (userVM) {
        return this.http.post('/api/account/CreateUser', userVM)
            .map(function (response) {
            return true;
        });
    };
    UserService.prototype.isLoggedIn = function () {
        return this.token != null;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./ClientApp/app/transporteur/transporteur.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/transporteur/transporteur.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  transporteur works!\n</p>\n"

/***/ }),

/***/ "./ClientApp/app/transporteur/transporteur.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransporteurComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TransporteurComponent = /** @class */ (function () {
    function TransporteurComponent() {
    }
    TransporteurComponent.prototype.ngOnInit = function () {
    };
    TransporteurComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transporteur',
            template: __webpack_require__("./ClientApp/app/transporteur/transporteur.component.html"),
            styles: [__webpack_require__("./ClientApp/app/transporteur/transporteur.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TransporteurComponent);
    return TransporteurComponent;
}());



/***/ }),

/***/ "./ClientApp/app/users/user-default/user-default.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/users/user-default/user-default.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Gestion des utilisateurs!\n</p>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/users/user-default/user-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDefaultComponent = /** @class */ (function () {
    function UserDefaultComponent() {
    }
    UserDefaultComponent.prototype.ngOnInit = function () {
    };
    UserDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-default',
            template: __webpack_require__("./ClientApp/app/users/user-default/user-default.component.html"),
            styles: [__webpack_require__("./ClientApp/app/users/user-default/user-default.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDefaultComponent);
    return UserDefaultComponent;
}());



/***/ }),

/***/ "./ClientApp/app/users/user-list/user-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/users/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n      <!-- Advanced Tables -->\n      <div class=\"panel panel-default\">\n          <div class=\"panel-heading\">\n               Gestion des utilisateurs\n          </div>\n          <div class=\"panel-body\">\n              <button routerLink=\"add\" class=\"btn btn-primary\">Ajouter </button>\n              <div class=\"table-responsive\">\n                  <table class=\"table table-striped table-bordered table-hover\" id=\"dataTables-example\">\n                      <thead>\n                          <tr>\n                              <th>Email</th>\n                              <th>Nom</th>\n                              <th>Prénom</th>\n                              <!-- <th>Fonction</th> -->\n                              <th>Action</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr class=\"odd gradeX\" *ngFor=\"let user of users\" >\n                              <td>{{user.email}}</td>\n                              <td>{{user.firstname}}</td>\n                              <td>{{user.lastname}}</td>\n                              <!-- <td>{{user.UserType == 1 ? \"Employé\" : \"Administrateur\" }}</td> -->\n                              <td><a > <i class=\"fa fa-edit\"></i> Editer</a><a > <i class=\"fa fa-trash\"></i> Supprimer</a></td>\n                          </tr>\n                      </tbody>\n                  </table>\n              </div>\n              \n          </div>\n      </div>\n      <!--End Advanced Tables -->\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/users/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./ClientApp/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
        this.users = new Array();
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var getAllUsers = this.userService.getAllUsers();
        getAllUsers.subscribe(function (result) { _this.users = result.json(); }, function (error) { console.error(error); });
        this.users;
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("./ClientApp/app/users/user-list/user-list.component.html"),
            styles: [__webpack_require__("./ClientApp/app/users/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./ClientApp/app/users/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/users/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row text-center \">\n    <div class=\"col-md-12\">\n      <br />\n      <br />\n      <h2>Nouvel utilisateur</h2>\n\n      <h5>Ajout de nouvel utilisateur</h5>\n      <br />\n    </div>\n  </div>\n  <div class=\"row \">\n    <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1\">\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <strong> Entrer les détails du nouvel utilisateur! </strong>\n        </div>\n        <div class=\"panel-body\">\n          <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\n          <form (submit)=\"addUser()\" #theForm=\"ngForm\" novalidate method=\"POST\">\n            <br />\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-tag\"></i>\n              </span>\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email\" id=\"email\" name=\"email\" [(ngModel)]=\"userVm.email\" required\n                #email=\"ngModel\" />\n              <div class=\"text-danger\" *ngIf=\"email.touched && email.invalid && email.errors.required\">L'identifiant est requis!</div>\n            </div>\n\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-tag\"></i>\n              </span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Prénom\" id=\"Firstname\" name=\"Firstname\" [(ngModel)]=\"userVm.Firstname\"\n                required #Firstname=\"ngModel\" />\n              <div class=\"text-danger\" *ngIf=\"Firstname.touched && Firstname.invalid && Firstname.errors.required\">L'identifiant est requis!</div>\n            </div>\n\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-tag\"></i>\n              </span>\n              <input type=\"text\" class=\"form-control\" placeholder=\"Nom\" id=\"Lastname\" name=\"Lastname\" [(ngModel)]=\"userVm.Lastname\" required\n                #Lastname=\"ngModel\" />\n              <div class=\"text-danger\" *ngIf=\"Lastname.touched && Lastname.invalid && Lastname.errors.required\">L'identifiant est requis!</div>\n            </div>\n\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-tag\"></i>\n              </span>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Mot de passe\" id=\"Password\" name=\"Password\" [(ngModel)]=\"userVm.Password\"\n                required #Password=\"ngModel\" />\n              <div class=\"text-danger\" *ngIf=\"Password.touched && Password.invalid && Password.errors.required\">L'identifiant est requis!</div>\n            </div>\n\n            <div class=\"form-group input-group\">\n              <span class=\"input-group-addon\">\n                <i class=\"fa fa-tag\"></i>\n              </span>\n\n              <select id=\"UserType\" name=\"UserType\" [(ngModel)]=\"userVm.UserType\" required #UserType=\"ngModel\">\n                <option >Sélectionner un type</option>\n                <option value=\"1\">Employé</option>\n                <option value=\"2\">Administrateur</option>\n              </select>\n\n              <div class=\"text-danger\" *ngIf=\"UserType.touched && UserType.invalid && UserType.errors.required\">Le type est requis!</div>\n            </div>\n\n            <button class=\"btn btn-primary \" (click)=\"addUser()\" [disabled]=\"theForm.invalid\">Valider</button>\n            <button class=\"btn btn-default \" (click)=\"goBack()\">Annuler</button>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./ClientApp/app/users/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModels_UserViewModel__ = __webpack_require__("./ClientApp/ViewModels/UserViewModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./ClientApp/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userVm = new __WEBPACK_IMPORTED_MODULE_1__ViewModels_UserViewModel__["a" /* UserViewModel */]();
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.addUser = function () {
        var _this = this;
        // tslint:disable-next-line:prefer-const
        var addUser = this.userService.createUser(this.userVm);
        addUser.subscribe(function () { _this.router.navigate(['/users']); }, function (error) { return console.warn(error); });
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./ClientApp/app/users/user/user.component.html"),
            styles: [__webpack_require__("./ClientApp/app/users/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./ClientApp/app/voiture/voiture.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/voiture/voiture.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  voiture works!\n</p>\n"

/***/ }),

/***/ "./ClientApp/app/voiture/voiture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoitureComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoitureComponent = /** @class */ (function () {
    function VoitureComponent() {
    }
    VoitureComponent.prototype.ngOnInit = function () {
    };
    VoitureComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-voiture',
            template: __webpack_require__("./ClientApp/app/voiture/voiture.component.html"),
            styles: [__webpack_require__("./ClientApp/app/voiture/voiture.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VoitureComponent);
    return VoitureComponent;
}());



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map