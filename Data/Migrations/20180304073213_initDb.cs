using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Entrepot.Migrations
{
    public partial class initDb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fiches",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Designation = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fiches", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Produits",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Designation = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LigneProduits",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Designation = table.Column<string>(nullable: true),
                    FicheId = table.Column<Guid>(nullable: true),
                    Fiche_Id = table.Column<Guid>(nullable: false),
                    ProduitId = table.Column<Guid>(nullable: true),
                    Produit_Id = table.Column<Guid>(nullable: false),
                    Quantite = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LigneProduits", x => x.Id);
                    table.ForeignKey(
                        name: "FK_LigneProduits_Fiches_FicheId",
                        column: x => x.FicheId,
                        principalTable: "Fiches",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_LigneProduits_Produits_ProduitId",
                        column: x => x.ProduitId,
                        principalTable: "Produits",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_LigneProduits_FicheId",
                table: "LigneProduits",
                column: "FicheId");

            migrationBuilder.CreateIndex(
                name: "IX_LigneProduits_ProduitId",
                table: "LigneProduits",
                column: "ProduitId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LigneProduits");

            migrationBuilder.DropTable(
                name: "Fiches");

            migrationBuilder.DropTable(
                name: "Produits");
        }
    }
}
