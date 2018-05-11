using System;
using System.Collections.Generic;

namespace Entrepot.Data.Entities {
    public class Reservation{
        public Reservation(){}
        public Guid Id{ get; set; }
        public DateTime DateDeb{ get; set; }
        public DateTime Datefin{ get; set; }
        public List<LigneProduit> LignesProduits { get => LignesProduit; set => LignesProduit = value; }
        List<LigneProduit> LignesProduit { get; set; } = new List<LigneProduit> ();
        public Client Client{ get; set; }
        public Utilisateur Employee{ get; set; }
    }


}
