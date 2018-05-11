using System;
using System.ComponentModel.DataAnnotations;
using Entrepot.Data.Entities;

namespace Entrepot.ViewModels
{
    public class FicheClientViewModel : FicheViewModel {

        public Client Client{get; set;}
    }
}