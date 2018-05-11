import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProduitViewModel } from '../../../ViewModels/ProduitViewModel';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  produit: ProduitViewModel = new ProduitViewModel();

  valider () {
    if (this.produit && this.produit.Designation && this.produit.Designation)
    {
      // tslint:disable-next-line:prefer-const
      let createProduct = this.data.createProduit(this.produit);

      createProduct.subscribe(() => {  this.router.navigate(['/produits']) }, err => { console.error('Echec de l"ajout du produit!')});
      ;
    }
  }

  constructor(private data : DataService, private router: Router ) { }

  ngOnInit() {
  }

}
