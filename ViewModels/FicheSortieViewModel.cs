using System;
using System.ComponentModel.DataAnnotations;
using Entrepot.Data.Entities;

namespace Entrepot.ViewModels
{
    public class FicheSortieViewModel : FicheClientViewModel {
        public String  Evennement {get; set;}

    }
}