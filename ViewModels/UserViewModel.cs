using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entrepot.ViewModels {
  public class UserViewModel {
    [Required]
    public string Email { get; set; }
    [Required]
    public string Password { get; set; }

    public string Firstname { get; set; }
    public string Lastname { get; set; }
    public UserType UserType { get; set; } = UserType.Employee;
  }

  public enum UserType {
    Employee = 1,
    Admin = 2
  }
}