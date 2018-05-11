using System;
using System.ComponentModel.DataAnnotations;
using Entrepot.Data.Entities;

namespace Entrepot.ViewModels
{
    public class FicheEntreeViewModel : FicheViewModel {

        public Fournisseur Fournisseur{get; set;}
    }
}