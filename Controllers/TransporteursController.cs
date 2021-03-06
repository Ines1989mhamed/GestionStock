using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entrepot.Data;
using Entrepot.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Entrepot.Controllers {
    [Route ("api/[controller]")]
    public class TransporteursController : Controller {
        public EntrepotContext _Db { get; }

        public TransporteursController (EntrepotContext _db) {
            _Db = _db;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get (bool includeItems = true) {
            try {
                //var username = User.Identity.Name;

                var result = _Db.Transporteurs.ToList ();

                return Ok (result);
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la récupération de la liste des Transporteurs! : {0}", ex.ToString ()));
            }
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public IActionResult Get (Guid id) {
            try {
                //var username = User.Identity.Name;

                var result = _Db.Transporteurs.Where (f => f.Id == id).FirstOrDefault ();
                if (result == null)
                    return NotFound (string.Format ("Transporteur avec l'identifiant {0} est non trouvée", id));
                return Ok (result);
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la récupération du transporteur! : {0}", ex.ToString ()));
            }
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post ([FromBody] Transporteur transporteur) {
            try {
                transporteur.Id = Guid.NewGuid ();
                _Db.Transporteurs.Add (transporteur);
                if (_Db.SaveChanges () != 0)
                    return Created ($"/api/Transporteurs/{transporteur.Id}", transporteur);;
            } catch (Exception ex) {

                return BadRequest (string.Format ("Echec de l'ajout de la transporteur! : {0}", ex.ToString ()));
            }
            return BadRequest ("Echec de l'ajout de la transporteur!");
        }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public IActionResult Put (Guid id, [FromBody] Transporteur transporteur) {
            var result = _Db.Transporteurs.Where (f => f.Id == id).FirstOrDefault ();
            if (result == null || transporteur.Id != id)
                return NotFound (string.Format ("Transporteur avec l'identifiant {0} est non trouvée", id));
            else {
                try {
                    _Db.Update (transporteur);
                    if (_Db.SaveChanges () != 0)
                        return Ok (transporteur);
                    else
                        return Ok (string.Format ("Aucune opération n'est effectuée!"));
                } catch (Exception ex) {
                    return BadRequest (string.Format ("Echec de la modification de la transporteur! : {0}", ex.ToString ()));
                }
            }

        }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public IActionResult Delete (Guid id) {
            var result = _Db.Transporteurs.Where (f => f.Id == id).FirstOrDefault ();
            if (result == null)
                return NotFound (string.Format ("Transporteur avec l'identifiant {0} est non trouvée", id));
            try {
                _Db.Remove (result);
                if (_Db.SaveChanges () != 0)
                    return Ok (result);
                else
                    return Ok (string.Format ("Aucune opération n'est effectuée!"));
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la suppression de la transporteure! : {0}", ex.ToString ()));
            }
        }
    }
}