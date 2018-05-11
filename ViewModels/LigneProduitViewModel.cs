using System;
using System.ComponentModel.DataAnnotations;

namespace Entrepot.ViewModels
{
  public class LigneProduitViewModel
  {
    public Guid Id { get; set; }
    [Required]
    public int Quantity { get; set; }
    [Required]
    public int ProductId { get; set; }
  }
}