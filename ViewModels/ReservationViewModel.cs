using System;
using System.Collections.Generic;
using Entrepot.Data.Entities;

namespace Entrepot.ViewModels
{
  public class ReservationViewModel{
        
       
        public DateTime DateDeb;
        public DateTime Datefin;
        public List<LigneProduit> LignesProduits { get => LignesProduit; set => LignesProduit = value; }
        List<LigneProduit> LignesProduit { get; set; } = new List<LigneProduit> ();
        public Client Client{ get; set; }
        public Utilisateur Employee{ get; set; }
    }


}
