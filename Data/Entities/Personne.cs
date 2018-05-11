using System;
using System.Collections.Generic;

namespace Entrepot.Data.Entities {
    public class Personne {
        public Personne () {
        }
        public Guid Id{ get; set; }
        public String Nom{ get; set; }
        public String Adresse{ get; set; }
        public String Tel{ get; set; }
    }
}
