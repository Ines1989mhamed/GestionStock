using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entrepot.Data.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Entrepot.Data
{
  public class EntrepotRepository : IEntrepotRepository
  {
    private readonly EntrepotContext _ctx;
    private readonly ILogger<EntrepotRepository> _logger;

    public EntrepotRepository(EntrepotContext ctx, ILogger<EntrepotRepository> logger)
    {
      _ctx = ctx;
      _logger = logger;
    }

    public void AddEntity(object model)
    {
      _ctx.Add(model);
    }

    public void AddFiche(Fiche newFiche)
    {
      // Convert new products to lookup of product
      foreach (var item in newFiche.LignesProduits)
      {
        item.Produit = _ctx.Produits.Find(item.Produit.Id);
      }

      AddEntity(newFiche);
    }
    public IEnumerable<Fiche> GetAllFiches(bool includeLignesProduits)
    {
      if (includeLignesProduits)
      {

        return _ctx.FicheEntrees
                   .Include(o => o.LignesProduits)
                   .ThenInclude(i => i.Produit)
                   .ToList();

      } 
      else
      {
        return _ctx.FicheEntrees
                   .ToList();
      }
    }
    public IEnumerable<Fiche> GetAllFichesByUser(string username, bool includeLignesProduits)
    {
      if (includeLignesProduits)
      {

        return _ctx.FicheEntrees
                //   .Where(o => o.User.UserName == username)
                   .Include(o => o.LignesProduits)
                   .ThenInclude(i => i.Produit)
                   .ToList();

      }
      else
      {
        return _ctx.FicheEntrees
               //    .Where(o => o.User.UserName == username)
                   .ToList();
      }
    }
public Fiche GetFicheById(string username, Guid id)
    {
      return _ctx.FicheEntrees
                 .Include(o => o.LignesProduits)
                 .ThenInclude(i => i.Produit)
                 .Where(o => o.Id == id) //&& o.User.UserName == username
                 .FirstOrDefault();
    }

 public void AddFicheRetour(FicheRetour newFicheRetour)
    {
      // Convert new products to lookup of product
      foreach (var item in newFicheRetour.LignesProduits)
      {
        item.Produit = _ctx.Produits.Find(item.Produit.Id);
      }

      AddEntity(newFicheRetour);
    }
public IEnumerable<FicheRetour> GetAllFichesRetours(bool includeLignesProduits)
    {
      if (includeLignesProduits)
      {

        return _ctx.FichesRetours
                   .Include(o => o.LignesProduits)
                   .ThenInclude(i => i.Produit)
                   .ToList();

      } 
      else
      {
        return _ctx.FichesRetours
                   .ToList();
      }
    }

    public IEnumerable<FicheRetour> GetAllFichesRetoursByUser(string username, bool includeLignesProduits)
    {
      if (includeLignesProduits)
      {

        return _ctx.FichesRetours
                //   .Where(o => o.User.UserName == username)
                   .Include(o => o.LignesProduits)
                   .ThenInclude(i => i.Produit)
                   .ToList();

      }
      else
      {
        return _ctx.FichesRetours
               //    .Where(o => o.User.UserName == username)
                   .ToList();
      }
    }
public FicheRetour GetFicheRetourById(string username, Guid id)
    {
      return _ctx.FichesRetours
                 .Include(o => o.LignesProduits)
                 .ThenInclude(i => i.Produit)
                 .Where(o => o.Id == id) //&& o.User.UserName == username
                 .FirstOrDefault();
    }
    
    public IEnumerable<Produit> GetAllProduits()
    {
      try
      {
        _logger.LogInformation("GetAllProduits was called");

        return _ctx.Produits
                   .OrderBy(p => p.Designation)
                   .ToList();
      }
      catch (Exception ex)
      {
        _logger.LogError($"Failed to get all products: {ex}");
        return null;
      }
    }

    

    public bool SaveAll()
    {
      return _ctx.SaveChanges() > 0;
    }

        public IEnumerable<FicheSortie> GetAllFichesSorties(bool includeItems)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<FicheSortie> GetAllFichesSortiesByUser(string username, bool includeItems)
        {
            throw new NotImplementedException();
        }

        public FicheSortie GetFicheSortieById(string username, Guid id)
        {
            throw new NotImplementedException();
        }

        public void AddFicheSortie(FicheSortie newFicheSortie)
        {
            throw new NotImplementedException();
        }
    }
}
