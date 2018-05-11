using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Entrepot.Data;
using Entrepot.Data.Entities;
using Entrepot.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace Entrepot.Controllers {
  [Route ("api/[controller]")]
  public class AccountController : Controller {
    private readonly ILogger<AccountController> _logger;
    private readonly SignInManager<Utilisateur> _signInManager;
    private readonly UserManager<Utilisateur> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly IConfiguration _config;

    private readonly EntrepotContext _context;

    public AccountController (ILogger<AccountController> logger,
      SignInManager<Utilisateur> signInManager,
      UserManager<Utilisateur> userManager,
      IConfiguration config,
      RoleManager<IdentityRole> roleManager,
      EntrepotContext context) {
      _logger = logger;
      _signInManager = signInManager;
      _userManager = userManager;
      _config = config;
      _context = context;
      _roleManager = roleManager;
    }

    [HttpGet ("logout")]
    public async Task<IActionResult> Logout () {
      await _signInManager.SignOutAsync ();
      return Ok ();
    }

    [HttpPost ("CreateUser")]
    public async Task<IActionResult> CreateUser ([FromBody] UserViewModel model) {
      if (ModelState.IsValid) {

        IdentityResult result = new IdentityResult ();

        string userRoleName = "Employee";
        if (model.UserType == UserType.Admin) {
          userRoleName = "Admin";
        }

        if (!_roleManager.RoleExistsAsync (userRoleName).Result) {
          var userRole = new IdentityRole (userRoleName);
          result = await _roleManager.CreateAsync (userRole);
          if (!result.Succeeded)
            return BadRequest ();
        }

        Utilisateur user = new Utilisateur () {
          UserName = model.Email,
          Lastname = model.Lastname,
          Firstname = model.Firstname,
          Email = model.Email,
        };

        result = await this._userManager.CreateAsync (user, model.Password);
        if (!result.Succeeded)
          return BadRequest ();

        result = await _userManager.AddToRoleAsync (user, userRoleName);
        if (!result.Succeeded)
          return BadRequest ();

        return Created ("", model);
      }
      return BadRequest ();
    }

    [HttpGet ("GetAllUsers")]
    public IActionResult GetAllUsers () {
      var result = this._context.Users.Select (u => new { u.Email, u.Firstname, u.Lastname }).ToList ();
      return Ok (result);
    }

    [HttpPost ("CreateToken")]
    public async Task<IActionResult> CreateToken ([FromBody] LoginViewModel model) {
      if (ModelState.IsValid) {
        var user = await _userManager.FindByNameAsync (model.Username);

        if (user != null) {
          var result = await _signInManager.CheckPasswordSignInAsync (user, model.Password, false);

          if (result.Succeeded) {
            // Create the token
            var claims = new [] {
              new Claim (JwtRegisteredClaimNames.Sub, user.Email),
              new Claim (JwtRegisteredClaimNames.Jti, Guid.NewGuid ().ToString ()),
              new Claim (JwtRegisteredClaimNames.UniqueName, user.UserName)
            };

            var key = new SymmetricSecurityKey (Encoding.UTF8.GetBytes (_config["Tokens:Key"]));
            var creds = new SigningCredentials (key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken (
              _config["Tokens:Issuer"],
              _config["Tokens:Audience"],
              claims,
              expires : DateTime.Now.AddMinutes (30),
              signingCredentials : creds);

            var results = new {
              token = new JwtSecurityTokenHandler ().WriteToken (token),
              expiration = token.ValidTo
            };

            return Created ("", results);
          }
        }
      }

      return BadRequest ();
    }

  }
}