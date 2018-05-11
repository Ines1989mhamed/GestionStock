using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entrepot.Data;
using Entrepot.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Entrepot.Controllers {
    [Route ("api/[controller]")]
    public class FournisseursController : Controller {
        public EntrepotContext _Db { get; }

        public FournisseursController (EntrepotContext _db) {
            _Db = _db;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get (bool includeItems = true) {
            try {
                //var username = User.Identity.Name;

                var result = _Db.Fournisseurs.ToList ();

                return Ok (result);
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la récupération de la liste des Fournisseurs! : {0}", ex.ToString ()));
            }
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public IActionResult Get (Guid id) {
            try {
                //var username = User.Identity.Name;

                var result = _Db.Fournisseurs.Where (f => f.Id == id).FirstOrDefault ();
                if (result == null)
                    return NotFound (string.Format ("Fournisseur avec l'identifiant {0} est non trouvée", id));
                return Ok (result);
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la récupération du fournisseur! : {0}", ex.ToString ()));
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post ([FromBody] Fournisseur fournisseur) {
            try {
                fournisseur.Id = Guid.NewGuid ();
                _Db.Fournisseurs.Add (fournisseur);
                if (_Db.SaveChanges () != 0)
                    return Created ($"/api/Fournisseurs/{fournisseur.Id}", fournisseur);;
            } catch (Exception ex) {

                return BadRequest (string.Format ("Echec de l'ajout de la fournisseur! : {0}", ex.ToString ()));
            }
            return BadRequest ("Echec de l'ajout de la fournisseur!");
        }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public IActionResult Put (Guid id, [FromBody] Fournisseur fournisseur) {
            var result = _Db.Fournisseurs.Where (f => f.Id == id).FirstOrDefault ();
            if (result == null || fournisseur.Id != id)
                return NotFound (string.Format ("Fournisseur avec l'identifiant {0} est non trouvée", id));
            else {
                try {
                    _Db.Update (fournisseur);
                    if (_Db.SaveChanges () != 0)
                        return Ok (fournisseur);
                    else
                        return Ok (string.Format ("Aucune opération n'est effectuée!"));
                } catch (Exception ex) {
                    return BadRequest (string.Format ("Echec de la modification de la fournisseur! : {0}", ex.ToString ()));
                }
            }

        }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public IActionResult Delete (Guid id) {
            var result = _Db.Fournisseurs.Where (f => f.Id == id).FirstOrDefault ();
            if (result == null)
                return NotFound (string.Format ("Fournisseur avec l'identifiant {0} est non trouvée", id));
            try {
                _Db.Remove (result);
                if (_Db.SaveChanges () != 0)
                    return Ok (result);
                else
                    return Ok (string.Format ("Aucune opération n'est effectuée!"));
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la suppression de la fournisseure! : {0}", ex.ToString ()));
            }
        }
    }
}