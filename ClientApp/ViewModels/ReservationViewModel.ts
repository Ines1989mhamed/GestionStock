import { Guid } from "./Guid";
import { ClientViewModel } from "./ClientViewModel";
import { EmployeeViewModel } from "./EmployeeViewModel";

import { LigneProduitViewModel } from "./LigneProduitViewModel";


export class ReservationViewModel {
    public Id: string;
    public DateDeb : Date;
    public DateFin : Date;
    public LignesProduits: Array<LigneProduitViewModel> = new Array<LigneProduitViewModel>();
    public Client: ClientViewModel;
    public Employee : EmployeeViewModel;
}