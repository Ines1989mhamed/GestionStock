import { FicheViewModel } from "./FicheViewModel";
import { ClientViewModel } from "./ClientViewModel";

export class FicheClientViewModel extends FicheViewModel {
  public Client : ClientViewModel;

    constructor() {
        super();
    }
}