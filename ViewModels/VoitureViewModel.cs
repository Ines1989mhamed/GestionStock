using System;
using System.ComponentModel.DataAnnotations;
using Entrepot.Data.Entities;

namespace Entrepot.ViewModels {

    public class VoitureViewModel {

        public String Matricule { get; set; }
        public String designation { get; set; }
    }
}