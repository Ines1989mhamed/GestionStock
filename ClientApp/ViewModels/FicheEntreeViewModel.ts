import { FicheViewModel } from "./FicheViewModel";
import { FournisseurViewModel } from "./FournisseurViewModel";


export class FicheEntreeViewModel extends FicheViewModel {
  public Fournisseur : FournisseurViewModel;
    constructor() {
        super();
    }
}