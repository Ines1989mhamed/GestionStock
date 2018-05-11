using System;
using System.Collections.Generic;

namespace Entrepot.Data.Entities {
    public class Fiche {
        public Fiche () {

        }
        public Guid Id { get; set; }
        public String Designation { get; set; }
        public List<LigneProduit> LignesProduits { get => LignesProduit; set => LignesProduit = value; }
        public Utilisateur Utilisateur { get; set; }
        public Transporteur Transporteur { get; set; }
        public int Num_Fiche{ get; set; }
        public DateTime DateEntree;
        public int Nb_Ligne{ get; set; }
        List<LigneProduit> LignesProduit = new List<LigneProduit> ();
    }
}