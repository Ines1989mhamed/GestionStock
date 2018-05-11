using System;
using System.Collections.Generic;
using Entrepot.Data.Entities;

namespace Entrepot.ViewModels
{
  public class FicheViewModel
  {
    public Guid Id { get; set; }
    public string Designation { get; set; }
    public int Num_Fiche { get; set; }
    public List<LigneProduit> LignesProduits { get => LignesProduit; set => LignesProduit = value; }
        public Utilisateur Utilisateur { get; set; }
        public Transporteur Transporteur { get; set; }
       
        public DateTime DateFiche;
        public int Nb_Ligne;
        List<LigneProduit> LignesProduit = new List<LigneProduit> ();

  }
}