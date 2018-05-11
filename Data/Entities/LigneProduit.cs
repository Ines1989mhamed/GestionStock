using System;

namespace Entrepot.Data.Entities{
    public class LigneProduit
    {
        public LigneProduit()
        {
            
        }
        public Guid Id { get; set; }
        public string Designation { get; set; }
        public Guid Fiche_Id { get; set; }
        public int Quantite { get; set; }
        public Guid Produit_Id { get; set; }

        public Produit Produit { get; set; }
        public Fiche Fiche  { get; set; }

    }
}