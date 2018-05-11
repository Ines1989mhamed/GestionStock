import { LigneProduitViewModel } from "./LigneProduitViewModel";

import { TransporteurViewModel } from "./TransporteurViewmodel";
import { VoitureViewModel } from "./VoitureViewModel";

export class FicheViewModel {

public LignesProduits: Array<LigneProduitViewModel> = new Array<LigneProduitViewModel>();
public Voiture :VoitureViewModel;
public Transporteur :string ;
public DateFiche : Date;
public Employee : string ;
public Num_Ligne : number;
public Num_Fiche : number;
constructor() {
}
}
