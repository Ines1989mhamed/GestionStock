using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace Entrepot.Migrations
{
    public partial class qteStock : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Designation",
                table: "Produits",
                nullable: true,
                oldClrType: typeof(Guid));

            migrationBuilder.AddColumn<int>(
                name: "QteStock",
                table: "Produits",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Nb_Ligne",
                table: "Fiche",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Num_Fiche",
                table: "Fiche",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Employees",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Adresse = table.Column<string>(nullable: true),
                    Matricule = table.Column<string>(nullable: true),
                    Nom = table.Column<string>(nullable: true),
                    Prenom = table.Column<string>(nullable: true),
                    Tel = table.Column<string>(nullable: true),
                    UtilisateurId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Employees", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Employees_AspNetUsers_UtilisateurId",
                        column: x => x.UtilisateurId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Employees_UtilisateurId",
                table: "Employees",
                column: "UtilisateurId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Employees");

            migrationBuilder.DropColumn(
                name: "QteStock",
                table: "Produits");

            migrationBuilder.DropColumn(
                name: "Nb_Ligne",
                table: "Fiche");

            migrationBuilder.DropColumn(
                name: "Num_Fiche",
                table: "Fiche");

            migrationBuilder.AlterColumn<Guid>(
                name: "Designation",
                table: "Produits",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
