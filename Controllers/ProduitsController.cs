using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entrepot.Data;
using Entrepot.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Entrepot.Controllers {
    [Route ("api/[controller]")]
    public class ProduitsController : Controller {
        public EntrepotContext _Db { get; }

        public ProduitsController (EntrepotContext _db) {
            _Db = _db;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get (bool includeItems = true) {
            try {
                //var username = User.Identity.Name;

                var result = _Db.Produits.ToList ();

                return Ok (result);
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la récupération de la liste des produits! : {0}", ex.ToString ()));
            }
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public IActionResult Get (Guid id) {
            try {
                //var username = User.Identity.Name;

                var result = _Db.Produits.Where (f => f.Id == id).FirstOrDefault ();
                if (result == null)
                    return NotFound (string.Format ("Produit avec l'identifiant {0} est non trouvée", id));
                return Ok (result);
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la récupération de la produit! : {0}", ex.ToString ()));
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post ([FromBody] Produit produit) {
            try {
                produit.Id = Guid.NewGuid ();
                _Db.Produits.Add (produit);
                if (_Db.SaveChanges () != 0)
                    return Created ($"/api/produits/{produit.Id}", produit);;
            } catch (Exception ex) {

                return BadRequest (string.Format ("Echec de l'ajout du produit! : {0}", ex.ToString ()));
            }
            return BadRequest ("Echec de l'ajout de la produit!");
        }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public IActionResult Put (Guid id, [FromBody] Produit produit) {
            var result = _Db.Produits.Where (f => f.Id == id).FirstOrDefault ();
            if (result == null || produit.Id != id)
                return NotFound (string.Format ("Produit avec l'identifiant {0} est non trouvée", id));
            else {
                try {
                    _Db.Update (produit);
                    if (_Db.SaveChanges () != 0)
                        return Ok (produit);
                    else
                        return Ok (string.Format ("Aucune opération n'est effectuée!"));
                } catch (Exception ex) {
                    return BadRequest (string.Format ("Echec de la modification de la produit! : {0}", ex.ToString ()));
                }
            }

        }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public IActionResult Delete (Guid id) {
            var result = _Db.Produits.Where (f => f.Id == id).FirstOrDefault ();
            if (result == null)
                return NotFound (string.Format ("Produit avec l'identifiant {0} est non trouvée", id));
            try {
                _Db.Remove (result);
                if (_Db.SaveChanges () != 0)
                    return Ok (result);
                else
                    return Ok (string.Format ("Aucune opération n'est effectuée!"));
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la suppression de la produite! : {0}", ex.ToString ()));
            }
        }
    }
}