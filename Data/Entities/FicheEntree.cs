using System;
using System.Collections.Generic;

namespace Entrepot.Data.Entities {
    public class FicheEntree : Fiche {
        public FicheEntree () {

        }

        public Fournisseur Fournisseur { get; set; }
 
    }
}