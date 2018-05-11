using Entrepot.Data.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Entrepot.Data
{
    public class EntrepotContext : IdentityDbContext<Utilisateur>
    {
        public EntrepotContext()
        {
            
        }
        public EntrepotContext(DbContextOptions<EntrepotContext> options) : base(options)
        {
        }
        public DbSet<FicheEntree> Fiches { get; set; }
        public DbSet<FicheEntree> FicheEntrees { get; set; }
        public DbSet<FicheRetour> FichesRetours { get; set; }
        public DbSet<FicheSortie> FichesSorties { get; set; }
        public DbSet<Produit> Produits { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Transporteur> Transporteurs { get; set; }
        public DbSet<Fournisseur> Fournisseurs { get; set; }
        public DbSet<Reservation> Reservations{get;set;}
        public DbSet<Employee> Employees { get; set; }
        
        public DbSet<LigneProduit> LigneProduits { get; set; }
        public DbSet<Voiture> Voitures { get; set; }
    }
}