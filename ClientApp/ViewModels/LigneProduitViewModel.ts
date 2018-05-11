import { ProduitViewModel } from "./ProduitViewModel";

export class LigneProduitViewModel {

public Quantite: number; 
public Fiche_Id :string
public Nb_Ligne: number;
public Produit:ProduitViewModel = new ProduitViewModel();
constructor() {

}
}
