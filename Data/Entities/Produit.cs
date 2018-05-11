using System;

namespace Entrepot.Data.Entities
{
    public class Produit
    {
        public Produit()
        {
            
        }
        public Guid Id { get; set; }
        public string Designation { get; set; }
        public int QteStock { get; set; }
    }
}