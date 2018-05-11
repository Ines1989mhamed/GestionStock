using System;
using System.Collections.Generic;
using Entrepot.Data.Entities;

namespace Entrepot.Data
{
  public interface IEntrepotRepository
  {
    IEnumerable<Produit> GetAllProduits();

    IEnumerable<Fiche> GetAllFiches(bool includeItems);
    IEnumerable<Fiche> GetAllFichesByUser(string username, bool includeItems);
    Fiche GetFicheById(string username, Guid id);
    void AddFiche(Fiche newFiche);
    IEnumerable<FicheRetour> GetAllFichesRetours(bool includeItems);
    
    IEnumerable<FicheRetour> GetAllFichesRetoursByUser(string username, bool includeItems);
    FicheRetour GetFicheRetourById(string username, Guid id);
      void AddFicheRetour(FicheRetour newFicheReour);

    IEnumerable<FicheSortie> GetAllFichesSorties(bool includeItems);
    IEnumerable<FicheSortie> GetAllFichesSortiesByUser(string username, bool includeItems);
    FicheSortie GetFicheSortieById(string username, Guid id);
    void AddFicheSortie(FicheSortie newFicheSortie);
    bool SaveAll();
    void AddEntity(object model);
  }
}