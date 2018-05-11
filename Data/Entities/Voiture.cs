using System;
using System.Collections.Generic;

namespace Entrepot.Data.Entities {

public class Voiture{
    public Voiture(){
    }
    public Guid Id{ get; set; }
    public String Matricule{ get; set; }
    public String designation { get; set; }
}
}