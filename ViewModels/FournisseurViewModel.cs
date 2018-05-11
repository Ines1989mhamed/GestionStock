using System;

using System.ComponentModel.DataAnnotations;
namespace Entrepot.ViewModels {

    public class FournisseurViewModel : PersonneViewModel{
        public string Designation { get; set; }
    }
}