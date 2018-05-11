using System;
using System.Collections.Generic;
namespace Entrepot.Data.Entities {
    public class Employee {
        public Employee () { }
        public Guid Id { get; set; }
        public String Nom { get; set; }
        public String Matricule { get; set; }
        public String Prenom { get; set; }
        public String Adresse { get; set; }
        public String Tel { get; set; }

        public Utilisateur Utilisateur { get; set; }
    }
}