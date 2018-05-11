using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Entrepot.Data;
using Entrepot.Data.Entities;
using Entrepot.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Entrepot.Controllers {
    [Route ("api/[controller]")]
    [Authorize (AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class FichesSortiesController : Controller {
        public EntrepotContext _Db { get; }
        private readonly IEntrepotRepository _repository;
        private readonly ILogger<FichesSortiesController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<Utilisateur> _userManager;
        
        public FichesSortiesController (IEntrepotRepository repository,
            ILogger<FichesSortiesController> logger,
            IMapper mapper,
            UserManager<Utilisateur> userManager) {
            _repository = repository;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get (bool includeItems = true) {
            try {
                var username = User.Identity.Name;

                var results = _repository.GetAllFichesSortiesByUser (username, includeItems);
                return Ok (_mapper.Map<IEnumerable<FicheSortie>, IEnumerable<FicheSortieViewModel>> (results));
            } catch (Exception ex) {
                _logger.LogError ($"Failed to get orders: {ex}");
                return BadRequest (string.Format ("Echec de la récupération de la liste des fiches! : {0}", ex.ToString ()));
            }
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public IActionResult Get (Guid id) {
            try {
                var username = User.Identity.Name;
                var result = _repository.GetFicheSortieById (User.Identity.Name, id);

                if (result == null)
                    return NotFound (string.Format ("Fiche avec l'identifiant {0} est non trouvée", id));
                return Ok (_mapper.Map<FicheSortie, FicheSortieViewModel> (result));
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la récupération de la fiche! : {0}", ex.ToString ()));
            }
        }

        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post ([FromBody] FicheSortieViewModel ficheSortieVM) {
            try {
                if (ModelState.IsValid) {
                    var newFicheSortie = _mapper.Map<FicheSortieViewModel, FicheSortie> (ficheSortieVM);
                    ficheSortieVM.Id = Guid.NewGuid ();
                    var currentUser = await _userManager.FindByNameAsync (User.Identity.Name);
                    newFicheSortie.Utilisateur = currentUser;
                    _repository.AddFicheSortie (newFicheSortie);

                    if (_Db.SaveChanges () != 0)
                        return Created ($"/api/fichesSortie/{newFicheSortie.Id}", _mapper.Map<FicheSortie, FicheSortieViewModel> (newFicheSortie));
                } else {
                    return BadRequest ("Echec de l'ajout de la fiche!");
                }
            } catch (Exception ex) {

                return BadRequest (string.Format ("Echec de l'ajout de la fiche! : {0}", ex.ToString ()));
            }
            return BadRequest ("Echec d'ajout d'une nouvelle fiche!");
        }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public IActionResult Put (Guid id, [FromBody] FicheSortie ficheSortie) {
            var result = _Db.FichesSorties.Where (f => f.Id == id).FirstOrDefault ();
            if (result == null || ficheSortie.Id != id)
                return NotFound (string.Format ("Fiche avec l'identifiant {0} est non trouvée", id));
            else {
                try {
                    _Db.Update (ficheSortie);
                    if (_Db.SaveChanges () != 0)
                        return Ok (ficheSortie);
                    else
                        return Ok (string.Format ("Aucune opération n'est effectuée!"));
                } catch (Exception ex) {
                    return BadRequest (string.Format ("Echec de la modification de la fiche! : {0}", ex.ToString ()));
                }
            }

        }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public IActionResult Delete (Guid id) {
            var result = _Db.FichesSorties.Where (f => f.Id == id).FirstOrDefault ();
            if (result == null)
                return NotFound (string.Format ("Fiche avec l'identifiant {0} est non trouvée", id));
            try {
                _Db.Remove (result);
                if (_Db.SaveChanges () != 0)
                    return Ok (result);
                else
                    return Ok (string.Format ("Aucune opération n'est effectuée!"));
            } catch (Exception ex) {
                return BadRequest (string.Format ("Echec de la suppression de la fichee! : {0}", ex.ToString ()));
            }
        }
    }
}