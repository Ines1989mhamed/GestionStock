using System;
using System.Collections.Generic;

namespace Entrepot.Data.Entities {
    public class FicheClient: Fiche {
        public FicheClient () {

        }

        public Client Client { get; set; }

    }
}