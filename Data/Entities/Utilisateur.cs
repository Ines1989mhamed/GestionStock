using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Entrepot.Data.Entities {
  public class Utilisateur : IdentityUser {
    public Utilisateur () { }
    public string Firstname { get; set; }
    public string Lastname { get; set; }

    public List<Fiche> Fiches { get; set; } = new List<Fiche> ();
  }
}